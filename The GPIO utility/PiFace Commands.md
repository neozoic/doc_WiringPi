PiFace Commands
The PiFace is an add-on board for the Raspberry Pi featuring 8 open-collector outputs, with 2 relays and 8 inputs (with 4 on-board buttons). These functions are fairly well fixed in the hardware1, so only the read, write and internal pull-up commands are implemented.

The gpio command hard-wires the PiFace pin numbers to 200 through 207 for both reading the inputs and writing the outputs. If you want to read the state of an output pin, then you need to read from pins 208 through 215.

gpio -p write <pin> 0/1
Writes the value 0 (off) or 1 (on) to the output pin on the PiFace. PiFace pins start at 200 and are considered bi-directional, although they are separate physical pins on the device. So writing 200 writes to the first output pin (which is the first on-board relay) and reading from 200 reads the first input pin (the input/button nearest the edge of the board)

gpio -p read <pin>
Reads and prints the value on the given input pin. See the comments above regarding pin numbering.

gpio -p mode <pin> up/tri
This enables (up) or disables (tri) the internal pull-up resistor on the given input pin. You need to enable the pull-up if you want to read any of the on-board switches on the PiFace board, but you may not need it with externally connected devices.

1It is possible to use the input pins on the PiFace board as outputs, if required, however they are fed through a 330Ω resistor and you need to use the MCP23S17 wiringPi module to accomplish this – it’s not possible via the -p flag to the gpio program.