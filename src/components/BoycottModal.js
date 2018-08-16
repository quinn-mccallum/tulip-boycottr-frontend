
import React, { Component } from 'react';
import AddBoycottWizardForm from './AddBoycottWizardForm';
import { connect } from 'react-redux';
import { fetchSearchedPlaces } from '../actions/placesActions';
import { updateBoycotts } from '../actions/boycottActions';
import { toggleModal } from '../actions/boycottModalActions';

class BoycottModal extends Component {

     submit = values => {
        console.log(values);
        //print the form values to console
        //this.props.updateBoycotts(values);
        
        //create a post to send the form to the backend
     };
    
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
    return (
      this.props.isActive && (
        <div className={this.props.isActive ? 'is-active modal' : 'modal'} >
          <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
              <h1 className="modal-card-title">Add a New Boycott</h1>
                <button
                  className="delete"
                  aria-label="close"
                  onClick={()=>{this.props.toggleModal(!this.props.isActive)}}
                  /> 
              </header>
                <section className="modal-card-body">

                    <AddBoycottWizardForm onSubmit={this.submit} />

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
            </div>
          </div>
)
);
}
}


const mapDispatchToProps = {
      updateBoycotts,
      fetchSearchedPlaces,
      toggleModal
}

const mapStateToProps = ({ googleMaps, googlePlaces, boycottLocations }) => {
  const { userLat, userLng } = googleMaps;
  const { placesLoading, error, nearbyPlaces, searchedPlaces } = googlePlaces;
  return { userLat, userLng, placesLoading, error, nearbyPlaces, searchedPlaces, markerData: boycottLocations }
}


export default connect(mapStateToProps, mapDispatchToProps)(BoycottModal);
