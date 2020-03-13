import React from "react";


class ParagraphWidget extends React.Component {
    state = {
        editing: this.props.editing,
        widget: this.props.widget,

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
                <h1>Paragraph Widget</h1>
                {
                    !this.state.editing &&
                        <div className="row">
                        <p>{this.state.widget.text}</p>
                        </div>
                }
                {
                    this.state.editing &&
                    <div>
                        <select onChange={(e) => {
                            const newType = e.target.value
                            this.setState(prevState => {
                                this.state.widget.type = newType;
                                return {
                                    widget: {
                                        ...prevState.widget, type: newType
                                    }
                                }})
                                //this.props.updateWidget(this.state.widget.id, this.state.widget)
                        }}
                                value={this.state.widget.type}>
                            <option value="HEADING">Heading</option>
                            <option value="PARAGRAPH">Paragraph</option>
                            <option value="LIST">List</option>
                            <option value="IMAGE">Image</option>
                        </select>
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
                    </div>
                }
            </div>
        );
    }
}
export default ParagraphWidget