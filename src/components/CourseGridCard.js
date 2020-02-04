import React from "react";
import {updateCourse} from "../services/CourseService";

class CourseGridCard extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        editing: false,
        course: this.props.course
    }

    render() {
        return(
        <div className="card" style={{width: '13.8rem', float: 'left'}}>
            <div className="card-body">
                <h5 className="card-title">
                    <img className="card-img-top" src="logo192.png" alt="Card image cap" ></img>
                    <i className="fas fa-file-alt wbdv-row wbdv-icon"></i>
                    {!this.state.editing &&
                    <a href="#" onClick={this.props.showCourseEditor}>
                        {this.state.course.title}</a>}
                </h5>
                <a>Modified </a>
                <a> 1/1/2020 </a>
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

                <button onClick={() => this.props.deleteCourse(this.props.course)}>Delete</button>
                <button onClick={() => this.setState({editing: true})}>Edit</button>
                <button onClick={(e) => {
                    updateCourse(this.state.course._id, this.state.course).then(status => {})
                    this.setState({
                        editing: false
                    })
                }}>Save</button>
            </div>







        </div>
        )
    }
}


export default CourseGridCard