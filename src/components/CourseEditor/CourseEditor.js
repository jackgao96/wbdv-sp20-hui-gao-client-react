import React from "react";
import ModuleList from "./ModuleList";
import LessonList from "./LessonList"
import TopicList from "./TopicList";


//import './CourseEditor.css'

const CourseEditor = ({hideCourseEditor} ) =>


    <div className="row">

        <div id="" className="col-md-4 ">
            <input type="button" className="wbdv-course-editor wbdv-close" onClick={hideCourseEditor} value="close"/>
            <label className="wbdv-course-title" style={{color: 'black'}}><h1>CS5610-WebDev </h1></label>
                    <ModuleList modules={[
                        {_id: "123", title: "CSS"},
                        {_id: "234", title: "HTML"},
                        {_id: "345", title: "React JS"},
                    ]}/>

        </div>
        <div id="lesson" className="col-md-8">
            <div id="" className="row">
                <LessonList lessons={[
                    {_id: "123", title: "Build"},
                    {_id: "234", title: "Pages"},
                    {_id: "345", title: "Theme"},
                    {_id: "456", title: "Store"},
                    {_id: "567", title: "Apps"},
                    {_id: "678", title: "Setting"},
                ]}/>
            </div>
            <div id="topic" className="row-cols-1">
                <TopicList topics={[
                    {_id: "123", title: "topic 1"},
                    {_id: "234", title: "topic 2"},
                    {_id: "345", title: "topic 3"},
                    {_id: "456", title: "topic 4"},
                ]}/>


            </div>
            <div id="saveline" className="row-cols-1">

                <input type="button" name="" id="save" value="Save"/>
                <a id="preview" style={{paddingRight: '80px'}}>preview</a>


            </div>

            <div id="box">
                <div id="headingweight" className="row" style={{height: '30px'}}>
                    <h3 className="float-left" style={{paddingLeft: '20px'}}>Heading Weight</h3>
                    <button >up</button>
                    <button> down</button>
                    <div className="col-sm-3">
                        <select className="form-control  wbdv-field wbdv-role">

                            <option value="Heading" >heading</option>

                        </select>
                    </div>
                    <button>x</button>
                </div>
                <div className="col-sm-10" style={{paddingTop: '40px'}}>

                    <input className="form-control" id="headtext" placeholder="Heading Text"/>
                </div>
                <div className="col-sm-10" style={{paddingTop: '40px'}}>
                    <select className="form-control  wbdv-field wbdv-role">

                        <option value="Heading" >heading 1</option>

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

        {/*<div className="row">*/}
        {/*    <div className="col-4">*/}
        {/*        <h4>Module List</h4>*/}
        {/*        <ModuleList modules={[*/}
        {/*            {_id: "123", title: "CSS"},*/}
        {/*            {_id: "234", title: "HTML"},*/}
        {/*            {_id: "345", title: "React JS"},*/}
        {/*        ]}/>*/}
        {/*    </div>*/}
        {/*    <div className="col-4">*/}
        {/*        <h4>Lesson Tabs</h4>*/}
        {/*        <ul>*/}
        {/*            <li>Lesson 1</li>*/}
        {/*            <li>Lesson 2</li>*/}
        {/*            <li>Lesson 3</li>*/}
        {/*        </ul>*/}
        {/*    </div>*/}
        {/*    <div className="col-4">*/}
        {/*        <h4>Task Tabs</h4>*/}
        {/*        <ul>*/}
        {/*            <li>Task 1</li>*/}
        {/*            <li>Task 2</li>*/}
        {/*            <li>Task 3</li>*/}
        {/*        </ul>*/}
        {/*    </div>*/}
        {/*</div>*/}
    </div>


export default CourseEditor