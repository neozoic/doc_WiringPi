SPI: MCP23s08 and MCP23s17 extensions
The gpio command can use the mcp23s08 and mcp23s17 extension modules which allows you to connect several of these GPIO expansion chips to expand the GPIO capabilities of the Raspberry Pi. These modules connect via SPI, so you have have to run

gpio load spi
first, to make sure the SPI kernel module is loaded.

The syntax is:

gpio -x mcp23s17:base:spi:devId …

where base is the base pin number, spi is the Pi’s SPI bus (0 or 1), and devId is the device Id set by the 3 pins; A0, A1 and A2. (Normally zero unless you are using multiple chips on the same SPI bus. The number of pins is known by the expansion module and it’s 16 for the mcp12s17 and 8 for the mcp23s08.

The mcp23s17 and mcp23s08 support mode (in, out, up, tri), read and write commands.

Examples:

gpio -x mcp23s17:100:0:0 mode 100 out
gpio -x mcp23s17:100:0:0 mode 101 in
gpio -x mcp23s17:100:0:0 mode 101 up
gpio -x mcp23x17:100:0:0 read 101