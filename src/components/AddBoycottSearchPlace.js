import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../form/validate'
import renderField from '../form/renderField'

const AddBoycottSearchPlace = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
    <label className="title is-3" >Search Places</label>
      <div className="field">
        <div className="control">
        
          <Field
            className="input"
            name="searchPlace"
            type="text"
            component={renderField}
          />
        </div>
      </div>

      <div>
        <button type="submit" className="next button is-primary">
          Next
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'addBoycottForm', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(AddBoycottSearchPlace)