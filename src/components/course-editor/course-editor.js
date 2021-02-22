import React from 'react'
import './editor.style.client.css'
import {Link} from "react-router-dom";

const CourseEditor = ({history}) => {
    console.log(history);

    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
             <span className="navbar-brand">
                <Link onClick={() => history.goBack()} className="btn btn-dark">
                    <i className="fas fa-angle-left"/></Link>
                <span className="font-weight-bold">CS5610-WebDev</span>
            </span>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link font-weight-bold" href="#">Build</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link font-weight-bold" href="#">Pages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link font-weight-bold" href="#">Theme</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link font-weight-bold" href="#">Store</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link font-weight-bold" href="#">Apps</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link font-weight-bold" href="#">Settings</a>
                        </li>
                    </ul>
                </div>

                <a href="#" className="btn btn-dark"><i className="fas fa-plus"></i></a>
            </nav>


            <div className="container-fluid">
                <div className="row">

                    <div className="col-4 bg-dark wbdv-editor-module-list">
                        <ul className="list-group">
                            <li className="list-group-item wbdv-editor-list-item">Module 1 - JQuery
                                <i className="float-right fas fa-times "/>
                            </li>
                            <li className="list-group-item wbdv-editor-list-item">Module 2 - React
                                <i className="float-right fas fa-times"/>
                            </li>
                            <li className="list-group-item wbdv-editor-list-item">Module 3 - Redux
                                <i className="float-right fas fa-times"/>
                            </li>
                            <li className="list-group-item wbdv-editor-list-item">Module 4 - Native
                                <i className="float-right fas fa-times"/>
                            </li>
                            <li className="list-group-item wbdv-editor-list-item">Module 5 - Angular
                                <i className="float-right fas fa-times"/>
                            </li>
                        </ul>
                        <a href="#" className="btn btn-dark float-right">
                            <i className="fas fa-plus"/>
                        </a>
                    </div>

                    <div className="col-8 px-4 py-4">
                        <ul className="nav nav-pills nav-fill">
                            <li className="nav-item wbdv-editor-topic">
                                <a className="nav-link active bg-dark" href="#">Topic 1</a>
                            </li>
                            <li className="nav-item wbdv-editor-topic">
                                <a className="nav-link" href="#">Topic 2</a>
                            </li>
                            <li className="nav-item wbdv-editor-topic">
                                <a className="nav-link" href="#">Topic 3</a>
                            </li>

                            <a href="#" className="btn btn-dark wbdv-editor-topic">
                                <i className="fas fa-plus"/>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseEditor
