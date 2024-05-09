import { Route, Routes } from "react-router-dom";
import SignInForm from "./_auth/SignInForm";
import AuthLayout from "./layout/AuthLayout";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";

export default function App() {
  return (
    <Routes>
      {/* Public route */}
      <Route element={<AuthLayout />}>
        <Route path="/auth" element={<SignInForm />} />
      </Route>
      {/* Private route */}
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UsersPage />} />
        <Route path="/task" element={<HomePage />} />
        <Route path="/announcement" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
