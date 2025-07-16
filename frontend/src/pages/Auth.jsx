import { useEffect } from "react";

const Auth = () => {
  useEffect(() => {
    document.title = "Restro - Auth Page";
  }, []);

  return (
    <div>
      Auth
    </div>
  );
};

export default Auth;
