import React, { Component } from "react";
import axios from "axios";

//styled-components//
import HeaderText from "../styles/HeaderText";
import HeaderIcon from "../styles/HeaderIcon";
import ViewAllText from "../styles/ViewAllText";

//React Components//
import RelatedTrackEntry from "./RelatedTrackEntry.jsx";
import RelatedTracksIcon from "../assets/relatedTracks.jsx";
import PlaceHolderEntry from "./PlaceholderTrack.jsx";

class RelatedTracksView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    //function bindings
    this.renderTracks = this.renderTracks.bind(this);
  }

  renderTracks() {
    if (this.props.tracksLoading) {
      return (
        <div>
          <PlaceHolderEntry />
          <PlaceHolderEntry />
          <PlaceHolderEntry />
        </div>
      );
    } else {
      return (
        <div>
          {this.props.tracks.map((track, index) => {
            return <RelatedTrackEntry key={index} track={track} />;
          })}
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h3>
          <HeaderText>
            <HeaderIcon>
              <RelatedTracksIcon />
            </HeaderIcon>
            <div className="headerText" style={{ paddingTop: "6px" }}>
              <span>Related Tracks</span>
              <ViewAllText>View all</ViewAllText>
            </div>
          </HeaderText>
        </h3>
        {this.renderTracks()}
      </div>
    );
  }
}

export default RelatedTracksView;
