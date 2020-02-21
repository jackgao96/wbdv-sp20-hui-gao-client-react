import React from "react";

class HeadingWidget extends React.Component {
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
                {
                    !this.state.editing &&
                    <div>
                        {this.props.widget.size === 1 && <h1>{this.props.widget.title}</h1>}
                        {this.props.widget.size === 2 && <h2>{this.props.widget.title}</h2>}
                        {this.props.widget.size === 3 && <h3>{this.state.widget.title}</h3>}
                        {this.props.widget.size === 4 && <h4>{this.props.widget.title}</h4>}
                        {this.props.widget.size === 5 && <h5>{this.props.widget.title}</h5>}
                        {this.props.widget.size === 6 && <h6>{this.props.widget.title}</h6>}
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
                        </select>
                        <input
                            onChange={(e) => {
                                const newTitle = e.target.value;
                                this.setState(prevState => {

                                    prevState.widget.title = newTitle;
                                    return prevState
                                })
                            }}
                            value={this.state.widget.title}/>
                        <span className="float-right">
                                <select
                                    onChange={(e) => {
                                        const newSize = parseInt(e.target.value);
                                        this.setState(prevState => {
                                            prevState.widget.size = newSize;
                                            return prevState
                                        })
                                    }}
                                    value={this.state.widget.size}>
                                    <option value={1}>Heading 1</option>
                                    <option value={2}>Heading 2</option>
                                    <option value={3}>Heading 3</option>
                                    <option value={4}>Heading 4</option>
                                    <option value={5}>Heading 5</option>
                                    <option value={6}>Heading 6</option>
                                </select>


                                </span>
                    </div>
                }
            </div>
        )
    }
}

export default HeadingWidget