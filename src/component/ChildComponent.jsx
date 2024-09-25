import React from "react";
import GrandChildComponent from "./GrandChildComponent";
import MyContext from "../service/MyContext";

const ChildComponent = () => {
  return (
    <MyContext.Consumer>
      {(data) => <GrandChildComponent data={data} />}
    </MyContext.Consumer>
  );
};

export default ChildComponent;
