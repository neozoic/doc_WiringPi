The sr595 extension
The gpio command can use the sr595 extension module which allows you to connect several 74×595 shift registers to expand the GPIO capabilities of the Raspberry Pi.

The syntax is:

gpio -x sr595:base:pins …

where base is the base pin number, and pins is the number of pins in the chain. (You can chain up to 4 74×595’s so the range is 1 to 32)

The only function this module supports is write.

Examples:

gpio -x sr595:100:8 write 100 1
gpio -x sr595:100:8 write 101 1
gpio -x sr595:100:8 write 100 0