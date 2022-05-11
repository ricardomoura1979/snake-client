const net = require("net");


// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541 // PORT number here,

  
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data); // code that does something when the connection is first established
 
    
  });

/* To accomplish this, inside the connect function, use the .on method on our conn object to register a "connect" handler (a callback function). In the callback, print a message for us (the player) to see - something like "Successfully connected to game server" will suffice. */
  conn.write("Name: RMP");
/*   conn.write("Move: up");
  conn.write("Move: down");
  conn.write("Move: left");
  conn.write("Move: right") 
  };
  */
/*   setTimeout(()=>{conn.write("Move: up")},50)
  setTimeout(()=>{conn.write("Move: up")},300)
  setTimeout(()=>{conn.write("Move: up")},500)
  setTimeout(()=>{conn.write("Move: up")},900);
  setTimeout(()=>{conn.write("Move: up")},1200)
  setTimeout(()=>{conn.write("Move: up")},1500)
  setTimeout(()=>{conn.write("Move: up")},1700) */


  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  
  });

  
  return conn;
  
 
};



module.exports = connect