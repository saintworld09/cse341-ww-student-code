const mongodb = require('../db/connect');

const getData = async (req, res) => {
  try {
    const result = await mongodb
      .getDb()
      .db("WebSevicesProject")
      .collection("user")
      .findOne({}, { projection: { base64Image: 0 } });

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);

  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'An error occurred while retrieving the data.',
      error: err.message
    });
  }
};

module.exports = {
  getData
};