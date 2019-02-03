import React from "react";

// uses implicit return (only returning one thing),
// so no "return" keyword is needed
const Header = props => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">of</span>
        <span className="the">the</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      {/* In a function, we odn't have access to 'this' keyword.
    Instead, we'll pass props through the function and call it directly*/}
      <span>{props.tagline}</span>
    </h3>
  </header>
);
export default Header;
