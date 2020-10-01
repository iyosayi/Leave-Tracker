import apiResponse from '../../helpers/http-response'
import wrapAsync from '../../helpers/wrapAsync'

const makePostUser = ({ addUser }) => {
  return wrapAsync(async (httpRequest) => {
    let { ...details } = httpRequest.body

    const user = await addUser({ ...details })

    return apiResponse({
      status: 'OK',
      statusCode: 201,
      data: [user],
      message: 'User created'
    })
  })
}

export default makePostUser
