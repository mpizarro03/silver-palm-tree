import React from "react";
import "./Tile.css";
import Button from "../Button/Button";
import image from "../Tile/sn.png";

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
  }
  render() {
    const { data } = this.props;
    console.log("data", data);
    return (
      <div className="tile">
        test
        <img className="tile__img" src={image} alt="Tile Art"></img>
        <div className="tile__buttonWrapper">
          <Button onClick={() => console.log("play")} type="play" icon="play" />
          <Button
            onClick={() => console.log("...")}
            label="..."
            type="ellipses"
          />
        </div>
      </div>
    );
  }
}

export default Tile;
