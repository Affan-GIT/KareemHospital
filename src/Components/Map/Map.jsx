import React, { Component, useEffect } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import './Map.css';

const mapStylesBig = {
  width: '50vw',
  height: '50vh',
  marginLeft: 'auto',
  marginRight: 'auto',
};
const mapStyles1440 = {
  width: '75vw',
  height: '75vh',
  marginLeft: 'auto',
  marginRight: 'auto',
};
const mapStyles700 = {
  width: '75vw',
  height: '50vh',
  marginLeft: 'auto',
  marginRight: 'auto',
};
const mapStyles520 = {
  width: '75vw',
  height: '40vh',
  marginLeft: 'auto',
  marginRight: 'auto',
};
const containerStyles = {
  width: '100%',
  height: 'max-content',
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    showText: false,
    windowWidth: null,
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  componentDidMount() {
    window.addEventListener('resize', () =>
      this.setState({ windowWidth: window.innerWidth })
    );
  }
  render() {
    return (
      <div className='mapContainer'>
        <a href='https://www.google.com/maps/place/Kareem+Hospital/@19.2699243,76.7637222,17z/data=!3m1!4b1!4m5!3m4!1s0x3bd019d9a5a56801:0x9019cdd1fff8f79!8m2!3d19.2698087!4d76.765906'>
          <div
            className='hoverContainer'
            onMouseEnter={() => {
              this.setState({ showText: true });
            }}
            onMouseLeave={() => {
              this.setState({ showText: false });
            }}
          >
            <div
              className={`hoverContainer__texts ${
                !this.state.showText ? 'hidden' : ''
              }`}
            >
              Open in maps
            </div>
          </div>
        </a>
        <Map
          google={this.props.google}
          zoom={16}
          initialCenter={{
            lat: 19.269797654232868,
            lng: 76.76592166858065,
          }}
          style={
            this.state.windowWidth > 1440
              ? mapStylesBig
              : this.state.windowWidth > 700
              ? mapStyles1440
              : this.state.windowWidth > 520
              ? mapStyles700
              : mapStyles520
          }
          containerStyle={containerStyles}
        >
          <Marker onClick={this.onMarkerClick} name={'Kareem Hospital'} />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDcs5Xb7wjdT0fqXbZGfzahKefqMTwcmjk',
})(MapContainer);
