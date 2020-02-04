import React from "react";
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
import CourseEditor from "../components/CourseEditor/CourseEditor";
import {deleteCourse, createCourse, findAllCourses, findCourseById} from "../services/CourseService"


class CourseManagerComponent extends React.Component{

    state = {
        layout: 'table',
        courses: [

        ]
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
    toggle = () =>{
        this.setState(prevState => {
            if(prevState.layout === 'table') {
                return ({layout: 'grid'})
            }
            else{
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
    addCourse = async () =>
    {
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


    render(){
        return (

            <div>
                {
                    <div style={{marginTop: '60px'}} id="box">
                        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                            <button className="navbar-toggler-icon wbdv-field wbdv-hamburger"
                                    id="hamburger"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarNavDropdown">
                            </button>
                            <a className="navbar-brand wbdv-label wbdv-course-manager" >Course Manager</a>
                            <input
                                onChange={this.updateForm}
                                value={this.state.newCourseTitle}/>
                            <span className="fa-stack wbdv-button-right wbdv-button wbdv-add-course" type="button"
                                  onClick={this.addCourse}
                                  style={{color: 'red', left: '50px'}}>
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
				    </span>
                        </nav>
                    this.state.editingCourse
                    && <CourseEditor hideCourseEditor={this.hideCourseEditor}/>
                    </div>
                }
                {
                    !this.state.editingCourse &&
                    <div style={{marginTop: '60px'}} id="box">
                    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                        <button className="navbar-toggler-icon wbdv-field wbdv-hamburger"
                                id="hamburger"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarNavDropdown">
                        </button>
                        <a className="navbar-brand wbdv-label wbdv-course-manager" >Course Manager</a>
                        <input
                            onChange={this.updateForm}
                            value={this.state.newCourseTitle}/>
                        <span className="fa-stack wbdv-button-right wbdv-button wbdv-add-course" type="button"
                              onClick={this.addCourse}
                              style={{color: 'red', left: '50px'}}>
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
				    </span>
                    </nav>

                    <table className="table">

                    <thead>

                    <tr className="wbdv-form">
                    <th className="wbdv-header wbdv-title">Title</th>
                    <th>

                    <div className="dropdown">
                    <a className="wbdv-header wbdv-owner">Owned by</a>
                    <button className="btn btn-secondary dropdown-toggle" type="button"
                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false" ></button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">me</a>
                    </div>
                    </div>
                    </th >
                    <th className="wbdv-header wbdv-last-modified">Last Modified</th>

                    <th>
                    <button type="button"
                    className="fas fa-th-large wbdv-button wbdv-grid-layout wbdv-button wbdv-list-layout"
                    onClick={this.toggle}></button>
                    <button type="button" className="fas fa-sort-alpha-down wbdv-header wbdv-sort"></button>

                    </th>
                    </tr>
                    </thead>
                    </table>
                    {this.state.layout === 'table' &&
                    <CourseTableComponent
                    showCourseEditor={this.showCourseEditor}
                    deleteCourse={this.deleteCourse}
                    courses={this.state.courses}/>}
                    {this.state.layout === 'grid' &&
                    <CourseGridComponent
                    showCourseEditor={this.showCourseEditor}
                    deleteCourse={this.deleteCourse}
                    courses={this.state.courses}/>}


                    <span className="fa-stack fa-2x wbdv-btbottom-right"
                    style={{color: 'red', position: 'fixed', bottom: '20px', right: '20px'}}>
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                    </span>
                    </div>
                }

            </div>
        )
    }
}

export default CourseManagerComponent