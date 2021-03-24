import {
    FIND_WIDGET_FOR_TOPIC,
    DELETE_WIDGET,
    UPDATE_WIDGET,
    CREATE_WIDGET,
    FIND_ALL_WIDGETS
} from "../actions/widget-actions";

const initialState = {
    widgets:[]
}

const widgetReducer = (state = initialState, action) =>{
    switch(action.type){
        case FIND_WIDGET_FOR_TOPIC:
            return{
                ...state,
                widgets: action.widgets
            }
        case FIND_ALL_WIDGETS:
            return{
                ...state,
                widgets: action.widgets
            }
        case UPDATE_WIDGET:
            return{
                widgets: state.widgets.map(w => {
                    if(w._id === action.widget._id) {
                        return action.widget
                    } else {
                        return w
                    }
                })
            }
        case DELETE_WIDGET:
            const newState1 = {
                widgets: state.widgets.filter(w => {
                    if(w._id === action.widget._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState1
        case CREATE_WIDGET:
            const newState = {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
            return newState
        default:
            return state
    }
}

export default widgetReducer