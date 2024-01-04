Gertboard Commands
The Gertboard is an add-on board for the Raspberry Pi featuring a set of buffers, a motor driver, a ULN2003 darlington driver, analog to digital and digital to analog chips and an ATmega.

The gpio command can read the two analog to digital ports and write to the two ditial to analog ports.

gpio gbr <channel>
Reads from the analog to digital channel given by the <channel> paramter. This is 0 or 1.

gpio gbw <channel> <value>
Writes the given value to the channel given (0 or 1).