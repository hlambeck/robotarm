#!/bin/bash

if [ $UID != 0 ]; then
	sudo su -s "$0"
	exit
else
	echo 'Starting NodeJS Server...'
	node /var/www/html/app.js &
	echo 'Now online.'
fi
