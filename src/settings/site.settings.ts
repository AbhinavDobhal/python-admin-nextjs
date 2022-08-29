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

  currencyCode: "USD",
  sidebarLinks: {
    admin: [
      {
        href: ROUTES.DASHBOARD,
        label: "Dashboard",
        icon: "DashboardIcon",
      },

      {
        href: ROUTES.TAGS,
        label: " Tags",
        icon: "TagIcon",
      },

      {
        href: ROUTES.USERS,
        label: " Users",
        icon: "UsersIcon",
      },

      {
        href: ROUTES.SETTINGS,
        label: " Settings",
        icon: "SettingsIcon",
      },
    ],
  },
  product: {
    placeholder: "/product-placeholder.svg",
  },
  avatar: {
    placeholder: "/avatar-placeholder.svg",
  },
};
