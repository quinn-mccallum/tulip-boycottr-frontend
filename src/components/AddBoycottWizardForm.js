import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddBoycottSearchPlace from './AddBoycottSearchPlace'
import BoycottReasonForm from './BoycottReasonForm'


class AddBoycottWizardForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (
      <div>
        {page === 1 && <AddBoycottSearchPlace onSubmit={this.nextPage} />}
   
        {page === 2 && (
          <BoycottReasonForm
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )}
      </div>
    )
  }
}

AddBoycottWizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default AddBoycottWizardForm