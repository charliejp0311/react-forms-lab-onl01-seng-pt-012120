import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars,
      remChars: this.props.maxChars,
      text: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      text: e.target.value,
      remCnt: this.state.maxChars - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange}/>
        <p>{this.state.text}</p>
        <p>remaining character count: {this.state.remChar}</p>
      </div>
    );
  }
}

export default TwitterMessage;
