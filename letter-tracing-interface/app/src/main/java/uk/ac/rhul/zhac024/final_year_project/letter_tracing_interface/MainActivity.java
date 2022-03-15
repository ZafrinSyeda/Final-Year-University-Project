package uk.ac.rhul.zhac024.final_year_project.letter_tracing_interface;

import android.content.Intent;
import android.media.MediaPlayer;
import android.view.View;
import android.os.Bundle;

import com.google.android.material.floatingactionbutton.FloatingActionButton;

public class MainActivity extends BaseActivity implements View.OnClickListener {

    /**
     * Deals with any click events on the title screen
     * @param view the title screen
     */
    @Override
    // all UI elements are views - onClick not limited for buttons
    public void onClick(View view) {
        if (view.getId() == R.id.startButton) {
            //plays sound on click
            MediaPlayer xylophoneSound = MediaPlayer.create(this, R.raw.xylophone_sweep);
            xylophoneSound.start();
            // starts a new activity to show the letter selection menu
            openLetterSelection();
        }

    }

    /**
     * Starts a new activity to display the letter selection menu view
     */
    public void openLetterSelection() {
        Intent intent = new Intent(this, LetterSelectionMenu.class);
        startActivity(intent);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        FloatingActionButton btnStart = findViewById(R.id.startButton);
        // sets on click listener and passes the class
        btnStart.setOnClickListener(this);
        // plays a sound when the app loads up on screen for the first time
        MediaPlayer titleSound = MediaPlayer.create(this, R.raw.lets_learn_letters);
        titleSound.start();
    }
}