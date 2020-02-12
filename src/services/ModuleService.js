export const findModulesForCourse = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/huigao1/courses/${courseId}/modules`)
        .then(response => response.json())

export const createModule = (courseId, module) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/huigao1/courses/${courseId}/modules`,{
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(module)
    })
        .then(response => response.json())
export const deleteModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/huigao1/modules/${moduleId}`, {
        method: "DELETE"
    })
        .then(response => response.json())
export const updateModule = (moduleId,module) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/huigao1/modules/${moduleId}`,{
        method: 'PUT',
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
export default {
    findModulesForCourse,
    deleteModule,
    createModule,
    updateModule
}