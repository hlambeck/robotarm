# Robotarm Controller

Used to controll the robot arm onm a nodeJS server

## Getting Started
Before this will run you have to install the raspberry itself and change some access levels + install some plugins

### Prerequisites
First what you want to do is update to the latest version of linux.

```
sudo apt-get upgrade
sudo apt-get update
```

### Installing

A step by step series of what to install

#### Installing python

```
sudo apt-get install python-smbus
```
#### Installing i2c-Tools
```
sudo apt-get install i2c-tools
```

#### Installing npm
```
sudo apt-get install npm
```

#### Installing Git, build essential and python-dev
```
sudo apt-get install git build-essential python-dev
```
#### Installing the drivers for the Adafruit PCA9685
```
cd ~
git clone https://github.com/adafruit/Adafruit_Python_PCA9685.git
cd Adafruit_Python_PCA9685
sudo python setup.py install
```

#### Check if the raspberry can find the Adafruit board

```
sudo i2cdetect -y 0
sudo i2cdetect -y 0
```

One of these 2 will show some numbers in a grid. of it is all empty do the next step. if not skip the next step.

#### Remove the i2c-tools from the blacklist
```
sudo nano /etc/modprobe.b/raspi-blacklist.conf
```
if you see the line 'blacklist i2c-bcm2708' put a # in front of it.

### Getting Apache (webserver)
#### install Apache
```
sudo apt-get install apache2 -y
```
#### update access levels
```
sudo chmod 777 /var/www/html
```

### Setting up the Node server
#### preparations

##### Installing Node
```
cd /var/www/html/
sudo apt-get install nodejs
```
remove the old index file
```
sudo rm index.html
```

#### Installing the node server components
```
sudo npm init
sudo npm install express 
sudo npm install debug
sudo npm install serial
sudo npm install socket.io
```
### Create the server code and client code
#### Getting the source code
```
sudo git clone https://github.com/hlambeck/robotarm/
```
#### update access levels
```
sudo chmod -R 777 /var/www/html
```


## Deployment

to automate the startup of the server type the following command
```
sudo update-rc.d apache2 defaults
```

#### Starting the script
You could always type 
```
sudo node /var/www/html/app.js &
```

or move a file so you can type '~/robot' to start the script
To do so just run the following command
```
sudo mv /var/www/html/robot ~
```

## Built With

* [Bootstrap](http://www.getbootstrap.com/) - The web framework used
* [Apache](https://www.apache.org/) - The webserver
* [Nodejs](https://nodejs.org/) - Used to combine the website and python


## Authors

* **Henk Lambeck** - *Initial work* - [hlambeck](https://github.com/hlambeck)
* **Tammo Lambeck** - *added the robot file* 

See also the list of [contributors](https://github.com/hlambeck/robotarm/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
