# Pin Test

The **gpio** command can be driven be a simple bash script to do some simple testing of your Pi’s GPIO pins.

To facilitate this, the program ***pintest*** is supplied with the **gpio** untility.

To use, you first must make sure that nothing is connected to the Pi, then run the ***pintest*** program. ***Pintest*** is normally located in the gpio directory of the ***wiringPi*** installation – ie ~/wiringPi/gpio/pintest

***Pintest*** really only tests the input function of the Pi’s pins, however it seems that this is the area most people are concerned with. It relies on using the BCM2835’s internal Pull-up and Pull-down resistors to perform the test.

Note that after the program has been run, the Pi’s GPIO pins will be left in an input state with the ALT functions changed – this includes the serial port pins. The easiest way to restore the serial port (and SPI and I2C) is to reboot your Pi.

## Sample run

> gordon @ pi2: ./pintest
> PinTest
> =======
> 
> This is a simple utility to test the GPIO pins on your revision 1
> Raspberry Pi.
> 
> NOTE: All GPIO peripherals must be removed to perform this test. This
>   includes serial, I2C and SPI connections. You may get incorrect results
>   if something is connected and it interferes with the test.
> 
> This test can only test the input side of things. It uses the internal
> pull-up and pull-down resistors to simulate inputs. It does not test
> the output drivers.
> 
> You will need to reboot your Pi after this test if you wish to use the 
> serial port as it will be left in GPIO mode rather than serial mode.
> 
> Please make sure everything is removed and press the ENTER key to continue,
> or Control-C to abort... 
> 
>           The main 8 GPIO pins  0: 7:  OK
>                 The 5 SPI pins 10:14:  OK
>                The serial pins 15:16:  OK
>                   The I2C pins  8: 9:  OK

This was on a Revision 1 Raspberry Pi. The ***pintest*** program recognises the Pi’s hardware revision and will test the additional pins on the P5 connector if needed.

## Output from a Rev. 2 Raspberry Pi

>           The main 8 GPIO pins  0: 7:  OK
> The 4 pins on the P5 connector 17:20:  OK
>                 The 5 SPI pins 10:14:  OK
>                The serial pins 15:16:  OK
>                   The I2C pins  8: 9:  OK