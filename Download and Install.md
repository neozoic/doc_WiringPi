# Download and Install

## NOTE

***WiringPi*** is **PRE-INSTALLED** with standard Raspbian systems. Please DO NOT try to follow any installation instructions you may be given anywhere else. THIS PAGE is the definitive and proper way to do it.

Also note: ***WiringPi*** is developed and tested on a Raspberry Pi ONLY. It is for C and RTB BASIC programs on. If you are trying to install it on anything else, then good luck.

### To update or install on a Raspbian-Lite system:

```shell
sudo apt-get install wiringpi
```

is all you need.

### From source:

***WiringPi*** is maintained under GIT for ease of change tracking, however there is a Plan B if you’re unable to use GIT for whatever reasons (usually your firewall will be blocking you, so do check that first!)

***Note***: wiringPi is **NOT** hosted on Github. There are many forks that you may find there, but they are not the original version maintained by myself.

To view the wiringPi sources, then go to:

[https://git.drogon.net/](https://git.drogon.net/)

and select the wiringPi link.

#### To install…

First check that wiringPi is not already installed. In a terminal, run:

```shell
$ gpio -v
```

If you get something, then you have it already installed. The next step is to work out if it’s installed via a standard package or from source. If you installed it from source, then you know what you’re doing – carry on – but if it’s installed as a package, you will need to remove the package first. To do this:

```shell
$ sudo apt-get purge wiringpi
$ hash -r
```

Then carry on.

If you do not have GIT installed, then under any of the Debian releases (e.g. Raspbian), you can install it with:

```shell
$ sudo apt-get install git-core
```

If you get any errors here, make sure your Pi is up to date with the latest versions of Raspbian: (this is a good idea to do regularly, anyway)

```shell
$ sudo apt-get update
$ sudo apt-get upgrade
```

To obtain WiringPi using GIT:

```shell
$ cd
$ git clone git://git.drogon.net/wiringPi
```

If you have already used the clone operation for the first time, then

```shell
$ cd ~/wiringPi
$ git pull origin
```

Will fetch an updated version then you can re-run the build script below.

To build/install there is a new simplified script:

```shell
$ cd ~/wiringPi
$ ./build
```

The new build script will compile and install it all for you – it does use the sudo command at one point, so you may wish to inspect the script before running it.

---

Plan B
Click on this URL: (it should open in a new page)

[https://git.drogon.net/?p=wiringPi;a=summary](https://git.drogon.net/?p=wiringPi;a=summary)

Then look for the link marked **snapshot** at the right-hand side. You want to click on the top one.

This will download a tar.gz file with a name like wiringPi-98bcb20.tar.gz. Note that the numbers and letters after **wiringPi** (98bcb20 in this case) will probably be different – they’re a unique identifier for each release.

You then need to do this to install:

```shell
$ cd
$ tar xfz wiringPi-98bcb20.tar.gz
$ cd wiringPi-98bcb20
$ ./build
```

Note that the actual filename will be different – you will have to check the name and adjust accordingly.

---

## Test wiringPi’s installation

run the gpio command to check the installation:

```shell
$ gpio -v
$ gpio readall
```

That should give you some confidence that it’s working OK.

***WiringPi*** is released under the GNU Lesser Public License version 3.