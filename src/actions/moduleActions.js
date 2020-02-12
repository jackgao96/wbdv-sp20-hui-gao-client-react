
export const DELETE_MODULE = "DELETE_MODULE"
export const deleteModule = (moduleId) => ({
    type: DELETE_MODULE,
    moduleId: moduleId
})

export const UPDATE_MODULE = "UPDATE_MODULE"
export const updateModule = (moduleId) => ({
    type: UPDATE_MODULE,
    moduleId: moduleId
})

export const CREATE_MODULE = "CREATE_MODULE"
export const createModule = (newModule) => ({
    type: CREATE_MODULE,
    newModule: newModule
})