import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserProvider } from "../context/UserContext";

import Home from "./pages/home";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/login" element={<Auth />} />
            <Route path="/auth/signup" element={<Auth />} />
            <Route path="/member/:id" element={<Profile />} />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
