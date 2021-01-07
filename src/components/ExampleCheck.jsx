import React from "react"

class ExampleClass extends React.Component {
  constructor() {
    super();
    this.state = {
      usingToggleOne: false
    };

  }

  toggleforToggleOne(event) {
    console.clear();
    console.log('check in toggle before set state', this.state.usingToggleOne);
    this.setState({
      usingToggleOne: !this.state.usingToggleOne
    }, function afterStateChange () {this.useNewState();});
    console.log('check in toggle after set state', this.state.usingToggleOne);
  }

  useNewState() {
    console.log('check in useNewState callback', this.state.usingToggleOne);
  }

  componentWillUpdate() {
    console.log('check in componentWillUpdate', this.state.usingToggleOne);
  }

  componentDidUpdate() {
    console.log('check in componentDidUpdate', this.state.usingToggleOne);
  }

  render() {
    console.log('check in render', this.state.usingToggleOne);
    return(
      <input type="checkbox"
             onChange={this.toggleforToggleOne.bind(this)} />
    );
  }
}

export default ExampleClass