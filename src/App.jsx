import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserProvider } from "../context/UserContext";

import Home from "./pages/home";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog/Blog";
import SingleBlog from "./pages/SingleBlog/SingleBlog";
import Members from "./pages/Members/Members";
import People from "./pages/People/People";

import Breadcrumb from "./components/Breadcrumb/Breadcrumb";

import History from "./pages/History/History";

import Library from "./pages/Library/Library";

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
            <Route path="/blog" element={<Blog />} />
            <Route path="/member" element={<Members />} />
            <Route path="/blog/:title" element={<SingleBlog />} />
            <Route
              path="/test"
              element={<Breadcrumb title={"Our Members"} />}
            />
            <Route path="/people" element={<People />} />
            <Route path="/history" element={<History />} />
            <Route path="/library" element={<Library />} />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="*"
              element={
                <NotFound
                  heading={"404 - Page Not Found"}
                  text={"The page you are looking for does not exist."}
                />
              }
            />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
