const SerialPort = require("serialport");
const inkplate = require("./lib/inkplate-peripheral");



// SERIAL PORT TO EINK SETTINGS
const port = new SerialPort(
  "/dev/ttyUSB0",
  {
    baudRate: 115200,
    dataBits: 8,
    stopBits: 1,
    parity: "even",
  },
  function (err) {
    if (err) {
      return console.log("Error: ", err.message);
    }
  }
);


// SETUP EINK
port.write(inkplate.panelSupply(1));
port.write(inkplate.clearDisplay());
port.write(inkplate.setDisplayMode(1));

// HELLO WORLD
port.write(inkplate.print("Hello world!"));
port.write(inkplate.display());
