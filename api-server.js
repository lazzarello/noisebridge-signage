var SerialPort = require("serialport").SerialPort;
var sprintf = require("sprintf").sprintf;
var server = require("node-router").getServer();
var protocol = require("prolite-protocol.json");

var unit_id = "01";
var program_id = "PC";
var scroll_type = "FD";
var input_length = 1023;
var addr = "127.0.0.1";
var port = 8888;
var serial_device = "/dev/ttyS0";

//var message_string = sprintf("<ID%s><%s><%s> Hello World! \r\n", unit_id, program_id, scroll_type);

serialPort = new SerialPort(serial_device, {
  baudRate: 300,
  flowControl: false
});

function parse_input(protocol, input) {
  return input;
}

server.get("/marquee", function( req, resp, match) {
  if ( req.body.length > input_length ) {
    return "GTFO";
  } else {
    var message_string = sprintf("<ID%s><%s><%s> Hello World! \r\n", unit_id, program_id, scroll_type);
  }

  serialPort.open(function(err) {
    if ( err ) {
      console.log('GTFO! No serial port. Exiting... ' + err);
    } else {
      serialPort.write(message_string, function(err, results) {
        console.log('err ' + err);
        console.log('results ' + results);
      });
    }
  });
  return {response: "the sign says " + req.body};
});

server.listen(addr + ":" + port);
