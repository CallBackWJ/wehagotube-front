import React, { createContext, useContext, useState } from "react";

const AdminContext = createContext();
export default AdminContext;

export const useAdminContext = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("");
  const [videoType, setVideoType] = useState("");
  return (
    <AdminContext.Provider
      value={{
        keyword,
        setKeyword,
        videoType,
        setVideoType
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
