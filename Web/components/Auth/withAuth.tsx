import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { useAuth } from "../../utils/auth/useAuth";
import jwt from "jsonwebtoken";
import { UserType } from "../../utils/auth/AuthType";

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);
    const auth = useAuth();

    useEffect(() => {
      const accessToken = localStorage.getItem("accessToken");
      // if no accessToken was found,then we redirect to "/Login" page.
      if (!accessToken) {
        console.log("No access token found");
        Router.replace("/Login");
      } else {
        const res = jwt.decode(accessToken) as unknown as UserType;
        auth?.setUser(res);
        setVerified(!!res);
      }
    }, []);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;
