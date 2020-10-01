import apiResponse from '../../helpers/http-response'
import wrapAsync from '../../helpers/wrapAsync'

const makeGetUsers = ({ fetchAll }) => {
  return wrapAsync(async (httpRequest) => {
    const users = await fetchAll()

    return apiResponse({
      status: 'OK',
      statusCode: 200,
      data: [users],
      message: 'Users'
    })
  })
}

export default makeGetUsers
