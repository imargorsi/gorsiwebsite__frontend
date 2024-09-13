import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");

    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, [userInfo]);

  useEffect(() => {
    if (userInfo) {
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    } else {
      localStorage.removeItem("userInfo");
    }
  }, [userInfo]);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserInfo = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("User Context must be used within a PostProvider");
  }
  return context;
};
