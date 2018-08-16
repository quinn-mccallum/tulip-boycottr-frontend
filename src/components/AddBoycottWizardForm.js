import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddBoycottSearchPlace from './AddBoycottSearchPlace'
import BoycottReasonForm from './BoycottReasonForm'


class AddBoycottWizardForm extends Component {
  render() {
    const { onSubmit, previousPage } = this.props
    return (
      <div>
          <BoycottReasonForm
            previousPage={previousPage}
            onSubmit={onSubmit}
          />
      </div>
    )
  }
}

AddBoycottWizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default AddBoycottWizardForm
