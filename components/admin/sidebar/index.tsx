import { useMemo } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import classNames from "classnames";

import { NextLink } from "@/components";
import { routes } from "@/utils/routes";

export const Sidebar = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const links = useMemo(
    () => [
      {
        title: "Dashboard",
        url: routes.admin.dashboard,
      },
      {
        title: "Inbox",
        url: routes.admin.inbox,
      },
    ],
    []
  );

  return (
    <nav className="px-4">
      <a href={routes.admin.index} className="flex items-center pl-5 pt-4">
        <img
          alt="Midone - HTML Admin Template"
          className="w-6"
          src="http://rubick.left4code.com/dist/images/logo.svg"
        />
        <span className="hidden xl:block text-white text-lg ml-3">Rubick</span>
      </a>
      <div className="side-nav__devider my-6" />
      <ul>
        {links.map((link) => {
          const linkActive = router.pathname === link.url;
          return (
            <li key={link.title}>
              <NextLink
                href={link.url}
                title={link.title}
                className={classNames(
                  "flex items-center relative text-white pl-5 py-3 rounded-md mb-2",
                  {
                    "active bg-white hover:bg-white text-gray-800": linkActive,
                    "hover:bg-white hover:bg-opacity-5": !linkActive,
                  }
                )}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="inbox"
                    className="lucide lucide-inbox"
                  >
                    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                    <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" />
                  </svg>
                </div>
                <div className="ml-2">{t(link.title)}</div>
              </NextLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
