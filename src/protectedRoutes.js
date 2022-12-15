import { Navigate } from "react-router-dom";
import { useAuth } from "./sections/auth/auth";
import api from "./services/api";

export const ProtectedRoute = ({ children }) => {
    const { signed } = useAuth();
    if (!signed) {
        return <Navigate to="/login" />;
    }
    api.defaults.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return children;
};