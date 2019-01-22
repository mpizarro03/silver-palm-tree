export const getVideoRequest = () => {
  return {
    type: 'GET_VIDEO_REQUEST',
  }
}

export const getVideoSuccess = (data) => {
  return {
    type: 'GET_VIDEO_SUCCESS',
    payload: {
      data,
    }
  }
}

export const getVideoFailure = (error) => {
  return {
    type: 'GET_VIDEO_FAILURE',
    payload: {
      error,
    }
  }
}
