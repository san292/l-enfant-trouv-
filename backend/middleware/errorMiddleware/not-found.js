const notFound = (req, res) =>
  res.status(404).send(`Route ${req.original.url} not found`);

module.exports = notFound;
