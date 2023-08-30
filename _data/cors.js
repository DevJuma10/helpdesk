module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow all origins (*)
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  };
  