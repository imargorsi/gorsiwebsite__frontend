import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserProvider } from "../context/UserContext";

import Home from "./pages/home";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/login" element={<Auth />} />
            <Route path="/auth/signup" element={<Auth />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
