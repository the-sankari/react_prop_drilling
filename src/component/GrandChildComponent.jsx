import React from "react";
import MyContext from "../service/MyContext";

const GrandChildComponent = () => {
  return <MyContext.Consumer>{(data) => <div>{data}</div>}</MyContext.Consumer>;
};

export default GrandChildComponent;
