import React from "react";
import "./Tile.css";

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
  }
  render() {
    return <div>test</div>;
  }
}

export default Tile;
