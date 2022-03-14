import React from "react";
import { NextPage } from "next";
import { Login } from "@/components";
import { useAppSelector } from "@/redux/hooks";

const withAuth = (Component: NextPage) => {
  const Auth = <P extends object>(props: P) => {
    const {
      auth: { isLoggedIn },
    } = useAppSelector((state) => state);

    if (!isLoggedIn) {
      return <Login />;
    }

    return (
      <>
        <Component {...props} />
      </>
    );
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
