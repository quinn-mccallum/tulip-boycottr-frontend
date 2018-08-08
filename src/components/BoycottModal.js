import React from 'react';
import BoycottReasonForm from './BoycottForm';

export default ({isActive, onModalToggle}) => (
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
                        <BoycottReasonForm onSubmit={this.submit} />
                    </section>
                    <footer className="modal-card-foot">
                    </footer>
                </div>
            </div>
        :
        null
    );
