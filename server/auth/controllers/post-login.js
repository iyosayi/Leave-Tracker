import wrapAsync from '../../helpers/wrapAsync'

const makePostLogin = ({ loginUser }) => {
  return wrapAsync(async (httpRequest) => {
    const { ...details } = httpRequest.body
    const token = await loginUser({ ...details })
    return {
      headers: {
        'Content-Type': 'application/json'
      },
      status: 'OK',
      statusCode: 200,
      message: 'Authorized',
      data: token
    }
  })
}

export default makePostLogin
