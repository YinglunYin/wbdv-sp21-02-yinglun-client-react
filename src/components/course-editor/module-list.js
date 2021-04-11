import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {Link, useParams} from "react-router-dom";
import moduleService from "../../services/module-service"
import moduleActions from "../../actions/module-actions";

const ModuleList = (
    {
        myModules = [],
        createModule,
        deleteModule,
        updateModule,
        findModulesForCourse = (courseId) => console.log(courseId)
    }) => {

    const {layout, courseId, moduleId} = useParams();

    useEffect(() => {
        findModulesForCourse(courseId)
    }, [])



    return (
        <>
            <div className="container-fluid p-0">
                {
                    myModules.map(module => {

                                      let active = ""

                                      if (module._id === moduleId) {
                                          active = "active"
                                      }
                                      return (
                                          <Link key = {module._id} className={`list-group-item p-3 font-weight-bold ${active}`}
                                                to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}>
                                              <EditableItem
                                                  // to={`/courses/${flag}/editor/${courseId}/${module._id}`}
                                                  back={`/courses/${layout}/edit/${courseId}`}
                                                  deleteItem={deleteModule}
                                                  updateItem={updateModule}
                                                  item={module}/>
                                          </Link>
                                      )
                                  }
                    )
                }
                <div className="list-group-item text-center">
                    <i onClick={() => createModule(courseId)}
                       className="fas fa-plus fa-1x text-primary"/>
                </div>
            </div>
        </>)
}

const stateToPropsMapper = (state) => {
    return {
        myModules: state.moduleReducer.modules
    }
}

const dispatchToPropsMapper = (dispatch) => {
    return {
        createModule: (courseId) => {
            moduleActions.createModule(dispatch, courseId)
        },
        deleteModule: (item) =>
            moduleActions.deleteModule(dispatch, item),
        updateModule: (module) =>
            moduleActions.updateModule(dispatch, module),
        findModulesForCourse: (courseId) => {
            moduleActions.findModulesForCourse(dispatch, courseId)
        }
    }
}

export default connect(stateToPropsMapper, dispatchToPropsMapper)(ModuleList)
