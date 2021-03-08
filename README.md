# inkplate-peripheral
Send more easily commands to the Inkplate display via serial from node programs.

## Usage  
1. Copy ``` inkplate-peripheral.js``` in your desired directory
2. Include the script in your node app   
``` const inkplate = require("./inkplate-peripheral"); ```   
3. Install the Serialport library   
``` npm i serialport ```   
4 Run the node app   
``` node example.js ```   

   
The peripheral mode commands are extracted from the official Inkplate documentation:   
[https://inkplate.readthedocs.io/en/latest/peripheral-mode.html](https://inkplate.readthedocs.io/en/latest/peripheral-mode.html)
