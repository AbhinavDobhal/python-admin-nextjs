import Alert from "@components/ui/alert";
import Button from "@components/ui/button";
import Input from "@components/ui/input";
import PasswordInput from "@components/ui/password-input";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ROUTES } from "@utils/routes";
import { useLoginMutation } from "@data/user/use-login.mutation";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "@components/ui/link";
import { allowedRoles, hasAccess, setAuthCredentials } from "@utils/auth-utils";

type FormValues = {
  email: string;
  password: string;
};
const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("The provided email address format is not valid")
    .required("You must need to provide your email address"),
  password: yup.string().required("Password is Required!"),
});
const defaultValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const { mutate: login, isLoading: loading } = useLoginMutation();
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(loginFormSchema),
  });
  const router = useRouter();

  function onSubmit({ email, password }: FormValues) {
    login(
      {
        variables: {
          email,
          password,
        },
      },
      {
        onSuccess: ({ data }) => {
          if (data?.token) {
            if (hasAccess(allowedRoles, data?.permissions)) {
              setAuthCredentials(data?.token, data?.permissions);
              router.push(ROUTES.DASHBOARD);
              return;
            }
            setErrorMsg("Doesn't have enough permission");
          } else {
            setErrorMsg("The credentials was wrong!");
          }
        },
        onError: () => {},
      }
    );
  }
  return (
    <>
      {errorMsg ? (
        <Alert
          message={errorMsg}
          variant="error"
          closeable={true}
          className="mt-5"
          onClose={() => setErrorMsg("")}
        />
      ) : null}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          label="Email"
          {...register("email")}
          type="email"
          variant="outline"
          className="mb-4"
          error={errors?.email?.message}
        />
        <PasswordInput
          label="Password "
          forgotPassHelpText="Forgot Password"
          {...register("password")}
          error={errors?.password?.message!}
          variant="outline"
          className="mb-4"
          forgotPageLink="/forgot-password"
        />
        <Button className="w-full" loading={loading} disabled={loading}>
          {"Login"}
        </Button>

        <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-8 sm:mt-11 mb-6 sm:mb-8">
          <hr className="w-full" />
          <span className="absolute start-2/4 -top-2.5 px-2 -ms-4 bg-light">
            {"or"}
          </span>
        </div>

        <div className="text-sm sm:text-base text-body text-center">
          {"Don't have any account?"}{" "}
          <Link
            href="/register"
            className="ms-1 underline text-accent font-semibold transition-colors duration-200 focus:outline-none hover:text-accent-hover focus:text-accent-700 hover:no-underline focus:no-underline"
          >
            {"Register as Shop Owner"}
          </Link>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
