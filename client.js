const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    conn.write("Name: MMD")
    // conn.write("Move: up")
  })

  conn.on('data', (data) => {
    console.log(data, "It's got a sharp tongue, this server!")
  })
  return conn;
}

module.exports = {
  connect
};