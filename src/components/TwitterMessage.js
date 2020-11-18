import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      limit: props.maxChars
    };
  }

  handleChange = (event) => {
    const e = event


    this.setState({
      value: e.target.value,
      limit: this.state.limit - 1
    })


    // if (e.nativeEvent.inputType === 'deleteContentBackward'){
    //   this.setState({
    //     limit: this.state.limit +1
    //   })
    // } else {
    //   this.setState({
    //     limit: this.state.limit -1
    //   })
    // }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.value} onChange={this.handleChange}/>
        <p>{this.state.limit}</p>
      </div>
    );
  }
}

export default TwitterMessage;
