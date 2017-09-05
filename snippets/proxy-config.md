---
title: Proxy settings
---
# Proxy settings for different apps

To configure a proxy with host 'my.proxy.org' and port 8888. Some configs also feature not using proxy for myorganization.org and *.mycompany.com in some of these)

### Java (commandline):

    java -Dhttp.proxyHost=my.proxy.org -Dhttp.proxyPort=8888 -Dhttp.nonProxyHosts="*.mycompany.com|myorganization.org" -Dhttps.proxyHost=my.proxy.org -Dhttps.proxyPort=8888 -Dhttps.nonProxyHosts="*.mycompany.com|myorganization.org" [... -jar my.jar]

### Maven (conf/settings.xml):

    <settings ...>
      <proxies>
          <proxy>
              <id>nls-http</id>
              <active>true</active>
              <protocol>http</protocol>
              <host>my.proxy.org</host>
              <port>8888</port>
              <nonProxyHosts>*.mycompany.com|myorganization.org</nonProxyHosts>
          </proxy>
          <proxy>
              <id>nls-https</id>
              <active>true</active>
              <protocol>https</protocol>
              <host>my.proxy.org</host>
              <port>8888</port>
              <nonProxyHosts>*.mycompany.com|myorganization.org</nonProxyHosts>
          </proxy>
      </proxies>

    </settings>

### Node (commandline)

    npm config set proxy http://my.proxy.org:8888
    npm config set https-proxy https://my.proxy.org:8888

Some node-modules install using git, so you might want to run the git configs as well

### Git (commandline)

    git config --global http.proxy http://my.proxy.org:8888
    git config --global https.proxy https://my.proxy.org:8888

If SSH access is restricted, you might want to try these out (also helps with node-modules install):

    git config --global url."https://".insteadOf git://
    git config --global url."https://github.com/".insteadOf git@github.com

### Linux/Cygwin bash (commandline/.bash_profile)

    export http_proxy=http://my.proxy.org:8888/
    export https_proxy=https://my.proxy.org:8888/

### Windows cmd

    set http_proxy=http://my.proxy.org:8888
    set https_proxy=https://my.proxy.org:8888

### wget

HTTP:

    wget -e use_proxy=yes -e http_proxy=my.proxy.org:8888 [file to download]

HTTPS:

    wget -e use_proxy=yes -e https_proxy=my.proxy.org:8888 [file to download]

### Bower (Add keys to '.bowerrc' JSON file)

    {
        ...
     "proxy": "http://my.proxy.org:8888",
     "https-proxy": "https://my.proxy.org:8888"
        ...
    }

### Atom.io editor

Run on commandline:

    apm config set proxy "http://my.proxy.org:8888"
    apm config set https_proxy "https://my.proxy.org:8888"
