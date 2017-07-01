# Simple demo of of the PCA9685 PWM servo/LED controller library.
# This will move channel 0 from min to max position repeatedly.
# Author: Tony DiCola
# License: Public Domain
from __future__ import division
import Adafruit_PCA9685
import sys
index = sys.argv[1]
value = sys.argv[2]

# Initialise the PCA9685 using the default address (0x40).
pwm = Adafruit_PCA9685.PCA9685()

# Set frequency to 60hz, good for servos.
pwm.set_pwm_freq(60)

# Configure min and max servo pulse lengths
#   Motor 0 (gripper)
M0_min = 300
M0_max = 550

#   Motor 1 (forearm)
M1_min = 150
M1_max = 500

#   Motor 2 (upperarm)
M2_min = 200
M2_max = 500

#   Motor 3 (foot)
M3_min = 105
M3_max = 500





#print('Moving servo on channel ' + index + ' to value ' + value)
pwm.set_pwm(int(index), 0, int(value))

    #while True:
    #    # Move servo on channel O between extremes.
    #    print('min')
    #    pwm.set_pwm(0, 0, servo_min)
    #
    #    #set_servo_pulse(0, 1.5)
    #
    #    time.sleep(5)
    #    print('max')
    #    pwm.set_pwm(0, 0, servo_max)
    #
    #    time.sleep(1)
