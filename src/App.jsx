import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Auth />} />
          <Route path="/auth/signup" element={<Auth />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
