
import CourseGridComponent from "./CourseGridComponent";
import CourseTableComponent from "./CourseTableComponent";
import React from "react";

const CourseListComponent =
    ({
         showCourseEditor,
         updateForm,
         newCourseTitle,
         addCourse,
         toggle,
         deleteCourse,
         courses,
         layout,

     }) =>
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
                    onChange={updateForm}
                    value={newCourseTitle}/>
                <span className="fa-stack wbdv-button-right wbdv-button wbdv-add-course" type="button"
                      onClick={addCourse}
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
                                onClick={toggle}></button>
                        <button type="button" className="fas fa-sort-alpha-down wbdv-header wbdv-sort"></button>

                    </th>
                </tr>
                </thead>
            </table>
            {layout === 'table' &&
            <CourseTableComponent
                showCourseEditor={showCourseEditor}
                deleteCourse={deleteCourse}
                courses={courses}/>}
            {layout === 'grid' &&
            <CourseGridComponent
                showCourseEditor={showCourseEditor}
                deleteCourse={deleteCourse}
                courses={courses}/>}


            <span className="fa-stack fa-2x wbdv-btbottom-right"
                  style={{color: 'red', position: 'fixed', bottom: '20px', right: '20px'}}>
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                    </span>
        </div>

export default CourseListComponent