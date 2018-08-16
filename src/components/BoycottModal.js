
import React, { Component } from 'react';
import AddBoycottWizardForm from './AddBoycottWizardForm';
import { connect } from 'react-redux';
import { fetchSearchedPlaces, getEstablishmentInformation, clearStoreEstablishment } from '../actions/placesActions';
import { updateBoycotts, createBoycott } from '../actions/boycottActions';
import { toggleModal } from '../actions/boycottModalActions';


class BoycottModal extends Component {
  state = {
    boycottLocation: { name: null }
  }

  submit = values => {
    if(this.state.boycottLocation.name){
      const { address, name } = this.state.boycottLocation;
      const { lat, lng } = this.state.boycottLocation.location;
      //print the form values to console
      this.props.createBoycott(values, address, lat, lng, name);
    }
    else {
      const { address, name, lat, lng } = this.props.establishmentInformation;
      this.props.createBoycott(values, address, lat, lng, name);
    }

    //create a post to send the form to the backend
  };

  placesSearch = searchTerm => {
    this.props.fetchSearchedPlaces(searchTerm);
  };

  clearEstablishment = () => {
    this.props.clearStoreEstablishment();
    this.setState({
      boycottLocation: {name : ''}
    })
  }

  selectEstablishment = place => {
    this.setState({
      boycottLocation: place
    })
  }

  renderSearchedPlaces = () => {
    return this.props.searchedPlaces.map((place, i) => {
      console.log(place);
      return <a onClick={()=>{this.props.getEstablishmentInformation(place.place_id)}}><li key={`${place.description}${i}`} >{`${place.description}`}</li></a>
    })
  }

  renderPlaces = () => {
    return this.props.nearbyPlaces.map((place, i)=> {
      return <a onClick={()=>{this.selectEstablishment(place)}} ><li style={{paddingTop: '0.5rem'}} key={`${place.name}${i}`}>{`${place.name}, ${place.address}`}</li></a>
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

                  { (this.state.boycottLocation.name || this.props.establishmentInformation.name) && (
                    <div>
                      <h1>{this.state.boycottLocation.name ? this.state.boycottLocation.name : this.props.establishmentInformation.name}</h1>
                      <AddBoycottWizardForm onSubmit={this.submit} previousPage={this.clearEstablishment} />
                    </div>
                  )}
                  {
                    (!this.state.boycottLocation.name && !this.props.establishmentInformation.name) && (
                      <div>
                        <div className='control columns'>
                          <div className='column is-four-fifths'>
                            <input ref={ref => this.input = ref} className='input is-info' type='text' placeholder='Search Nearby Places' />
                          </div>
                          <div className='column' style={{display: 'flex', justifyContent: 'center'}} >
                            <a  className="button is-primary is-rounded"
                                onClick={()=>{this.placesSearch(this.input.value)}}
                                >
                                  Search
                            </a>
                          </div>
                        </div>
                          <h1 style={{fontSize: '1.5rem'}}>Results:</h1>
                          <ul>
                            { this.props.isLoading ? <p>loading</p> : this.renderSearchedPlaces() }
                          </ul>
                        <div style={{border: 'solid thin black', padding: '1.5rem', margin: '2rem'}}>
                          <h1 style={{fontSize: '1.5rem'}}>Nearby Places: </h1>
                          <ul>
                            { this.props.isLoading ? <p>Loading</p> : this.renderPlaces() }
                          </ul>
                        </div>
                      </div>
                    )
                  }
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
      toggleModal,
      createBoycott,
      getEstablishmentInformation,
      clearStoreEstablishment
}

const mapStateToProps = ({ googleMaps, googlePlaces, boycottLocations }) => {
  const { userLat, userLng } = googleMaps;
  const { placesLoading, error, nearbyPlaces, searchedPlaces, loadingInformation, establishmentInformation } = googlePlaces;
  return { userLat, userLng, placesLoading, error, nearbyPlaces, searchedPlaces, markerData: boycottLocations, loadingInformation, establishmentInformation }
}


export default connect(mapStateToProps, mapDispatchToProps)(BoycottModal);
