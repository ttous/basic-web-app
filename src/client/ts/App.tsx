import * as React from "react";
import {
    NavLink,
    Redirect,
    Route,
    Switch
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>

            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}
