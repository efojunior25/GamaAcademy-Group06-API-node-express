module.exports = (req, res, next) => {
  const { pass } = req.query;

  if (!pass || pass !== "teste") {
    return res.status(400).json("errado");
  }

  next();
};
