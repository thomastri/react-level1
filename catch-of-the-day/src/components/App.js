import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = fish => {
    // STEPS TO UPDATE STATES IN REACT:

    // 1. Take a copy of existing state
    // -- you do this because you don't want to mutate the object directly
    // -- that can cause things to load incorrectly or lower performance
    const fishes = { ...this.state.fishes };

    // 2. Add our new fish to the fishes variable
    fishes[`fish${Date.now()}`] = fish;

    // 3. Set new fishes object into state
    // -- call built in state API
    this.setState({
      fishes: fishes
    });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="This is cool" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
