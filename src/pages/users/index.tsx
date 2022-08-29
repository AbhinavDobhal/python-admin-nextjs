import Card from "@components/common/card";
import { adminOnly } from "@utils/auth-utils";
import Layout from "@components/layouts/admin";
// import UserList from "@components/users/user-list";
// import LinkButton from "@components/ui/link-button";
// import {useState}from "react";
// import ErrorMessage from "@components/ui/error-message";
// import Loader from "@components/ui/loader";

export default function Users() {
  return (
    <>
      <Card className="flex flex-col items-center mb-8 md:flex-row">
        <div className="mb-4 md:w-1/4 md:mb-0">
          <h1 className="text-lg font-semibold text-heading">Users Detail</h1>
        </div>

        <div className="flex items-center w-full md:w-3/4 ms-auto">
          {/* <Search onSearch={handleSearch} /> */}
          {/* <LinkButton
            href={`${ROUTES.USERS}/create`}
            className="h-12 ms-4 md:ms-6"
          >
            <span className="hidden sm:block">
              + {t("form:button-label-add-customer")}
            </span>
            <span className="block sm:hidden">
              + {t("form:button-label-add")}
            </span>
          </LinkButton> */}
        </div>
      </Card>
    </>
  );
}
Users.authenticate = {
  permissions: adminOnly,
};
Users.Layout = Layout;
