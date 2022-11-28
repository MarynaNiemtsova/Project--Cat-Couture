import { Outlet } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loader from "./Loader";

const ProtectedRoute = () => <Outlet />;

export default withAuthenticationRequired(ProtectedRoute, {
  onRedirecting: () => <Loader />,
});
