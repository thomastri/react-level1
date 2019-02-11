import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {
    event.preventDefault(); // Prevents forms from refreshing
    // get text from input
    const storeName = this.myInput.current.value;
    // change page url to /store/input
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      // In the onClick, you don't want to have () for the func.
      // If you do, it will activate as soon as the page loads
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store!</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          // This activates getFunName immediately
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}

export default StorePicker;
