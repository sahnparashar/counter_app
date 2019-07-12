import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value
    // tags: ["tag1", "tag2", "tag3"]
    // tags: []
    // imageUrl: "https://picsum.photos/200"
  };

  //   styles = {
  //     fontSize: 15,
  //     fontWeight: "bold"
  //   };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  renderTags() {
    // console.log("I am renderTags!");
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  handleIncrement = product => {
    console.log(product);
    this.setState({
      value: this.state.value + 1
    });
  };
  handleDecrement = () => {
    this.setState({ value: this.state.value === 0 ? 0 : this.state.value - 1 });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.children}
        {/* <h1>Hello World!</h1> */}
        {/* <span>{this.state.value}</span> */}
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/* <span style={this.styles} className="badge badge-primary m-2"> */}
        <span className={this.getBadgeClasses()}>{this.formatvalue()}</span>
        <button
          onClick={this.handleIncrement}
          //   onClick={() => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={this.handleDecrement}
        >
          Decrement
        </button>
        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
        {/* {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()} */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatvalue() {
    const { value } = this.state;
    // const { x } = <h1>Zero</h1>;
    return value === 0 ? <div>Zero</div> : value;
  }
}

export default Counter;
