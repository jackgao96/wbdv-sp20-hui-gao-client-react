import React from "react";


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
                <h1>List Widget</h1>
                {
                    !this.state.editing &&
                    <div>


                        {this.props.widget.size === 2 &&
                        <ul><li>{this.state.widget.text}</li></ul>}
                        {this.props.widget.size === 1 &&
                        <ol>
                            <li> {this.state.widget.text} </li>
                        </ol>}


                    </div>
                }
                {
                    this.state.editing &&
                    <div>
                        <textarea id="w3mission" rows="4" cols="50" placeholder="Enter one list item per line"
                                  onChange={(e) => {
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
                                  value={this.state.widget.text} id="w3mission" rows="4" cols="50"> </textarea>
                        <h4>Preview</h4>
                        {this.state.widget.size === 1 && <ol><li>{this.state.widget.text}</li></ol>}
                        {this.state.widget.size === 2 && <ul><li>{this.state.widget.text}</li></ul>}
                        <select onChange={(e) => {
                            const newType = e.target.value
                            this.setState(prevState => {
                                this.state.widget.type = newType;
                                return {
                                    widget: {
                                        ...prevState.widget, type: newType
                                    }
                                }
                            })

                        }}
                                value={this.state.widget.type}>
                            <option value="HEADING">Heading</option>
                            <option value="PARAGRAPH">Paragraph</option>
                            <option value="LIST">List</option>
                            <option value="IMAGE">Image</option>
                        </select>
                    </div>
                }
                <span>
                                <select
                                    onChange={(e) => {
                                        const newSize = parseInt(e.target.value);
                                        this.setState(prevState => {
                                            prevState.widget.size = newSize;
                                            return prevState
                                        })
                                    }}
                                    value={this.state.widget.size}>
                                    <option value={2}>Unordered List</option>
                                    <option value={1}>Ordered List</option>
                                </select>


                                </span>
            </div>
        )
    }
}

export default ListWidget
