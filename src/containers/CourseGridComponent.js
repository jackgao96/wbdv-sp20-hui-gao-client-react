import React from "react";

import CourseGridCard from "../components/CourseGridCard";



const CourseGridComponent = ({courses, deleteCourse, showCourseEditor}) =>
    <div>
        <h2>Course Grid Component</h2>
        <div >
            {
                courses.map(function(course, index) {
                    return <CourseGridCard
                        showCourseEditor={showCourseEditor}
                        deleteCourse={deleteCourse}
                        key={course._id}
                        course={course}/>
                })
            }
        </div>
    </div>



export default CourseGridComponent