package uk.ac.rhul.zhac024.final_year_project.letter_tracing_interface;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.media.MediaPlayer;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;

import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.google.android.material.floatingactionbutton.FloatingActionButton;

import java.util.Calendar;

public class MainActivity extends BaseActivity implements View.OnClickListener {



    private MediaPlayer xylophoneSound, titleSound;


    @Override
    // all UI elements are views - onClick not limited for buttons
    public void onClick(View view) {
        if (view.getId() == R.id.startButton) {
            //plays sound on click
            xylophoneSound = MediaPlayer.create(this, R.raw.xylophone_sweep);
            xylophoneSound.start();
            // starts a new activity to show the menu
            openLetterSelection();
        }

    }

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
        titleSound = MediaPlayer.create(this, R.raw.lets_learn_letters);
        titleSound.start();
    }
}