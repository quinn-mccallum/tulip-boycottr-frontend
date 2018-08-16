import React from 'react';
import { Field, reduxForm } from 'redux-form';

const BoycottReasonForm = props => {
    const { handleSubmit, previousPage } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label className="title is-3" >Reasons</label>
                <div className="field">
                    <div className="control">
                        <label>
                            <Field
                                name="Animal Testing"
                                //id="employee"
                                component="input"
                                type="checkbox"
                                value="Animal Testing"
                            />
                            Animal Testing
                    </label>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <label >
                            <Field
                                name="Worker Mistreatment"
                                component="input"
                                type="checkbox"
                                value="Worker Mistreatment"
                            />
                            Worker Mistreatment
                    </label>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <label >
                            <Field
                                name="Environmental Policies"
                                component="input"
                                type="checkbox"
                                value="Environmental Policies"
                            />
                            Environmental Policies
                    </label>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <label >
                            <Field
                                name="Anti-LGBTQ+"
                                component="input"
                                type="checkbox"
                                value="Anti-LGBTQ+"
                            />
                            Anti-LGBTQ+
                    </label>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <label >
                            <Field
                                name="Sexist Behaviour"
                                component="input"
                                type="checkbox"
                                value="Sexist Behaviour"
                            />
                            Sexist Behaviour
                    </label>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <label >
                            <Field
                                name="Racist Behaviour"
                                component="input"
                                type="checkbox"
                                value="Racist Behaviour"
                            />
                            Racist Behaviour
                    </label>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <label htmlFor="otherReason">Other</label>
                        <Field
                            className="input"
                            name="other"
                            component="input"
                            type="text"
                            //value="other"
                            id="other"
                            placeholder="Other Boycott Reason"
                        />
                    </div>
                </div>
                <div className="control center">
                    <button className="button is-primary is-outlined previous" type="primary" onClick={previousPage}>Previous</button>
                    <button className="button is-primary submit" type="submit">Submit</button>
                </div>
            </div>
        </form>
    )
};

export default reduxForm({
    form: 'addBoycottForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
 
  })(BoycottReasonForm)

