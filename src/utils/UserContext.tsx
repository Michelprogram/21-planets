import React, { useState, useContext } from "react";
import User from "../interfaces/IUser";

const UserContext = React.createContext<string>("");
const UpdateUserContext = React.createContext<any>({});

export const useUser = () => {
  return useContext(UserContext);
};

export const useUpdateUser = () => {
  return useContext(UpdateUserContext);
};

export const UserProvider = ({value, children}:any) => {
  const [user, setUser] = useState(value);

  return (
    <UserContext.Provider value={user}>
      <UpdateUserContext.Provider value={setUser}>
        {children}
      </UpdateUserContext.Provider>
    </UserContext.Provider>
  );
};