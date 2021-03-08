import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {Link, useParams} from "react-router-dom";
import moduleService from "../../services/module-service"

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
                                          <Link className={`list-group-item p-3 font-weight-bold ${active}`}
                                                to={`/courses/editor/${layout}/${courseId}/${module._id}`}>
                                              <EditableItem
                                                  // to={`/courses/${flag}/editor/${courseId}/${module._id}`}
                                                  back={`/courses/editor/${layout}/${courseId}`}
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
            moduleService.createModule(courseId, {title: "New Module"})
                .then(theActualModule => dispatch({
                                                      type: "CREATE_MODULE",
                                                      module: theActualModule
                                                  }))
        },
        deleteModule: (item) =>
            moduleService.deleteModule(item._id)
                .then(status => dispatch({
                                             type: "DELETE_MODULE",
                                             moduleToDelete: item
                                         })),
        updateModule: (module) =>
            moduleService.updateModule(module._id, module)
                .then(status => dispatch({
                                             type: "UPDATE_MODULE",
                                             module
                                         })),
        findModulesForCourse: (courseId) => {

            moduleService.findModulesForCourse(courseId)
                .then((theModules) => dispatch({
                                                   type: "FIND_MODULES_FOR_COURSE",
                                                   modules: theModules
                                               }))
        }
    }
}

export default connect(stateToPropsMapper, dispatchToPropsMapper)(ModuleList)
