import { Navigate } from "react-router-dom";
import { useAuth } from "./sections/auth/auth";

export const AuthRoute = ({ children }) => {
    const { signed } = useAuth();
    if (signed) {
        api.defaults.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
        return <Navigate to="/upload" />;
    }
    return children;
};