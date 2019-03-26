---
title: Windows Subsystem for Linux
---
# Tips and tricks for Windows Subsystem for Linux (WSL)

These are some notes to self that I've run into using WSL

### WSL doesn't start/bash hangs

Disable automatic management of Virtual Memory/paging file size

https://superuser.com/questions/1275505/wsl-bash-doesnt-start

### Disable Windows defender for WSL path

Maven build to run 5x faster if you exclude the WSL path from Windows defender: 

https://medium.com/@leandrw/speeding-up-wsl-i-o-up-than-5x-fast-saving-a-lot-of-battery-life-cpu-usage-c3537dd03c74

### Postgres on WSL - pgAdmin on Win10

Connect using 127.0.0.1 instead of localhost. Otherwise query tool doesn't work on pgAdmin.

Note! Having automatic management of Virtual Memory/paging file size (tip 1) might also result in postgresql not starting, saying the data files are corrupted. Googling around suggests that these help (/etc/postgresql/10/main/postgresql.conf), but they did NOT in my case (disabling auto page sizing fixed the issue for me): 

    # https://www.postgresql.org/message-id/flat/CA%2BmCpegfOUph2U4ZADtQT16dfbkjjYNJL1bSTWErsazaFjQW9A%40mail.gmail.com
    fsync=off

    bgwriter_flush_after = 0                # measured in pages, 0 disables
    backend_flush_after = 0                # measured in pages, 0 disables
    wal_writer_flush_after = 0              # measured in pages, 0 disables
    checkpoint_flush_after = 0              # measured in pages, 0 disables
