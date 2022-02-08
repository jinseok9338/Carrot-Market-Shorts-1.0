import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { useAuth } from "../../utils/auth/useAuth";

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
        // we call the api that verifies the token.
        const data = await verifyToken(accessToken);
        // if token was verified we set the state.
        if (data.verified) {
          setVerified(data.verified);
        } else {
          // If the token was fraud we first remove it from localStorage and then redirect to "/"
          localStorage.removeItem("accessToken");
          console.log("Fraud Access Token");
          Router.replace("/Login");
        }
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
