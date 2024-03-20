import "./index.css";
import React from "react";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import routes from "./routes/routes.jsx";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={routes} />
			<Toaster />
		</Provider>
	</React.StrictMode>
);
