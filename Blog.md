# Blog

## wiringPi updated to 2.52 for the Raspberry Pi 4B

> Posted on June 24, 2019 by Gordon

Just a quick post to let you know that you’ll need a new wiringPi for the Raspberry Pi 4B.

To upgrade:

```shell
cd /tmp
wget https://project-downloads.drogon.net/wiringpi-latest.deb
sudo dpkg -i wiringpi-latest.deb
```

Check with:

```shell
gpio -v
```

and make sure it’s version 2.52. I’ll push the updated sources shortly.

It will hopefully be part of the official release soon, but for now this will do.

-Gordon

Posted in General Update, wiringPi Relase
wiringPi updated to 2.46 for the new Pi v3+
Posted on March 14, 2018 by Gordon
So it’s national Pi day – 14th of March, 2018 – or if you’re in the US, that’s 3/14 …

And in celebration, there is a new Raspberry Pi – the Pi v3+.

It’s more or less the same as the existing Raspberry Pi v3 with:

Gigabit Ethernet interface (still on the existing USB 2 interface though, so max. theoretical speed of 420Mb/sec – my quick tests have indicated a good 320Mb/sec throughput – that’s still THREE times faster than the existing Pi Ethernet interfaces.
802.11ac in addition to the existing 802.11bg Wi-Fi. So faster Wi-Fi too.
A heat spreader on the CPU – should help with those thermal throttling situations and make the addition of a heatsink easier for those who need it.
Improved clocking – little tweaks (as I understand it – see the foundation website for the full detals!) and the ARM now running at 1.4GHz
From a wiringPi point of view – version 2.44 will work just fine on this board, however the gpio command is somewhat fussy about knowing the exact board revision to make the readall command work, so I’ve done some updates there.

There are some other minor updates including fixing the gpio manual page!

If you want an updated .deb package, then

cd /tmp
wget https://unicorn.drogon.net/wiringpi-2.46-1.deb
sudo dpkg -i wiringpi-2.46-1.deb
It’s md5sum is: 5c540b1426381bc598ea48b55f39c091 if you ever bother checking these things.

Posted in General Update, wiringPi Relase
wiringPi updated to 2.36
Posted on December 15, 2016 by Gordon
wiringPi is now at version 2.36.

An update was required to support kernels 4.8 onwards. There are also a few additional fixed here – some new sensors added in to supports the Raspberry Pi foundation weather station and some security fixes to the gpio program.

Fixed the spurious first interrupt issue with the “ISR” code too and added in more baud rates (even if the Pi won’t support them)

Posted in General Update, wiringPi Relase | Tagged bcm2835, C, gpio, raspberry pi, wiringPi
wiringPi update to 2.29
Posted on September 30, 2015 by Gordon
Two main things in this release are an updates max31855 thermocouple driver and the ability to use the new /dev/gpiomem interface which can be used from a user-level program without the need to be root or use sudo.

To use the new /dev/gpiomem interface you need to be running a 4.1.7 or greater kernel with the device tree enabled and have the bcm2835_gpiomem kernel module loaded. This should load automatically. However in addition to that, you’ll also need some udev rules that do not appear to be present in the current releases. My suggestion for now is to copy this into /etc/udev/rules.d/20-gpio.rules:

SUBSYSTEM=="bcm2835-gpiomem", KERNEL=="gpiomem", GROUP="gpio", MODE="0660"
SUBSYSTEM=="gpio", KERNEL=="gpiochip*", ACTION=="add", PROGRAM="/bin/sh -c 'chown root:gpio /sys/class/gpio/export /sys/class/gpio/unexport ; chmod 220 /sys/class/gpio/export /sys/class/gpio/unexport'"
SUBSYSTEM=="gpio", KERNEL=="gpio*", ACTION=="add", PROGRAM="/bin/sh -c 'chown root:gpio /sys%p/active_low /sys%p/direction /sys%p/edge /sys%p/value ; chmod 660 /sys%p/active_low /sys%p/direction /sys%p/edge /sys%p/value'"
then reboot (easiest), or restart udev then remove and modprobe the kernel module.

Even after doing that, access to /dev/gpiomem is not enabled by default in wiringPi and the reason for this is that using it to try to access the PWM or clock hardware registers will cause your Pi to crash requiring a power cycle.

To enable it in your programs you need to set the environment variable WIRINGPI_GPIOMEM. You can do this by typing:

export WIRINGPI_GPIOMEM=1
at the bash prompt, or if you’re using csh/tcsh, etc. then

setenv WIRINGPI_GPIOMEM 1
If you try to use the PWM or clock devices via the /dev/gpiomem interface then the calls will be ignored.

Update wiringPi by the usual way:

cd ~/wiringPi
git pull
./build
however a .deb package will be available soon.

Posted in wiringPi Relase | Tagged gpio, update, wiringPi
wiringPi updated for the new Pi v2
Posted on February 2, 2015 by Gordon
The Pi 2 has the same GPIO interface, however presumably due to the 1GB of RAM the GPIO base location has changed.

Fetch the latest wiring Pi – version 2.24 – and you should be fine on all versions of the Raspberry Pi.

Start here: http://wiringpi.com/download-and-install/

Other updates include a new SPI initialiser (lets you choose SPI mode), and some general tidying up. Look for a new way to dynamically add peripherals into a running C/C++ program too – documentation for this will follow, but if you’re keen, then look at the gpio command and how it handles the -x flag.

Update to this on the 3rd Feb:
The Pi v2 I was sent had an SD card with older firmware in it – the result was that the Hardware and Revision fields in /proc/cpuinfo were incorrect – and as these were what I used to detect the Pi type and version, then it worked for me, but not for everyone else )-:

I’ve implemented a quick fix for now, but the foundation has actually encoded a lot more information into the Revision field – which I have the details for, but not yet coded up. Watch this space, as they say…

Posted in General Update, wiringPi Relase | Tagged bcm2325, bcm2336, gpio, pi2, piv2, rasoberry pi, wiringPi
wiringPi and the Raspberry Pi Compute board
Posted on June 24, 2014 by Gordon
To make sure wiringPi was going to work OK on the new Raspberry Pi Compute Module and IO test board, I went out and bought myself one…

Note to self: DO NOT trust anything on the RS website ever again and DO NOT order from RS unless stupidly desperate. Back order they say – oh, great, so I order one 2 weeks ago – nothing. Then the date slipped – then Farnell had it IN STOCK for NEXT DAY delivery…. Get a grip, RS. Anyone want to buy a Pi compute module with IO board? Make me an offer… (When I get it, that is!!!)

And oh, Farnell, you’re not perfect either – you included 2 A to B USB cables rather than A to µB, doh!

3rd June: Update to the above. Farnell are going to send replacement USB cable and RS have now slipped their delivery date to the 1st of October, (I’m guessing due to the issue with the camera boards) however they were very helpful on the phone and let me cancel it.

So the Compute Module is a little SO-DIMM sized board with the Broadcom SoC, 512MB of RAM and 4GB of flash and … well, that’s it. All that and a big edge connector, so to make life easy for people developing for it, the boffins at Pi HQ also designed the Compute Module IO board as a reference/testing board. They’re being sold as a pair right now, but I’m sure that in the very near future you’ll be able to buy just the compute module when you’ve designed your own IO board based of the reference board.

Here it is:

cm-devkit-boardsThat’s the photo “borrowed” off the Raspberry Pi site (hope you don’t mind, guys)

The good news is that wiringPi will work on it without any issues at all.

However, I’ve taken the liberty to make a few changes to wiringPi to make it work better with the Compute Module and other, older Pi’s.

The first change is that the wiringPi pin numbering scheme (Or the Pi’s physical P1 pin numbers numbers) doesn’t make any sense on the Compute Module, so if you call wiringPiSetup() or wiringPiSetupPhys() it will be just the same as calling wiringPiSetupGpio() and all pin numbers are then the native BCM_GPIO pin numbers.

Note that this change is only applicable to the Compute Module – wiringPi on Rev 1, 2/Model A, B Pi’s is not affected by this.

Another change has been to the gpio program – mostly in the readall command – it now understand the compute Module IO pins and produces an output like:

+-----+------+-------+ +-----+------+-------+
| Pin | Mode | Value | | Pin | Mode | Value |
+-----+------+-------+ +-----+------+-------+
|  0  | IN   | High  | |  28 | IN   | Low   |
|  1  | IN   | High  | |  29 | IN   | Low   |
|  2  | IN   | High  | |  30 | IN   | Low   |
|  3  | IN   | High  | |  31 | IN   | Low   |
|  4  | IN   | High  | |  32 | IN   | Low   |
|  5  | IN   | High  | |  33 | IN   | Low   |
|  6  | IN   | High  | |  34 | IN   | High  |
|  7  | IN   | High  | |  35 | IN   | High  |
|  8  | IN   | High  | |  36 | IN   | High  |
|  9  | IN   | Low   | |  37 | IN   | Low   |
| 10  | IN   | Low   | |  38 | IN   | Low   |
| 11  | IN   | Low   | |  39 | IN   | Low   |
| 12  | IN   | Low   | |  40 | IN   | Low   |
| 13  | IN   | Low   | |  41 | IN   | Low   |
| 14  | ALT0 | High  | |  42 | IN   | Low   |
| 15  | ALT0 | High  | |  43 | IN   | Low   |
| 16  | IN   | Low   | |  44 | IN   | Low   |
| 17  | IN   | Low   | |  45 | IN   | Low   |
| 18  | IN   | Low   | |  46 | IN   | High  |
| 19  | IN   | Low   | |  47 | OUT  | Low   |
| 20  | IN   | Low   | |  48 | ALT3 | Low   |
| 21  | IN   | Low   | |  49 | ALT3 | High  |
| 22  | IN   | Low   | |  50 | ALT3 | High  |
| 23  | IN   | Low   | |  51 | ALT3 | High  |
| 24  | IN   | Low   | |  52 | IN   | High  |
| 25  | IN   | Low   | |  53 | IN   | High  |
| 26  | IN   | Low   | |  54 | IN   | Low   |
| 27  | IN   | Low   | |  55 | IN   | Low   |
+-----+------+-------+ +-----+------+-------+
The other change to the gpio command is better board identification:

Pi model B, Rev 1:

Raspberry Pi Details:
 Type: Model B, Revision: 1, Memory: 256MB, Maker: China
(does anyone know the name of the factory that made the first batches?

Pi Model B, Rev 2 and Red:

Raspberry Pi Details:
 Type: Model B, Revision: 2, Memory: 512MB, Maker: Egoman
Compute module:

Raspberry Pi Details:
 Type: Compute Module, Revision: 1.1, Memory: 512MB, Maker: Sony
This all from the gpio -v command and relies on information out of the /proc/cpuinfo pseudo file, so if that changes then it may be wrong until I find out about it…

There are other changes in wiringPi too – not related to the compute module and I’ll write more about these later, but briefly you can now set a pin to softPwm mode and softTone mode using the pinMode () function call, and (more importantly) you can change a pin out of one of these modes if you need to and it cancels the background thread that was managing them.

The latest version of wiringPi is now 2.15. If you already have it installed, then

cd ~/wiringPi
git pull
./build
will get you going, if installing from scratch:

cd
git clone git://git.drogon.net/wiringPi
cd wiringPi
./build
will fetch and install it for you.

cm-test1This is my test-bed. I connected up 46 LEDs (There are 48 GPIO pins on the BCM2835, but only 46 are brought out on the IO board – 46 isn’t used and 47 is the new ACT LED on the IO board). The IO board is being powered via the main USB socket which is coming off a powered hub which also has a keyboard and Wi-Fi dongle connected to it.

Posted in General Update, wiringPi Relase | Tagged bcm2835, compute module, gpio, io board, raspberry pi, wiringPi
PiGlow added to the devLib
Posted on July 24, 2013 by Gordon
Quick update to say that I’ve added in the PiGlow board from Pimornoni into the wiringPi devLib – and to support is is a generic driver for the SN3218 LED driver chip.

PiGlow devLib
SN3218 driver
 

Posted in General Update
WiringPi v2 (point 03) is released!
Posted on May 13, 2013 by Gordon
After some months of testing and time away due to family issues, a short holiday and what-not, wiringPi v2 has been pushed to the GIT repository and is now released!

Changes: 100’s. There is now a completely re-written internal structure that allows for analogRead() and analogWrite() functions (hardware permitting – e.g. on the Gertboard and other A/D converters). There is a mechanism for adding new GPIO hardware – e.g. MCP23x17 (both I2C & SPI variants) and much much more!

As usual, feedback is welcome – my plan is to run a forum here shortly, but for now I’ll allow comments on this post, or drop me email.

Posted in General Update, wiringPi Relase | Tagged bcm2835, C, gpio, library, raspberry pi, wiringPi
Welcome
Posted on March 15, 2013 by Gordon
A “first post” just to kick things off.

I’m going to put all wiringPi specific updates and news here from now own, as well as start a forum – all I need is a little more time to get things started!

Work in progress!

This site is  still in development, but comments in email are welcome about it.