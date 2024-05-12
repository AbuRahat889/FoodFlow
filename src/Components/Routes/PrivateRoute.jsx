import { useContext } from "react";
import { AuthContex } from "../Contex/AuthProvaider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContex);
  const location = useLocation();

  if (loading) return <p>loading....</p>;
  if (user) return children;



  return <Navigate to='/signin' state={location.pathname} replace={true} ></Navigate>
};

export default PrivateRoute;
