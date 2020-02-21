import React from "react";
import ModuleList from "./ModuleList";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import moduleReducer from "../../reducers/moduleReducers";
import LessonTabs from "./LessonTabs";
import lessonReducer from "../../reducers/lessonReducer";
import TopicPills from "./TopicPills"
import topicReducer from "../../reducers/topicReducer";
import WidgetList from "./WidgetList";
import widgetReducer from "../../reducers/widgetReducer";

const rootReducer = combineReducers({
    modules: moduleReducer,
    lessons: lessonReducer,
    topics: topicReducer,
    widgets: widgetReducer
})
const store = createStore(rootReducer)

function findCourseTitle(courses, courseId) {
    for (var i = 0; i < courses.length; i++) {
        if (courses[i]._id === courseId)
            return courses[i].title
    }
}

const CourseEditor = ({hideCourseEditor, history, courseId, moduleId, courses, lessonId, topicId}) =>
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




                </div>

                <div id="box">
                    <WidgetList
                        moduleId={moduleId}
                        courses={courses}
                        courseId={courseId}
                        lessonId={lessonId}
                        topicId={topicId}/>

                </div>

            </div>


        </div>

    </Provider>
export default CourseEditor