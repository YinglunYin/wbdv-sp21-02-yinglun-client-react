import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import ParagraphWidget from "./paragraph-widget";
import {connect} from 'react-redux'
import HeadingWidget from "./heading-widget";
import widgetActions from "../../actions/widget-actions";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

const WidgetList = (
    {
        widgets = [],
        createWidget,
        deleteWidget,
        updateWidget,
        findWidgetForTopic,
        findAllWidgets
    }) => {

    const {layout, courseId, moduleId, lessonId, topicId} = useParams()

    const [topicFlag, setTopicFlag] = useState(false)

    // useEffect(() => {
    //     if(topicId !== "undefined" && typeof topicId !== "undefined" ){
    //         findWidgetForTopic(topicId)
    //         setTopicFlag(true)
    //     }else{
    //         setTopicFlag(false)
    //     }
    // }, [topicId])

    useEffect(() => {
        findAllWidgets()
        setTopicFlag(true)
    }, [])

    return (
        topicFlag &&
        <div>
            <i onClick={() => createWidget(topicId)} className="fas fa-plus float-right fa-2x"/>
            <br/>
            <ul className="list-group">
                {
                    widgets.map(widget => {
                        return (
                            <li key={widget._id} className={"list-group-item"}>
                                {
                                    widget.type === "HEADING" &&
                                    <HeadingWidget
                                        widget={widget}
                                        to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${widget._id}`}
                                        back={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}`}
                                        updateWidget={updateWidget}
                                        deleteWidget={deleteWidget}/>
                                }
                                {
                                    widget.type === "PARAGRAPH" &&
                                    <ParagraphWidget
                                        widget={widget}
                                        to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${widget._id}`}
                                        back={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}`}
                                        updateWidget={updateWidget}
                                        deleteWidget={deleteWidget}/>
                                }
                                {
                                    widget.type === "LIST" &&
                                    <ListWidget
                                        widget={widget}
                                        to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${widget._id}`}
                                        back={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}`}
                                        updateWidget={updateWidget}
                                        deleteWidget={deleteWidget}/>
                                }
                                {
                                    widget.type === "IMAGE" &&
                                    <ImageWidget
                                        widget={widget}
                                        to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${widget._id}`}
                                        back={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}`}
                                        updateWidget={updateWidget}
                                        deleteWidget={deleteWidget}/>
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const stateToPropsMapper = (state) => {
    return {
        widgets: state.widgetReducer.widgets
    }
}

const dispatchToPropsMapper = (dispatch) => {
    return {
        createWidget: (topicId) => {
            widgetActions.createWidget(dispatch, topicId)
        },
        updateWidget: (widget) => {
            widgetActions.updateWidget(dispatch, widget)
        },
        deleteWidget: (widget) => {
            widgetActions.deleteWidget(dispatch, widget)
        },
        findWidgetForTopic: (topicId) => {
            widgetActions.findWidgetForTopic(dispatch, topicId)
        },
        findAllWidgets: () => {
            widgetActions.findAllWidgets(dispatch)
        }
    }
}

export default connect(stateToPropsMapper, dispatchToPropsMapper)(WidgetList)