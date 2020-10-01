import apiResponse from '../../helpers/http-response'
import wrapAsync from '../../helpers/wrapAsync'

const makeGetLeaves = ({ listLeave }) => {
  return wrapAsync(async (httpRequest) => {
    const leave = await listLeave()

    return apiResponse({
      status: 'OK',
      statusCode: 200,
      data: [leave],
      message: 'Leaves'
    })
  })
}

export default makeGetLeaves
