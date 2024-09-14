import { Navigate } from "react-router-dom";
import { useUserInfo } from "../context/UserContext";

const PrivateRoute = ({ children }) => {
  const { userInfo, loading } = useUserInfo();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!userInfo) {
    return <Navigate to="/auth/login" />;
  }

  return children;
};

export default PrivateRoute;
