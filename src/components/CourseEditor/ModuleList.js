import React from "react";

import {connect} from "react-redux";
import {createModule, deleteModule, updateModule} from "../../actions/moduleActions";
import ModuleService from "../../services/ModuleService";
import {Link} from "react-router-dom";
import {updateCourse} from "../../services/CourseService";




class ModuleList extends React.Component {
    componentDidMount() {
        this.props.findModulesForCourse(this.props.courseId)
    }
    state = {
        editing: false,
        moduleId: ' '

    }
    render() {
        return (
            <ul className="list-group wbdv-module-list">
                {
                    this.props.modules && this.props.modules.map(module =>

                        <li className="list-group-item wbdv-module-item" key={module._id}>
                            {   (!this.state.editing || module._id !== this.state.moduleId) &&
                            <Link to={`/course-editor/${this.props.courseId}/module/${module._id}`}>
                                {module.title}
                            </Link>
                            }
                            {
                                this.state.editing && module._id === this.state.moduleId &&
                                <input
                                    onChange={(e) =>
                                        module.title = e.target.value}
                                    defaultValue={module.title}/>

                            }
                            {/*<a href="#" className="wbdv-module-item-title"> {module.title} </a>*/}

                            <button onClick={() => this.setState(
                                {editing: true,
                                        moduleId: module._id
                                        })}>Edit</button>
                            <button onClick={() => {
                                updateCourse(module._id, module).then(status => {})
                                this.setState({editing: false})
                            }
                                }>Save</button>
                            <button onClick={() => this.props.deleteModule(module._id)}>Delete</button>
                        </li>
                    )
                }
                <li className="nav-item">
                    <button className="nav-link topic wbdv-topic-add-btn" style={{float: 'right'}}
                            onClick={() => this.props.createModule(this.props.courseId)}>Create
                    </button>
                </li>
            </ul>
        );
    }
}

const stateToPropertyMapper = (state) => {
    return {
        modules: state.modules.modules
    }
}
const dispatchToPropertyMapper = (dispatch) => {
    return {
        findModulesForCourse: (courseId) =>
            ModuleService.findModulesForCourse(courseId)
                .then(actualModules =>
                    dispatch({
                        type: "FIND_ALL_MODULES",
                        modules: actualModules

                    })),
        deleteModule: (moduleId) =>
            ModuleService.deleteModule(moduleId)
                .then(status =>
                    dispatch(deleteModule(moduleId))),
        createModule: (courseId) => {
            ModuleService.createModule(courseId, {
                title: "New Module"
            }).then(actualModule =>
            dispatch(createModule( actualModule)))
        },
        updateModule: (moduleId, module) => {
            ModuleService.updateModule(moduleId,module)
                .then(status =>
                dispatch(updateModule( moduleId)))

        }
    }

}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(ModuleList)