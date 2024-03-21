import Loading from "./Loading";
import { useEffect } from "react";
import auth from "../../utils/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { setUser, toggleLoading } from "../../redux/features/users/usersSlice";

const PrivateRoute = ({ children }) => {
	const dispatch = useDispatch();
	const { pathname } = useLocation();
	const { email, isLoading } = useSelector((state) => state.userSlice);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(
					setUser({
						name: user.displayName,
						email: user.email,
					})
				);
				dispatch(toggleLoading(false));
			} else {
				dispatch(toggleLoading(false));
			}
		});
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	if (!isLoading && !email) {
		return <Navigate to="/login" state={{ path: pathname }} />;
	}

	return children;
};

export default PrivateRoute;
