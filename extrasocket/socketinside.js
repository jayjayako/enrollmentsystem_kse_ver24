const { updateloggedin, updatesocketid } = require("./userconn");
const userconn = require("../models/userconn");

async function socketfunct(socket) {
  updatesocketid(socket.request.session.userid, socket.id);
  /////////////// function for user logout /////////////
  async function autologout(socketid) {
    ////////////////////// for user 1 ///////////////////
    const results = await userconn.findOne({
      id: socket.request.session.userid,
    });
    if (results) {
      if (socketid == results.socket) {
        updateloggedin(socket.request.session.userid, "offline");
        socket.request.session.destroy();
        console.log("User Logged Out");
      }
    }
    /////////////////////////////////////////////////////

    return;
  }
  //////////////////////////////////////////////////////

  socket.on("message", (message) => {
    console.log(message.message);
  });

  socket.on("disconnect", () => {
    console.log("Disconnected: socket " + socket.id);
    setTimeout(autologout, 5000, socket.id);
    socket.disconnect(true);
  });
}

module.exports = {
  socketfunct: socketfunct,
};
