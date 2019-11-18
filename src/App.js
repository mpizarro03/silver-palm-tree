import React, { Component } from "react";
import { connect } from "react-redux";
import { getVideoRequest } from "./actions/video-actions";
import "./App.css";
import Tile from "../src/Components/Tile/Tile";

class App extends Component {
  componentDidMount() {
    this.props.getVideoRequest();
  }

  render() {
    const { props } = this;
    const { video = {} } = props;
    const videoData = video && video.data;
    const videoProcessing = video && video.processing;
    const videoError = video && video.error;

    console.log("App Render"); // please leave this log statement

    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__main-heading">{`Hello!  This is the <App /> component!  Please render your tile component in .app__body below`}</h1>
        </header>
        <div className="app__body">
          {!videoError ? (
            <Tile video={videoData} loading={videoProcessing} />
          ) : (
            "Error: unable to load video"
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    video: state.video
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getVideoRequest: () => dispatch(getVideoRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
