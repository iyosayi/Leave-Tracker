import apiResponse from '../../helpers/http-response'
import wrapAsync from '../../helpers/wrapAsync'

const getLoggedInUser = ({ listUser }) => {
  return wrapAsync(async (httpRequest) => {
    const user = await listUser({ id: httpRequest.user.id })
    return apiResponse({
      status: 'OK',
      statusCode: 200,
      message: 'Authorized',
      data: [user]
    })
  })
}

export default getLoggedInUser
