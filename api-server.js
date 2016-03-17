var NodeRouter = require("node-router");
var SerialPort = require("serialport").SerialPort;
var sprintf = require("sprintf").sprintf;

var protocol = require("prolite-protocol.json");

var unit_id = "01";
var program_id = "PC";
var scroll_type = "FD";

var message_string = sprintf("<ID%s><%s><%s> Hello World! ", unit_id, program_id, scroll_type);
