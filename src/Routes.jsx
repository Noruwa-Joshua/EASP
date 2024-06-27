import { Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Main from "./pages/Main";
import Admin from "./pages/Admin";
import UserView from "./pages/AdminUserView";
import { useEffect } from "react";

const Links = () => {
  const navigate = useNavigate();
  const path = window.location.pathname;

  useEffect(() => {
    const token = sessionStorage.getItem("userToken");

    if (!token) navigate("/");
  }, [navigate, path]);

  return (
    <>
      <Route element={<Login />} path="/" />
      <Route element={<Profile />} path="/profile" />
      <Route element={<Main />} path="/main" />
      <Route element={<Admin />} path="/admin" />
      <Route element={<UserView />} path="/admin" />
    </>
  );
};

export default Links;
