import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Main from "./pages/Main";
import Admin from "./pages/Admin";
import UserView from "./pages/AdminUserView";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<Main />} path="/main" />
        <Route element={<Admin />} path="/admin" />
        <Route element={<UserView />} path="/admin" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
