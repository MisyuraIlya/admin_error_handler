const SendResponse = (response , data = null, firstNum = null, secondNum = null) => {
    return response
    .set("Content-Range", `erros 0-4/${data.total ? data.toal : 0}` )
    .json(data.response);
}

export default SendResponse;