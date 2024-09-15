const parent = React.createElement("div", {id:"parent"},[
    React.createElement("div", {id:"child1"}, [
        React.createElement("h1", {}, "Inner Header 1"),
        React.createElement("h2", {}, "Inner Header 2"),
    ]),
    React.createElement("div", {id:"child2"}, [
        React.createElement("h1", {}, "Inner Header 1"),
        React.createElement("h2", {}, "Inner Header 2"),
    ]),
    React.createElement("div", {id:"child3"}, [
        React.createElement("h1", {}, "Inner Header 1"),
        React.createElement("h2", {}, "Inner Header 2"),
    ]),
]);




// const heading = React.createElement("h1", {id:"heading"}, "Hello World From React From File!");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);