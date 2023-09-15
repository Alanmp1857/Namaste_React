import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reaches the JS) - Parcel - Babel
// JSX => Babel transpiles it to React.createElement => React.createElement - JS Object => HTMLElement(render)

const Title = () => <h1 className="head" tabIndex="5">Namaste React using JSX🚀</h1>;

const Name = () => {
    return (
        <h1>Hello My Name is Alan Panicker</h1>
    )
}

//React Functional Component
// const HeadingComponent = () => {
//     return <h1 className="heading">Namaste React Functional Component</h1>
// }

//other way of writing functional component
//Component Composition
const HeadingComponent2 = () => (
    <div id="container">
        <Title />
        <h1 className="heading">Namaste React Functional Component 2</h1>
    </div>
)

const Learner = () => (
    <div>
        {/* <Name /> */}
        {Name()}
        <h1>I am Learing React from Akshay Saini 🚀</h1>
    </div>
)

// const heading = React.createElement("h1", { id: "heading" }, "This is Namaste React! 🚀");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Learner />);
