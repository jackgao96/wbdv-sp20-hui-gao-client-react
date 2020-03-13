import React from "react";
import {connect} from "react-redux";
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/PararagraphWidget";
import {
    findAllWidgets,
    createWidget,
    deleteWidget,
    updateWidget,
    findWidgetsForTopic
} from "../../services/WidgetService";
import Widget from "./widgets/Widget";
import {deleteLesson} from "../../services/LessonService";

class WidgetList extends React.Component {
    state = {
        widget: {
            text: " "
        }
    }
    save = (wid, widget) => {
        this.props.updateWidget(wid, widget)
        this.setState(
            {widget: {}}
        )
    }

    componentDidMount() {
        this.props.findWidgetsForTopic(this.props.topicId);
        //this.props.findAllWidgets();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topicId !== this.props.topicId) {
            this.props.findWidgetsForTopic(this.props.topicId);
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.topicId && this.props.widgets && this.props.widgets.map(widget =>

                        <div key={widget.id}>

                            <Widget
                                updateWidget={this.props.updateWidget}
                                save={this.save}
                                editing={widget === this.state.widget}
                                deleteWidget={this.props.deleteWidget}
                                widget={widget}/>
                            <span>
                                {widget !== this.state.widget &&
                                <button onClick={() => this.setState({
                                    widget: widget
                                })}>
                                    Edit
                                </button>}
                            </span>
                        </div>
                    )
                }
                <div>
                    <button
                        onClick={
                            () =>
                                this.props.createWidget(this.props.topicId)}>
                        Create Widget
                    </button>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    widgets: state.widgets.widgets
})

const dispatchToPropertyMapper = (dispatcher) => ({
    findWidgetsForTopic: async (topicId) =>
        await findWidgetsForTopic(topicId)
            .then(widgets => dispatcher({
                type: "WIDGET_FOR_TOPIC",
                widgets: widgets
            })),
    updateWidget: (widgetId, newWidget) =>
        updateWidget(widgetId, newWidget)
            .then(status => dispatcher({
                type: "UPDATE",
                widget: newWidget
            })),
    deleteWidget: (widgetId) =>
        deleteWidget(widgetId)
            .then(status => dispatcher({
                type: 'DELETE_WIDGET',
                widgetId: widgetId
            })),
    createWidget: (topicId) =>
        createWidget(topicId, {
            title: "New Widget",
            type: "HEADING",
            size: 2
        })
            .then(actualWidget => dispatcher({
                type: "ADD_WIDGET",
                widget: actualWidget
            })),
    // createWidget: (topicId) =>
    //     fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
    //         method : "POST",
    //         body: JSON.stringify({
    //             title: "New Widget"
    //         }),
    //         headers: {
    //             'content-type': "application/json"
    //         }
    //     })
    //         .then(actualWidget => dispatcher({
    //             type: "ADD_WIDGET",
    //             widget: actualWidget
    //         })),
    findAllWidgets: () =>
        findAllWidgets()
            .then(actualWidgets => dispatcher({
                type: "FIND_ALL_WIDGETS",
                widgets: actualWidgets
            }))
})

export default connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(WidgetList)