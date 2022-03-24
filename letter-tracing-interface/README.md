

This is one of the interfaces designed for the final year HCI project. The idea behind the project is to be an Android app used by children aged 2-5 to learn how to write letters. 

In order to run this interface from the program, Android Studios needs to be installed, along with an emulator installed to run it, or alternatively by using an android device connected to the computer. Once this is connected, press the 'run' button on android studios. For more information on running the program, refer to Android's documentation: https://developer.android.com/studio/run/emulator 
Alternatively, make use of the apk, provided in the folder 'letter-tracing-apk' - instructions are given on the main README file 

Most images and gifs used are created by me though some images (i.e. the ones used on the buttons) are from free to use stock images. The sound effects used are free to use from freedsound.org, specifically: https://freesound.org/people/DANMITCH3LL/sounds/232009/ , https://freesound.org/people/kantouth/sounds/106727/ , https://freesound.org/people/Leszek_Szary/sounds/171671/ . The sounds, 'lets_learn_letters', 'learn_a', 'learn_b' were generated using the Text To Speech tool 15.ai (https://www.15.ai/) 

Asides from the framework provided by Android studios, Google's 'material design' framework was used for some components.

Known Bugs/ Issues 
- Trying to toggle sound when phone is in 'do not disturb' mode causes app to crash 
- Selecting pen and trying to drag on screen without lifting finger means the path will not be drawn 
- When drawing a path using an eraser, the path that clears pixels will remain even after drawing over it: selecting erase and tapping on screen again will clear the drawing path 
