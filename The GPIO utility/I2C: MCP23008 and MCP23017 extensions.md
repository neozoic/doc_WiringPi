I2C: MCP23008 and MCP23017 extensions
The gpio command can use the mcp23008 and mcp23017 extension modules which allows you to connect several of these GPIO expansion chips to expand the GPIO capabilities of the Raspberry Pi. These modules connect via I2C, so you have have to run

gpio load i2c
first, to make sure the I2C kernel module is loaded.

The syntax is:

gpio -x mcp23017:base:devId …

where base is the base pin number and devId is the devices I2C bus ID. The number of pins is known by the expansion module and it’s 16 for the mcp12017 and 8 for the mcp23008.

The mcp23017 and mcp23008 support mode (in, out, up, tri), read and write commands.

Examples:

gpio -x mcp23017:100:0:0 mode 100 out
gpio -x mcp23017:100:0:0 mode 101 in
gpio -x mcp23017:100:0:0 mode 101 up
gpio -x mcp23017:100:0:0 read 101
