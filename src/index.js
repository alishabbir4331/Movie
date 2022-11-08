import React from "react";
import {createRoot} from "react-dom/client"
import {BrowserRouter as Router} from "react-router-dom"
import App from "./Component/App";
import Navbar from "./Component/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./Component/Style.css"


const root = createRoot(document.getElementById("root"));

root.render(
<>
<Router>
<Navbar/>

    <App/>
</Router>
</>
)