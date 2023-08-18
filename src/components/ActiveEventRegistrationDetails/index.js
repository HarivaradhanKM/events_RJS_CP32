import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  register: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderNoActiveEventView = () => (
    <p className="no-active-event-description">
      Click on an event, to view its registration details
    </p>
  )

  const renderRegistrationsClosedView = () => (
    <div className="view-container">
      <img
        className="registrations-closed-img"
        alt="registrations closed"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
      />
      <h1 className="registrations-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="view-container">
      <img
        className="registered-img"
        alt="registered"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
      />
      <h1 className="registered-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderYetToRegisterView = () => (
    <div className="view-container">
      <img
        className="yet-to-register-img"
        alt="yet to register"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png "
      />
      <p className="register-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-here-button">
        Register Here
      </button>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return renderYetToRegisterView()
      case registrationStatus.register:
        return renderRegisteredView()
      case registrationStatus.registrationsClosed:
        return renderRegistrationsClosedView()
      default:
        return renderNoActiveEventView()
    }
  }

  return (
    <div className="registration-status-container">
      {renderActiveEventRegistrationDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
