var NodeRouter = require("node-router");
var SerialPort = require("serialport").SerialPort;
var sprintf = require("sprintf").sprintf;
var server = require("http");

var protocol = require("prolite-protocol.json");

var unit_id = "01";
var program_id = "PC";
var scroll_type = "FD";
var input_length = 1023;
var addr = "127.0.0.1";
var port = "8888";
var serial_device = "/dev/ttyS0";

var message_string = sprintf("<ID%s><%s><%s> Hello World! ", unit_id, program_id, scroll_type);

serialPort = new SerialPort(serial_device, {
  baudRate: 300,
  flowControl: false
});

function parse_input(protocol, input) {
  return input;
}

server.listen(addr + port, someshit) {

  if ( body.payload.length > input_length ) {
    return "GTFO";
  }

  return "WTF";
}
