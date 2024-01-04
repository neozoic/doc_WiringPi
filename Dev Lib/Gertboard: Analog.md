Gertboard: Analog
WiringPi supports a devLib module to allow you to use the Gertboard analog inputs and outputs.

The Gertboard is a buffered IO interface board for the Raspberry Pi with many features, LEDs, buffers and even an ATmega on-board. This expansion module deals with the 2-channel, 10-bit analog to digital converter and the 2-channel 8-bit digital to analog converter on-board.

Include
#include <wiringPi.h>
#include <gertboard.h>
Initialise
gertboardAnalogSetup (int pinBase) ;
pinBase is the base pin that you want the analog ports to appear as. The setup routine allocates 2 pins and overlays the analog to digital input pins with the digital to analog output pins. So reading channel pinBase + 0 reads the first analog input channel (pin DA0 on the Gertboard), and writing pinBase + 0 outputs to the first analog output channel. (Pin AD0).

See the voltage.c and temperature.c programs in wiringPi/examples/Gertboard directory for examples of use.

Notes
The analog interface chips on the Gertboard are connected to the SPI bus. You need to load the SPI kernel modules with gpio load spi and make sure that the 5 SPI jumpers are in-place on the Gertboard – pins SCLK, MOSI, MISO, CSnA and CSnB.
The analog to digital convertor is a 10-bit device. Values returned will be in the range 0-1023 representing an input voltage of 0 to 3.3 volts.
Input Voltage calculation: volts = analogIn * 3.3 / 1023
The digital to analog converter is an 8-bit device. Values sent to it should be in the range 0-255 representing an output voltage on 0 to 2.047 volts.
Output voltage calculation: volts = analogOut / 255 * 2.047
The gpio program has commands to directly read and write the analog ports on the Gertboard: gpio gbr 0 will read input channel 0, gpio gbw 1 55 will write the value 55 output channel 1.