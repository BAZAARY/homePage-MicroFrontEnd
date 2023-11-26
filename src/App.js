// import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ApolloProvider } from "@apollo/client";
import client from "./connections/apollo";
import HomePage from "./components/HomePage";

const App = () => {
	return (
		<BrowserRouter>
			<ApolloProvider client={client}>
				<ToastContainer
					position="bottom-right"
					autoClose={2000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="colored"
					bodyClassName={"toastBody"}
				/>

				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/home" element={<HomePage />} />
				</Routes>
			</ApolloProvider>
		</BrowserRouter>
	);
};

export default App;
