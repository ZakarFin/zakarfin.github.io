---
title: My adventures with Raspberry Pi 3
---
# My adventures with Raspberry Pi 3


## SD-card

Found a nice page with instructions for formatting the SD-card on OSX: <http://michaelcrump.net/the-magical-command-to-get-sdcard-formatted-for-fat32/>

This is the magical command:

```
sudo diskutil eraseDisk FAT32 RASPBIAN MBRFormat /dev/disk2
```

Where RASPBIAN is the name for the card (you can use any)
and /dev/disk2 is the address for the disk. You can findout the address by running

```
diskutil list
```
You will get something like this:

    /dev/disk0 (internal, physical):
       #:                       TYPE NAME                    SIZE       IDENTIFIER
       0:      GUID_partition_scheme                        *251.0 GB   disk0
       1:                        EFI EFI                     209.7 MB   disk0s1
       2:          Apple_CoreStorage Macintosh HD            250.1 GB   disk0s2
       3:                 Apple_Boot Recovery HD             650.0 MB   disk0s3
    /dev/disk1 (internal, virtual):
       #:                       TYPE NAME                    SIZE       IDENTIFIER
       0:                  Apple_HFS Macintosh HD           +249.8 GB   disk1
                                     Logical Volume on disk0s2
                                     09FCDB87-CFF3-479B-8AE7-CAC0ABA07FF9
                                     Unlocked Encrypted
    /dev/disk2 (internal, physical):
       #:                       TYPE NAME                    SIZE       IDENTIFIER
       0:     FDisk_partition_scheme                        *30.9 GB    disk2
       1:             Windows_FAT_32 NO NAME                 30.9 GB    disk2s1

## Built-in Wi-fi

The default setting for the built-in wi-fi is to have power save setting enabled. This is something you want to disable if you want to connect to the Raspberry using ssh. To disable power-save run:

```
iw wlan0 set power_save off
```

## Playing around with built-in bluetooth

<http://www.jaredwolff.com/blog/get-started-with-bluetooth-low-energy/>

## Installing a more recent node.js version

Just followed the official instructions at https://nodejs.org/en/download/package-manager/

```
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## Flic.io

Getting the code/binaries:
```
cd /opt
git clone https://github.com/50ButtonsEach/fliclib-linux-hci.git
```

Systemd service script for Flic (/etc/systemd/system/flicd.service):
https://github.com/50ButtonsEach/fliclib-linux-hci/issues/15

```
[Unit]
Description=flicd Service
After=bluetooth.service
Requires=bluetooth.service

[Service]
TimeoutStartSec=0
ExecStart=/opt/fliclib-linux-hci/bin/armv6l/flicd -f /opt/fliclib-linux-hci/flic.sqlite3 -s 0.0.0.0  -l /var/log/flicd.log -h hci0 -w
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
```

Start service on boot:
```
sudo systemctl enable flicd
```
