import React from "react";
import "./Tile.css";
import Button from "../Button/Button";

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openTeaser: false
    };
  }

  secondsToHM = durationSeconds => {
    const hr = Math.floor(durationSeconds / 3600);
    const min = Math.floor((durationSeconds % 3600) / 60);
    const hrDisplay = hr > 0 ? hr + (hr === 1 ? " hr, " : " hrs, ") : "";
    const minDisplay = min > 0 ? min + (min === 1 ? " min, " : " mins ") : "";
    return hrDisplay + minDisplay;
  };

  toggleVideoTeaser = e => {
    e.preventDefault();
    this.setState(prevState => ({ openTeaser: !prevState.openTeaser }));
  };

  render() {
    const { video, loading, error } = this.props;

    return (
      <div>
        {loading && !error && video
          ? "loading ..."
          : video && (
              <div className="tile">
                <img
                  className="tile__img"
                  src={video.image}
                  alt="Tile Art"
                ></img>
                <div className="tile__buttons">
                  <Button onClick={() => {}} type="play" icon="play" />
                  <Button
                    onClick={this.toggleVideoTeaser}
                    label="..."
                    type="ellipses"
                  />
                </div>
                <div className="tile__body">
                  <div>{video.seriesTitle}</div>
                  <div className="tile-video-title">{video.title}</div>
                  {this.state.openTeaser && (
                    <div className="tile-video-teaser">{video.teaser}</div>
                  )}
                  <div className="tile-video__meta-items">
                    <div className="tile-video__meta-item">
                      S{video.seasonNum}:Ep{video.episodeNum}
                    </div>
                    <div className="tile-video__meta-item">
                      {this.secondsToHM(video.durationSeconds)}
                    </div>
                  </div>
                </div>
              </div>
            )}
      </div>
    );
  }
}

export default Tile;
