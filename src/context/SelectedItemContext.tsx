import React, { useState, useContext } from "react";

const SelectedItemContext = React.createContext<string>("");
const UpdateSelectedItemContext = React.createContext<any>({});

export const useSelectedItem = () => {
  return useContext(SelectedItemContext);
};

export const useUpdateSelectedItem = () => {
  return useContext(UpdateSelectedItemContext);
};

export const SelectedItemProvider = ({value, children}:any) => {
  const [selectedItem, setSelectedItem] = useState(value);

  return (
    <SelectedItemContext.Provider value={selectedItem}>
      <UpdateSelectedItemContext.Provider value={setSelectedItem}>
        {children}
      </UpdateSelectedItemContext.Provider>
    </SelectedItemContext.Provider>
  );
};