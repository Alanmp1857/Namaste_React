import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "This is Namaste React! 🚀");
const parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "This is Namaste React! 🚀"), React.createElement("h2", {}, "Learning from Akshay Saini!")]), React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I'm a h1 tag"), React.createElement("h2", {}, "I'm a h2 tag")])]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);