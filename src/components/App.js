import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";

{/* write an <About> component here */ }
function About() {
    return (
        <div id="about" >
            <h2>About</h2>
        </div>
    )
}

function App() {
    return (
        <div>
            <NavBar />
            <Home />
            <About />
        </div>
    );
}

export default App;
