Buttons
The Gertboard has 3 buttons and if we want to use the buttons then (as odd as this may seem!) we need to leave the corresponding 3 buffer In/Out selector jumpers either removed or set to Output mode. To understand why, consult the manual, page 12.

However if we leave the output jumper on, then the LED will reflect the state of the button – but inverted. ie. when no button is pushed, the LED will be on, and when we push the button the LED will go off.

If we wish to use the 3 buffered pins for inputs from external sources, then we do have to move the jumpers from the output to input side (and remember to not push the buttons at the same time!)

To reliably read the buttons, we need to set the internal pull-up resistors in the Raspberry Pi, otherwise with the buttons are not pushed, the inputs will be floating and may read random values (This is the same that happens to the LEDs when nothing is connected to them – you see them randomly go on and off)

So with our Gertboard still wired up as before (12 outputs to all 12 LEDs), we can do the following from the command-line:

gpio mode 0 in
gpio mode 0 up
then to read the first button:

gpio read 0
This should read 1.

Now push the button, keep it pushed and run the read command again and it should read 0.

Also note that the LED goes out when you push the button. The LED actually reflects the state of the input pin which is the inverse of the button push. This is because the button connects the Pi’s input pin to the ground or 0v line when pushed and the internal resistor keeps it set to 1 when it’s not pushed. So from the Pi’s point of view, it appears to be the other way round, but we can easily work with this in software.

A simple test program here – the three buttons will turn 3 LEDs on or off.

Button test program
buttons.c is the first button test program. You’ll find this program in the Gertboard directory in the examples directory. The previous blink examples were in the main wiringPi examples directory as they could be used elsewhere, but the buttons (and others in this series) are now more Gertboard specific, so have their own directory.

As before, compile and run with:

cd Gertboard
gcc -Wall -o buttons buttons.c -lwiringPi
sudo ./buttons
or use the Makefile:

make buttons
sudo ./buttons
 When the program is running, you should see the first 3 LEDs on and the rest will be off. When you push the first button, the fourth LED will change state, similarly for the 2nd and 3rd buttons with the 5th and 6th LEDs respectively.

 The only real new part to this is the pullUpDnControl() function – that’s setting the internal resistors on the pins on the Pi to high so the switches work properly.

Summary
Buttons for Input – but on the Gertboard we leave the direction jumpers set to output!
The buttons read the opposite logic level to what you might think – ie. read 0 (low) when pushed and 1 (high) when no pushed.