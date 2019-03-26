---
title: Windows Subsystem for Linux
---
# Tips and tricks for Windows Subsystem for Linux (WSL)

These are some notes to self on issues that I've run into using WSL. Having Redis/Postgres/Git stuff on WSL and IDE/GUI tools on Windows 10.

### Problem: WSL doesn't start/ bash hangs

Disable automatic management of Virtual Memory/paging file size

    # As discussed on https://github.com/Microsoft/WSL/issues/849 by user imkimchi the steps for solving this issue are:

    1. Run windows + R
    2. type SystemPropertiesAdvanced
    3. click settings in performance group
    4. In advanced tab, click Change under Virtual Memory and deselect the automatically manage paging file size for all drives
    5. Select custom size and enter 800 for initial size, 1024 for maximum size.
    6. Apply changes and restart.

[https://superuser.com/questions/1275505/wsl-bash-doesnt-start](https://superuser.com/questions/1275505/wsl-bash-doesnt-start)


### Speed up builds significantly

By disabling Windows defender for WSL path. Maven/npm builds to run 5x faster if you exclude the WSL path from Windows defender: 

[https://medium.com/@leandrw/speeding-up-wsl-i-o-up-than-5x-fast-saving-a-lot-of-battery-life-cpu-usage-c3537dd03c74](https://medium.com/@leandrw/speeding-up-wsl-i-o-up-than-5x-fast-saving-a-lot-of-battery-life-cpu-usage-c3537dd03c74)

### Postgres on WSL - pgAdmin on Win10 / connection issues

Connect using 127.0.0.1 instead of localhost. 
Otherwise query tool doesn't start on pgAdmin.

### Postgres on WSL startup issues

Getting messages like these on startup:

    [1332] PANIC:  could not flush dirty data: Function not implemented
    [1331] LOG:  startup process (PID 1332) was terminated by signal 6: Aborted
    [1331] LOG:  aborting startup due to startup process failure
    [1331] LOG:  database system is shut down

Googling around suggests that these help (/etc/postgresql/10/main/postgresql.conf): 

    # https://www.postgresql.org/message-id/flat/CA%2BmCpegfOUph2U4ZADtQT16dfbkjjYNJL1bSTWErsazaFjQW9A%40mail.gmail.com
    
    fsync=off

    bgwriter_flush_after = 0                # measured in pages, 0 disables
    backend_flush_after = 0                # measured in pages, 0 disables
    wal_writer_flush_after = 0              # measured in pages, 0 disables
    checkpoint_flush_after = 0              # measured in pages, 0 disables

Note! Having automatic management of Virtual Memory/paging file size (tip 1) might also result in postgresql not starting saying the data files are corrupted. 

Note 2! I only needed to add these after the 2019 spring update of Windows 10. Also needed to disabling auto pagefile sizing for things to start working again properly.

### "No installed distributions found"

LxssManager service handles the Linux subsystem on Windows. After larger Windows updates it's quite usual to see "No installed distributions found" or similar message when starting the WSL bash. Workarounds are to reboot the machine or try restarting the LxssManager service.
