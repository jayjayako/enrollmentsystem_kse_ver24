const userconn = require("../models/userconn");

const checkifconnupdated = async (id, connection) => {
  try {
    const results = await userconn.findOne({ id });
    if (results) {
      if (connection != results.connection) {
        updateloggedin(id, connection);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const updateloggedin = async (id, connection) => {
  let filter = { id: id };
  let post = { connection: connection };
  try {
    const results = await userconn.findOneAndUpdate(filter, post, {
      new: true,
    });
    if (results) {
      console.log("Updated Connection");
    }
  } catch (err) {
    console.log(err);
  }
};

const updatesocketid = async (id, socketconn) => {
  let filter = { id: id };
  let post = { socket: socketconn };
  try {
    const results = await userconn.findOneAndUpdate(filter, post, {
      new: true,
    });
    if (results) {
      console.log("Updated Connection");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  updateloggedin: checkifconnupdated,
  updatesocketid: updatesocketid,
};
