I2C: SN3218 – LED controller
WiringPi supports an extension module for the SN3218 I2C based LED controller. This little chip can control up to 18 individual LEDs (or 6 RGB LEDs, or any combination in-between) and has an on-board PWM generator to allow for 256 light levels per LED.

wiringPi treats the SN3218 as an 18-pin analog output device.

Include
#include <wiringPi.h>
#include <sn3218.h>
Initialise
sn3218Setup (int pinBase) ;
There is no I2C device address passed into the setup function – the SN3218 has a fixed I2C address of 0x54, so there’s no need to refer to it other than internally inside the driver. This also means that you can only connect one of these devices to a Raspberry Pi.

The pinBase can be any number you like above 64. The setup function allocates 18 consecutive pins for the device.

Use
In your program:

analogWrite (ledPin, value) ;
the ledPin is the pin number (0-17) plus the pinBase you used in the sn3218Setup() function. value is 0 to 255 with 0 being off, and 255 being full brightness.

Notes
You need to load the I2C kernel modules before you can use I2C devices. Use the gpio command: gpio load i2c
If this is the only I2C device on your Pi, then it will run at 400KHz, so try: gpio load i2c 400
Use the i2cdetect program to scan your I2C bus to make sure the Pi can see the SN3218 which will show up as 0x54.
If you have a Rev 1 Pi, then the i2cdetect command is: i2cdetect -q -y 0 if you have a Rev. 2 Pi, then use i2cdetect -q -y 1
The gpio command supports the i2cdetect command and automatically caters for board revision. Simply type: gpio i2cdq
The wiringPi SN3218 driver knows which revision Pi you have, so you know need to take any special precautions – your code will work on either a Revision 1 or 2 Pi.