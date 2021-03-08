import React from 'react'
import './editor.style.client.css'
import {Link, useParams} from "react-router-dom";
import moduleReducer from '../../reducers/modules-reducers'
import lessonReducer from '../../reducers/lessons-reducers'
import topicReducer from "../../reducers/topic-reducer";
import courseReducer from "../../reducers/course-reducers";
import ModuleList from "./module-list";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import NarBar from "./nav-bar";

// const store = createStore(moduleReducer)
// const store = createStore(lessonReducer)
const reducer = combineReducers({
                                    moduleReducer: moduleReducer,
                                    lessonReducer: lessonReducer,
                                    topicReducer: topicReducer,
                                    courseReducer: courseReducer
                                })

const store = createStore(reducer)

const CourseEditor = ({history}) => {

    const {courseId} = useParams();

    return (
        <Provider store={store}>
            <div>
                <NarBar/>

                <div className="container-fluid">
                    <div className="row">

                        <div className="col-3 bg-primary wbdv-editor-module-list">
                            <ModuleList/>
                        </div>

                        <div className="col-9 px-5 py-3">
                            <LessonTabs/>
                            <TopicPills/>
                        </div>
                    </div>
                </div>
            </div>
        </Provider>
    )
}

export default CourseEditor
