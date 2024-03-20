import Loading from "./Loading";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	const { pathname } = useLocation();
	const { email, isLoading } = useSelector((state) => state.userSlice);

	if (isLoading) {
		return <Loading />;
	}

	if (!isLoading && !email) {
		return <Navigate to="/login" state={{ path: pathname }} />;
	}

	return children;
};

export default PrivateRoute;
