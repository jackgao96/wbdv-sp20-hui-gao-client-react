import React from "react";
import HeadingWidget from "./HeadingWidget";

class ListWidget extends React.Component {
    state = {
        editing: this.props.editing,
        widget: this.props.widget
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.editing !== this.props.editing) {
            this.setState({
                editing: this.props.editing
            })
        }
    }

    render() {
        return (

            <div>
                <h2>Image Widget</h2>
                {
                    !this.state.editing &&
                    <div>
                        <img border="0" alt="" src={this.state.widget.text} width="100" height="100"/>

                    </div>
                }
                { this.state.editing &&
                    <div>
                        <input  onChange={(e) => {
                            const newText = e.target.value
                            this.setState(prevState => {
                                this.state.widget.text = newText;

                                return {
                                    widget: {
                                        ...prevState.widget, text: newText
                                    }
                                }})
                            //this.props.updateWidget(this.state.widget.id, this.state.widget)
                        }}
                                value={this.state.widget.text} id="w3mission" rows="4" cols="50">
                        </input>
                    <h4>Preview</h4>
                    <img border="0" alt="" src={this.state.widget.text} width="100" height="100"/>
                    </div>}


            </div>

        )
    }
}
    export default ListWidget
