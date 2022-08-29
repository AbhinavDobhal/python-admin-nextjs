import Logo from "@components/ui/logo";
import { useUI } from "@contexts/ui.context";
// import AuthorizedMenu from "./authorized-menu";
// import LinkButton from "@components/ui/link-button";
// import { NavbarIcon } from "@components/icons/navbar-icon";
import { motion } from "framer-motion";
// import { useTranslation } from "next-i18next";
import { ROUTES } from "@utils/routes";
import { getAuthCredentials, hasAccess } from "@utils/auth-utils";

const Navbar = () => {
  const { toggleSidebar } = useUI();

  const { permissions } = getAuthCredentials();

  return (
    <header className="fixed z-40 w-full bg-white shadow">
      <nav className="flex items-center justify-between px-5 py-4 md:px-8">
        {/* <!-- Mobile menu button --> */}
        <motion.button
          whileTap={{ scale: 0.88 }}
          onClick={toggleSidebar}
          className="flex items-center justify-center h-full p-2 focus:outline-none focus:text-accent lg:hidden"
        >
          {/* <NavbarIcon /> */}
        </motion.button>

        <div className="hidden md:flex me-auto">
          <Logo />
        </div>

        <div className="flex items-center space-s-8">
          {/* {hasAccess(adminAndOwnerOnly, permissions) && (
            <LinkButton
              href={ROUTES.CREATE_SHOP}
              className="ms-4 md:ms-6"
              size="small"
            >
              {t("common:text-create-shop")}
            </LinkButton>
          )}

          <AuthorizedMenu /> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;