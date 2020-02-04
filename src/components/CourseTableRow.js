import React from "react";
import {updateCourse} from "../services/CourseService";

class CourseTableRow extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        editing: false,
        course: this.props.course
    }

    render() {
        return(

            <tr className="wbdv-row wbdv-course wbdv-form">

                <td>
                    <i className="fas fa-file-alt wbdv-row wbdv-icon"></i>

                    {   !this.state.editing &&
                        <a href="#" onClick={this.props.showCourseEditor}   >
                            {this.state.course.title}
                        </a>
                    }
                    {
                        this.state.editing &&
                        <input
                            onChange={(e) => this.setState({
                                course: {
                                    ...this.state.course,
                                    title: e.target.value
                                }
                            })}
                            value={this.state.course.title}/>

                    }
                </td>
                <td className="wbdv-row wbdv-owner ">me</td>
                <th className="wbdv-row wbdv-modified-date">1/1/2020</th>
                <th >
                    <button onClick={() => this.props.deleteCourse(this.props.course)}>Delete</button>

                    <button onClick={() => this.setState({editing: true})}>Edit</button>
                    <button onClick={(e) => {
                        updateCourse(this.state.course._id, this.state.course).then(status => {})
                        this.setState({
                            editing: false
                        })
                    }}>Save</button>
                </th>
            </tr>

        )
    }
}


export default CourseTableRow