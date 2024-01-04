# About

***WiringPi*** is a ***PIN*** based GPIO access library written in C for the BCM2835, BCM2836 and BCM2837 SoC devices used in all **Raspberry Pi**. versions. The source code is not publicly available but may be made available to those who wish commercial support.

It is designed for use with C and RTB (BASIC) ON THE RASPBERRY PI ONLY.

It’s designed to be familiar to people who have used the Arduino “wiring” system1Â and is intended for use by experienced C/C++ programmers. It is not a newbie learning tool.

[Please read the news page.](Blog.md)

***WiringPi*** is developed directly on a Raspberry Pi running 32-bit Raspbian.

I do not support any other platform, cross compiling or operating systems. It has been ported to other platforms, other operating systems and some are cross compiling, however I do not maintain those systems. If you are trying to use ***wiringPi*** on a platform other than the Raspberry Pi with Raspbian then you must contact the person who did the port and not me.

The original [Raspberry Pi](https://www.raspberrypi.org/) Model A and B version B1 was a $35 single board computer with a 26-pin General Purpose Input/Output (GPIO) connector and this carries a set of signals and buses. There are 8 general purpose digital I/O pins â€“ these can be programmed as either digital outputs or inputs. Two of these pins (on 40-pin Pi’s, just one on 26-pin Pi’s) can be designated for hardware PWM output too. Additionally there is a 2-wire I2C interface and a 4-wire SPI interface (with a 2nd select line, making it 5 pins in total) and the serial UART with a further 2 pins.

Over the years there have been some updates:

- The original model B with the 26-pin GPIO connector.
- The model B, Revision 1.1 Raspberry Pi has an additional 4 GPIO lines on a separate connector which you have to solder onto the board.
- The model A which is essentially the same as the model B v1.1 but without the USB hub and ethernet connector.
- The model A+ and B+ Raspberry Pi’s represents 2 years of research, development and testing and now features a single 40-pin GPIO connector with 28 usable GPIO pins and 4 USB sockets. (No USB or Ethernet on the A+)
- The model B v2 features a quad-core Arm A7 processor with 1GB of RAM. Same GPIO.
- The model Zero is a souped-up (1GHz) cut down Pi A+. 40-pin GPIO connector and very little else. $5 price tag.
- The model B v3 features a quad-core Arm A8 processor (64-bits) with the same RAM and GPIO as the model 2, however it also features on-board Wi-Fi and Bluetooth. Still the same $35 price tag.
- The model Zero-W is adds on-board Wi-Fi, Bluetooth and the Pi camera connector to the existing model Zero board.

The I2C, SPI and UART interfaces can also be used as general purpose I/O pins when not being used in their bus modes, giving a grand total of 8 + 2 + 5 + 2 = 17 I/O pins on the **P1** connector (plus 4 more on the **P5** connector on a Revision 2 Pi) and 28 I/O pins on the B+ and version 2 and 3 boards (Although 2 are reserved for the HAT I2C interface, but can be used as normal GPIOs if not using a HAT board)

***WiringPi*** includes a command-line utility **gpio** which can be used to program and setup the GPIO pins. You can use this to read and write the pins and even use it to control them from shell scripts.

***WiringPi*** is extendable and modules are provided to extend ***wiringPi*** to use analog interface devices on the Gertboard, and to use the popular **MCP23x17/MCP23x08** (I2C 7 SPI) GPIO expansion chips, as well as module that will allow blocks of up to 4 **74×595** shift registers to be daisy-chained together for an additional 32-bits worth of output as a single unit. (You can have several blocks of 4 74x595s if needed) One of the extension modules allows you to use an ATmega (e.g. Arduino, or the Gertboard) as more GPIO expansion too – via the Pi’s serial port.

Additionally, you can easily write your own extension modules to integrate your own peripheral devices with ***wiringPi*** as required.

***WiringPi*** supports analog reading and writing, and while there is no native analog hardware on a Pi by default, modules are provided to support the Gertboards analog chips and other A/D and D/A devices can be implemented relatively easily.

## NOTE:

There is a version of ***wiringPi*** hosted on Github. Do not use this version of ***wiringPi***. It only exists to facilitate building the Ruby and Python wrappers which have been written by someone else. You may also find other versions of wiringPi on github – these have all been forked and changed to support different hardware platforms. If you use these versions then you MUST contact the person who made that form for support. Requests for support from me will be ignored.

## The wiringPi devLib

The ***devLib*** is a set of library routines implemented using ***wiringPi*** to give you easy access to some popular peripherals. Devices supported include character LCD displays (based on the Hitachi HD44780U chips), and graphical ones – e.g. the common 128×64 pixel displays with the generic 12864H driver chip. The DS1302 RTC clock chip, sensors based on the Maxdetect chips (e.g. RHT003) the Gertboard and PiFace interface boards and so on.

## WiringPi Resources

- [Raspberry Pi GPIO Pin numbering](./Pins/Special%20Pin%20Functions.md)
- [Download and install](./Download%20and%20Install.md)
- [Examples and How-To’s]()
- WiringPi function referrence manual/documentation
- GPIO Extensions
- DevLib
- The GPIO Utility

## PiFace

***WiringPi*** did once supportthe [PiFace board]() but support for that is now very much out of date.

## Gertboard

***WiringPi*** fully supports the Gertboard but support for that is now very much out of date.

---

1 Arduino is really two things; one is a hardware platform, the other software, and part of the software is a package called **Wiring**. Wiring is the core of the input and output for the Arduino, so I thought it would be good to replicate that functionality (or a good usable subset with Raspberry Pi extensions) on the Raspberry Pi.