I2C: PCF8591 (Analog)
WiringPi supports an extension module for the PCF8591 Analog IO expander IC.

The Raspberry Pi has one I2C bus and the PCF8591 has a 3-bit address select port, so in-theory you can connect up 8 PCF8591’s to your Pi.

The PCF8591 has a 4-channel, 8-bit analog input port and a single channel analog output port.

It is the device used on the Quick2Wire analog board.

Include
#include <wiringPi.h>
#include <pcf8591.h>
Initialise
pcf8591Setup (int pinBase, int i2cAddress) ;
The pinBase can be any number you like above 64 and the i2cAddress is the address of the device in the I2C bus – 0x48  is the default but they can change if you have multiple devices. Use the i2cdetect command (gpio i2cd) to probe your I2C bus to work out the right address to use.

You can call pcf8591Setup() as many times as needed for each PCF8791 you have in the system – just give it a different pin base and I2C bus address.

You don’t need to specify the number of pins here – the PCF8791 has 4 pins – the analog output uses base pin number 0 – the same as analog input 0.

Calculations
The board normally uses the 3.3v supply as the reference voltage, so:

The input voltage is determined with:

vIn = value * 3.3 / 255

and the output voltage is:

vOut = value / 255 * 3.3

or to find the value for a given voltage:

value = vOut / 3.3 * 255

Notes
You need to load the I2C kernel modules before you can use I2C devices. Use the gpio command: gpio load i2c
Use the i2cdetect program to scan your I2C bus to make sure the Pi can see your devices. PCF8591’s will normally show up as 0x48, but when using multiple ones, they’ll each have a unique address (or should have!)
If you have a Rev 1 Pi, then the i2cdetect command is: i2cdetect -y 0 if you have a Rev. 2 Pi, then use i2cdetect -y 1
The gpio command supports the i2cdetect command and automatically caters for board revision. Simply type: gpio i2cd
The wiringPi PCF8591 driver knows which revision Pi you have, so you know need to take any special precautions – your code will work on either a Revision 1 or 2 Pi.
The PCF8591 does not have programmable internal pull-up resistors, but the pins when in input mode effectively have an internal pull-up active.
The analog output pin is normally in a high impedance mode until the very first read or write to the device. It may be prudent to perform an initial analog write to the device to set it to the initial value you need.