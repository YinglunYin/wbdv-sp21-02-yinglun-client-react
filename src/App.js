import CourseManager from "./components/course-manager";
import React from "react";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <BrowserRouter>
            <div>
                <CourseManager/>
            </div>
        </BrowserRouter>

    );
}

export default App;
