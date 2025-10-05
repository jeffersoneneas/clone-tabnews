function status(request, response) {
  response.status(200).json({
    batata: "doce",
    bife: "parmegiana",
  });
}

export default status;
