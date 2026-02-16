import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useUser();

  return user?.role === "Admin" ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
