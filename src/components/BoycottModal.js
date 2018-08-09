import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSearchedPlaces } from '../actions/placesActions';

export class BoycottModal extends Component {

  placesSearch = searchTerm => {
    this.props.fetchSearchedPlaces(searchTerm);
  };

  renderSearchedPlaces = () => {
    return this.props.searchedPlaces.map((place, i) => {
      return <li key={`${place.description}${i}`} >{`${place.description}`}</li>
    })
  }

  renderPlaces = () => {
    return this.props.nearbyPlaces.map((place, i)=> {
      return <li key={`${place.name}${i}`}>{`${place.name}, ${place.address}`}</li>
    })
  }

  render() {
      //Render nothing if the "show" prop is false
    if(!this.props.isActive) {
      return null;
    }

    return (
        <div className={this.props.isActive ? 'is-active modal' : 'modal'} >
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <button
                        className="delete"
                        aria-label="close"
                        onClick={this.props.onClose}
                    ></button>
                    <h1>Add a new boycott</h1>
                </header>
                <section className="modal-card-body">
                  <div className='control'>
                    <input ref={ref => this.input = ref} className='input is-info is-large' type='text' placeholder='Search Nearby Places' />
                    <button onClick={()=>{this.placesSearch(this.input.value)}}>Search</button>
                  </div>
                  <ul>
                    { this.props.isLoading ? <p>loading</p> : this.renderSearchedPlaces() }
                  </ul>
                  <div>
                    <h1>Nearby Places: </h1>
                    <ul>
                      { this.props.isLoading ? <p>Loading</p> : this.renderPlaces() }
                    </ul>
                  </div>
                </section>
                <footer className="modal-card-foot">
                </footer>
            </div>
        </div>
    );
  }
}

const mapStateToProps = ({ googleMaps, googlePlaces }) => {
  const { userLat, userLng, isLoading } = googleMaps;
  const { placesLoading, error, nearbyPlaces, searchedPlaces } = googlePlaces;
  return { userLat, userLng, placesLoading, error, nearbyPlaces, searchedPlaces }
}

export default connect(mapStateToProps, { fetchSearchedPlaces })(BoycottModal);
