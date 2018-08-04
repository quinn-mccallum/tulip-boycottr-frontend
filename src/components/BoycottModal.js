import React, { Component } from 'react';

export class BoycottModal extends Component {
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
                    </header>
                    <section className="modal-card-body">
                    </section>
                    <footer className="modal-card-foot">
                    </footer>
                </div>
            </div>
        );
      }
}

export default BoycottModal;
