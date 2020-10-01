import apiResponse from '../../helpers/http-response'
import wrapAsync from '../../helpers/wrapAsync'

const makePostLeave = ({ addLeave }) => {
  return wrapAsync(async (httpRequest) => {
    const { ...details } = httpRequest.body

    const leave = await addLeave({ ...details })

    return apiResponse({
      status: 'OK',
      statusCode: 201,
      data: [leave],
      message: 'Leave created'
    })
  })
}

export default makePostLeave
