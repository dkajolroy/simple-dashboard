import { Route, Routes } from "react-router-dom";
import SignInForm from "./_auth/SignInForm";
import AuthLayout from "./layout/AuthLayout";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Routes>
      {/* Private route */}
      <Route element={<AuthLayout />}>
        <Route path="/auth" element={<SignInForm />} />
      </Route>
      {/* Public route */}
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
