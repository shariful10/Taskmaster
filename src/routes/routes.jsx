import App from "../App";
import Chat from "../pages/Chat";
import Login from "../pages/Login";
import Tasks from "../pages/Tasks";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import Archive from "../pages/Archive";
import Settings from "../pages/Settings";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../components/layouts/PrivateRoute";

const routes = createBrowserRouter([
	{
		path: "/",
		element: (
			<PrivateRoute>
				<App />
			</PrivateRoute>
		),
		children: [
			{
				index: true,
				element: <Tasks />,
			},
			{
				path: "/archive",
				element: <Archive />,
			},
			{
				path: "/chat",
				element: <Chat />,
			},
			{
				path: "/settings",
				element: <Settings />,
			},
			{
				path: "/profile",
				element: <Profile />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/signup",
		element: <Signup />,
	},
]);

export default routes;
