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

### Git (commandline)

    git config --global http.proxy http://my.proxy.org:8888
    git config --global https.proxy https://my.proxy.org:8888

### Linux/Cygwin bash (commandline/.bash_profile)

    export http_proxy=http://my.proxy.org:8888/
    export https_proxy=http://my.proxy.org:8888/ 

### Windows cmd

    set http_proxy=http://my.proxy.org:8888
    set https_proxy=http://my.proxy.org:8888

### Bower (Add keys to '.bowerrc' JSON file)

    {
        ...
     "proxy": "http://my.proxy.org:8888",
     "https-proxy": "https://my.proxy.org:8888"
        ...
    }
