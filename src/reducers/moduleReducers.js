import {CREATE_MODULE, DELETE_MODULE, UPDATE_MODULE} from "../actions/moduleActions";


const initialState ={
    modules: [ ]
}


const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_ALL_MODULES":
            return {
                modules: action.modules
            }
        case UPDATE_MODULE:
            return {
                modules: action.modules
            }
        case CREATE_MODULE:
            return {
                modules: [
                    ...state.modules,
                    action.newModule
                ]
            }
        case DELETE_MODULE:
            return {
                modules: state.modules.filter((module => module._id !== action.moduleId))
            }
        default:
                return state

    }
}

export default moduleReducer