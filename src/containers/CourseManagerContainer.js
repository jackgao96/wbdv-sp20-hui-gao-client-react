import React from "react";

import CourseEditor from "../components/CourseEditor/CourseEditor";
import {deleteCourse, createCourse, findAllCourses, findCourseById} from "../services/CourseService"
import {BrowserRouter as Router, Route} from "react-router-dom"
import CourseListComponent from "../components/CourseListComponent";

class CourseManagerContainer extends React.Component {

    state = {
        layout: 'table',
        showEditor: false,
        courses: []
    }
    componentDidMount = async () => {

        const allCourses = await findAllCourses()
        this.setState({
            courses: allCourses
        })

        // findAllCourses()
        //     .then(courses => this.setState({
        //         courses: courses
        //     }))
    }
    toggle = () => {
        this.setState(prevState => {
            if (prevState.layout === 'table') {
                return ({layout: 'grid'})
            } else {
                return ({
                    layout: 'table',

                })
            }
        })

    }
    // showCourseEditor = () =>
    //     this.setState({
    //         editingCourse: true
    //     })

    hideCourseEditor = () =>
        this.setState({
            editingCourse: false
        })
    addCourse = async () => {
        const newCourse = {
            title: this.state.newCourseTitle
        }
        const actualCourse = await createCourse(newCourse)
        console.log(actualCourse)
        const allCourses = await findAllCourses()
        this.setState({
            courses: allCourses
        })
        // this.setState(prevState => ({
        //     courses: [
        //         ...prevState.courses,
        //         {
        //             _id: (new Date()).getTime() + "",
        //             title: prevState.newCourseTitle
        //         }
        //     ]
        // }))


    }
    updateForm = (e) =>
        this.setState({
            newCourseTitle: e.target.value
        })
    deleteCourse = async (deletedCourse) => {
        const status = await deleteCourse(deletedCourse._id)
        const courses = await findAllCourses()
        this.setState({
            courses: courses
        })
        // this.setState(prevState => ({
        //     courses: prevState.courses.filter(course => course._id !== deletedCourse._id)
        // }))
    }

    showCourseEditor = async (courseFound) => {
        //const courses = await findCourseById(courseFound._id)
        this.setState({
            editingCourse: true,
            //courses: courses
        })
    }
    // makeactive = async () =>{
    //     this.className.replace("active", "");
    //     this.className += "active";
    // }


    render() {
        return (

            <div>
                <Router>
                    <Route path="/course-editor/:courseId"
                           exact={true}
                           render={(props) =>
                               <CourseEditor
                                   {...props}
                                   courseId={props.match.params.courseId}
                                   courses={this.state.courses}
                                   hideCourseEditor={this.hideCourseEditor}/>}/>
                    <Route path="/"
                           exact={true}
                           render={() =>
                               <CourseListComponent
                                   showCourseEdito={this.showCourseEditor}
                                   updateForm={this.updateForm}
                                   newCourseTitle={this.state.newCourseTitle}
                                   addCourse={this.addCourse}
                                   toggle={this.toggle}
                                   deleteCourse={this.deleteCourse}
                                   courses={this.state.courses}
                                   layout={this.state.layout}
                               />
                           }/>
                    <Route
                        path="/course-editor/:courseId/module/:moduleId"
                        exact={true}
                        render={(props) =>
                            <CourseEditor
                                {...props}
                                courses={this.state.courses}
                                moduleId={props.match.params.moduleId}
                                courseId={props.match.params.courseId}
                                hideEditor={this.hideEditor}/>
                        }/>
                    <Route
                        path="/course-editor/:courseId/module/:moduleId/lesson/:lessonId"
                        exact={true}
                        render={(props) =>
                            <CourseEditor
                                {...props}
                                courses={this.state.courses}
                                lessonId={props.match.params.lessonId}
                                moduleId={props.match.params.moduleId}
                                courseId={props.match.params.courseId}
                                hideEditor={this.hideEditor}/>
                        }/>



                </Router>
            </div>
        )
    }
}

export default CourseManagerContainer