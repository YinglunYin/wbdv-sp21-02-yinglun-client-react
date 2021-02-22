import CourseManager from "./components/course-manager";
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Home from './components/home'

function App() {
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <BrowserRouter>
            <div>
                <Route path='/courses'>
                <CourseManager/>
                </Route>
                <Route path="/" exact={true}>
                    <Home/>
                </Route>
            </div>
        </BrowserRouter>

    );
}

export default App;
