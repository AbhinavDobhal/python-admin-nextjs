// import { adminAndOwnerOnly, adminOwnerAndStaffOnly } from "@utils/auth-utils";
import { ROUTES } from "@utils/routes";

export const siteSettings = {
  name: "Admin",
  description: "",
  logo: {
    url: "/logo.svg",
    alt: "Admin",
    href: "/",
    width: 96,
    height: 32,
  },
  defaultLanguage: "en",
  author: {
    name: "test",
    websiteUrl: "https://abhi.io",
    address: "",
  },
  headerLinks: [],
  //   authorizedLinks: [
  //     {
  //       href: ROUTES.PROFILE_UPDATE,
  //       labelTransKey: "authorized-nav-item-profile",
  //     },
  //     {
  //       href: ROUTES.LOGOUT,
  //       labelTransKey: "authorized-nav-item-logout",
  //     },
  //   ],
  currencyCode: "USD",

  product: {
    placeholder: "/product-placeholder.svg",
  },
  avatar: {
    placeholder: "/avatar-placeholder.svg",
  },
};
