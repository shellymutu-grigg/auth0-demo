// Create variable for action type
export const NAVIGATE = 'NAVIGATE'
export const SHOW_ERROR = 'SHOW_ERROR'
export const PENDING = 'PENDING'

export const RECEIVE_OBJECTS = 'RECEIVE_OBJECTS'
export const REQUEST_OBJECTS = 'REQUEST_OBJECTS'

// Create action creator for navigation
export const navigate = (target) => {
  return {
    type: NAVIGATE,
    target
  }
}

// Create action creator for requesting objects
export const requestObjects = () => {
  return {
    type: REQUEST_OBJECTS
  }
}

// Create action creator for receiving objects
export const receiveObjects = (objects) => {
  return {
    type: RECEIVE_OBJECTS,
    objects
  }
}

// Create action creator for showing errors
export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage
  }
}
