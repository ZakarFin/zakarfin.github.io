---
title: My adventures with Raspberry Pi 2
---
# My adventures with Raspberry Pi 2

## To show raspberry pi in OSX finder

    sudo apt-get install netatalk

## Getting a specific version of node.js for Raspberry pi 

In my case I needed 0.10.x for playing around with [tessel](http://tessel.io). This takes a while since it compiles from source:

    wget http://nodejs.org/dist/v0.10.38/node-v0.10.38.tar.gz
    tar -xzf node-v0.10.38.tar.gz
    cd node-v0.10.38
    ./configure
    make
    sudo make install

More info: http://elinux.org/Node.js_on_RPi

## Other tessel specific stuff

http://start.tessel.io/install advices to install tessel as global lib. This didn't work for me so
instead I installed it as a local package and linked the tessel to /usr/local/bin/tessel:

    cd /usr/local/bin/
    sudo ln -s /home/pi/tessel/node_modules/.bin/tessel

### Allowing tessel access to usb-ports. 

After the tessel install, running for example tessel list resulted in an error:

    pi@raspberrypi ~ $ tessel list
    Please run `sudo tessel install-drivers` to fix device permissions.
    (Error: could not open USB device.)
    * undefined

The install-drivers command didn't fix the issue for me so I allowed full access to usb-ports for everyone:
    
    sudo chmod -R 777 /dev/bus/usb/001/

Better way would have been to just allow some group to access them and add my user to that group.

This is reset when ever tessel is unplugged. 

Next try:

    sudo nano /etc/udev/rules.d/85-tessel.rules

This was an existing file, propably from install-drivers command. I added ', GROUP="tessel" to it:

    ATTRS{idVendor}=="1d50", ATTRS{idProduct}=="6097", ENV{ID_MM_DEVICE_IGNORE}="1", MODE="0666", GROUP="tessel"

After which ran these to create the group and add user "pi" to it:

    groupadd tessel
    sudo usermod -aG tessel pi
    groups pi

This didn't seem to help so forcing it:

    ATTRS{idVendor}=="1d50", ATTRS{idProduct}=="6097", ENV{ID_MM_DEVICE_IGNORE}="1", MODE="0777", GROUP="tessel"
