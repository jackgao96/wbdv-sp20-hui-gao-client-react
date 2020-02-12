import React from "react";
import ModuleList from "./ModuleList";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import moduleReducer from "../../reducers/moduleReducers";
import LessonTabs from "./LessonTabs";
import lessonReducer from "../../reducers/lessonReducer";
import TopicPills from "./TopicPills"
import topicReducer from "../../reducers/topicReducer";


const rootReducer = combineReducers({
    modules: moduleReducer,
    lessons: lessonReducer,
    topics: topicReducer
})
const store = createStore(rootReducer)

function findCourseTitle(courses, courseId) {
    for (var i = 0; i < courses.length; i++) {
        if (courses[i]._id === courseId)
            return courses[i].title
    }
}

const CourseEditor = ({hideCourseEditor, history, courseId, moduleId, courses, lessonId}) =>
    <Provider store={store}>
        <div className="row">

            <div id="" className="col-md-4 ">

                <button className="wbdv-course-editor wbdv-close" onClick={() => history.push("/")}>Close</button>
                <label className="wbdv-course-title" style={{color: 'black'}}>
                    <h1>{findCourseTitle(courses, courseId)} </h1></label>
                <ModuleList
                    courses={courses}
                    courseId={courseId}/>
            </div>
            <div id="lesson" className="col-md-8">
                <div id="" className="row">
                    <LessonTabs
                        moduleId={moduleId}
                        courses={courses}
                        courseId={courseId}/>

                </div>
                <div id="topic" className="row-cols-1">
                    <TopicPills
                        moduleId={moduleId}
                        courses={courses}
                        courseId={courseId}
                        lessonId={lessonId}
                    />
                </div>
                <div id="saveline" className="row-cols-1">

                    <input type="button" name="" id="save" value="Save"/>
                    <a id="preview" style={{paddingRight: '80px'}}>preview</a>


                </div>

                <div id="box">
                    <div id="headingweight" className="row" style={{height: '30px'}}>
                        <h3 className="float-left" style={{paddingLeft: '20px'}}>Heading Weight</h3>
                        <button>up</button>
                        <button> down</button>
                        <div className="col-sm-3">
                            <select className="form-control  wbdv-field wbdv-role">

                                <option value="Heading">heading</option>

                            </select>
                        </div>
                        <button>x</button>
                    </div>
                    <div className="col-sm-10" style={{paddingTop: '40px'}}>

                        <input className="form-control" id="headtext" placeholder="Heading Text"/>
                    </div>
                    <div className="col-sm-10" style={{paddingTop: '40px'}}>
                        <select className="form-control  wbdv-field wbdv-role">

                            <option value="Heading">heading 1</option>

                        </select>
                    </div>
                    <div className="col-sm-10" style={{paddingTop: '40px'}}>
                        <input className="form-control"
                               id="weightname" placeholder="Weight Name"/>
                    </div>
                    <div>
                        {/*<h4 className="float-left">preview</h4><br><br>*/}
                        {/*<h2 className="float-left">Heading Text</h2>*/}
                    </div>


                </div>

            </div>


        </div>

    </Provider>
export default CourseEditor