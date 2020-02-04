import React from "react";

import CourseTableRow from "../components/CourseTableRow";



const CourseTableComponent = ({courses, deleteCourse, showCourseEditor}) =>
    <div>
        <table className="table">
            <tbody className="wbdv-tbody">

                {
                    courses.map(function(course, index) {
                        return <CourseTableRow
                            showCourseEditor={showCourseEditor}
                            deleteCourse={deleteCourse}
                            key={course._id}
                            course={course}/>
                    })
                }

            </tbody>
        </table>

    </div>







export default CourseTableComponent