import React from "react";
import { View } from "react-native";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { AuthProvider, useAuth } from "./src/context/AuthContext";

export default function App() {
	return (
		<AuthProvider>
			<MainApp />
		</AuthProvider>
	);
}

const MainApp = () => {
	const { isLogin } = useAuth();

	return <>{isLogin ? <Dashboard /> : <Login />}</>;
};
