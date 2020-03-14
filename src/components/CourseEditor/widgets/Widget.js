import React from "react";
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./PararagraphWidget";
import ListWidget from "./ListWidget"
import ImageWidget from "./ImageWidget"
export default class Widget extends React.Component {
    render() {
        return (
            <div>
                {this.props.widget.type === "HEADING" &&
                <HeadingWidget
                    updateWidget={this.props.updateWidget}
                    saveWidget={this.saveWidget}
                    editing={this.props.editing}
                    widget={this.props.widget}/>}
                {this.props.widget.type === "PARAGRAPH" &&
                <ParagraphWidget
                    saveWidget={this.saveWidget}
                    editing={this.props.editing}
                    widget={this.props.widget}/>}
                {this.props.widget.type === "LIST" &&
                <ListWidget
                    updateWidget={this.props.updateWidget}
                    saveWidget={this.saveWidget}
                    editing={this.props.editing}
                    widget={this.props.widget}/>}
                {this.props.widget.type === "IMAGE" &&
                <ImageWidget
                    updateWidget={this.props.updateWidget}
                    saveWidget={this.saveWidget}
                    editing={this.props.editing}
                    widget={this.props.widget}/>}

                {
                    this.props.editing &&
                    <span>
                    <button onClick={() => {
                        this.props.deleteWidget(this.props.widget.id)
                    }}>
                        Delete
                    </button>
                    <button onClick={() =>
                        this.props.save(this.props.widget.id, this.props.widget)
                    }>
                    Save
                    </button>
                            </span>
                }
            </div>
        );
    }

}