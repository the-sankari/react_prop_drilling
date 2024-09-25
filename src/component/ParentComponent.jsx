import React from "react";
import ChildComponent from "./ChildComponent";
import MyContext from "../service/MyContext";

const ParentComponent = () => {
  const data = "Hello from Parent";
  return (
    <MyContext.Provider value={data}>
      <ChildComponent />
    </MyContext.Provider>
  );
};

export default ParentComponent;
