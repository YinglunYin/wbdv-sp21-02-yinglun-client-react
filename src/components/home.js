import React from 'react'
import {Link} from "react-router-dom";

const Home = () =>
    <div>
        <h1>Course Manager</h1>
        <Link to={"/courses/table"}><h2>Course Table</h2></Link>
        <Link to={"/courses/grid"}><h2>Course Grid</h2></Link>
    </div>

export default Home