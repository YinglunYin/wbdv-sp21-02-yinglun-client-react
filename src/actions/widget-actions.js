import widgetService from "../services/widget-service"

export const CREATE_WIDGET = "CREATE_WIDGET"
export const FIND_WIDGET_FOR_TOPIC = "FIND_WIDGET_FOR_TOPIC"
export const FIND_ALL_WIDGETS = "FIND_ALL_WIDGETS"
export const DELETE_WIDGET = "DELETE_WIDGET"
export const UPDATE_WIDGET = "UPDATE_WIDGET"

export const createWidget = (dispatch, topicId) => {
    widgetService.createWidget(
        topicId,
        {
            topicId: topicId,
            type: "HEADING",
            size: 1,
            text: "New Widget"
        }).then(realWidget => dispatch({
                                           type: CREATE_WIDGET,
                                           widget: realWidget
                                       }))
}

export const updateWidget = (dispatch, widget) => {
    widgetService.updateWidget(widget._id, widget)
        .then(status=>dispatch({
            type: UPDATE_WIDGET,
            widget: widget
                               }))
}

export const deleteWidget = (dispatch, widget) => {
    widgetService.deleteWidget(widget._id)
        .then(status => dispatch({
            type: DELETE_WIDGET,
            widget: widget
                                 }))
}

export const findWidgetForTopic = (dispatch, topicId) => {
    widgetService.findWidgetForTopic(topicId)
        .then(widgets => dispatch({
            type: FIND_WIDGET_FOR_TOPIC,
            widgets: widgets
                                  }))
}

export const findAllWidgets = (dispatch) =>{
    widgetService.findAllWidgets(dispatch)
        .then(widgets => dispatch({
            type: FIND_ALL_WIDGETS,
            widgets: widgets
                                  }))
}

export const widgetActions = {
    createWidget, updateWidget, deleteWidget, findWidgetForTopic, findAllWidgets
}

export default widgetActions