12 LEDs
The Raspberry Pi has 17 GPIO pins (plus 4 more on the Rev 2, but we can’t easily use these with the Gertboard). Some of these pins are dual-purpose. The only ones that are normally set to an alternative mode at start-up time is the serial pins – the Linux kernel uses these to send messages to. We won’t use these for now, but we will use some of the ones dedicated to the SPI interface.

The SPI interface is brought out on pins GP7, GP8, GP9, GP10 and GP11 on the Gertboard connector. We will use 4 of these SPI pins to connect up the last 4 LEDs then we can light up all 12 on the Gertboard.

Before you start, make sure the jumper bridge block jumpers are removed on the Gertboard – that’s the jumpers that go from the long row of pins to the shorter row that connects on-board peripherals. Also make sure that the SPI modules are not loaded – they’re not normally with Raspbian, but you may have loaded them, or changed the configuration files. Run this command:

lsmod | grep -i spi
If there is any output at all, then you probably have the SPI drivers loaded. Do this for now:

sudo rmmod spi_bcm2708 spidev
to remove them.

All the buffer Input/Output jumpers should be set for outputs – that’s the 12 jumpers positioned furthest away from the Raspberry Pi connector.

Wiring: Photos are hard to work out exactly what goes where, so I’ll resort to simply describing the layout in the table below:

J2	<- Jumper Wire ->	J3
GP17	<–>	B1
GP18	<–>	B2
GP21	<–>	B3
GP22	<–>	B4
GP23	<–>	B5
GP24	<–>	B6
GP25	<–>	B7
GP4	<–>	B8
GP7	<–>	B9
GP8	<–>	B10
GP9	<–>	B11
GP10	<–>	B12
Once that’s done, you’ll find a program called blink12.c in the examples directory, you can compile this the same way you compiled the others:

gcc -Wall -o blink12 blink12.c -lwiringPi
However, you can also use the supplied Makefile to compile it for you, and you may want to consider using Makefiles in your own projects:

make blink12
Run the program:

sudo ./blink12
And you’ll see a simple 12-LED sequencer.

Please do examine and change the program!

Summary
We can use the buffer jumpers to select input or output, but so-far we’ve only looked at outputs.
We can use some of the GPIO pins on the Pi that are dual-purpose for ordinary outputs instead of their stated use.
We can light the on-board LEDs!