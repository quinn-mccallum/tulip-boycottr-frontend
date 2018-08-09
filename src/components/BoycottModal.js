import React from 'react';
import BoycottReasonForm from './BoycottForm';
import { connect } from 'react-redux';
import { updateBoycotts } from '../actions/boycottActions';

const mapStateToProps = (state) => {
    return {
      markerData: state.boycottLocations,
      
    }
  
}

const mapDispatchToProps = {
      updateBoycotts,
}

const submit = values => {
    console.log(this.props.updateBoycotts);
    //print the form values to console
    this.props.updateBoycotts(values);
    
    //create a post to send the form to the backend

}

const boycottModal = ({isActive, onModalToggle}) => (
    isActive ?
        <div className={isActive ? 'is-active modal' : 'modal'} >
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <button 
                        className="delete"
                        aria-label="close"
                        onClick={() => onModalToggle(!isActive)}
                    ></button>
                </header>
                <section className="modal-card-body">
                    <BoycottReasonForm onSubmit={submit} />
                </section>
                <footer className="modal-card-foot">
                </footer>
            </div>
        </div>
    :
    null
);

        
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(boycottModal);