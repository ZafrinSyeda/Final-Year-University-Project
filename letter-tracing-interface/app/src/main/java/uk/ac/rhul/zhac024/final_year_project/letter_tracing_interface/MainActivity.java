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

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    private AlertDialog.Builder dialogueBuilder;
    private AlertDialog dialogue;
    private EditText txtYear;
    private Button btnConfirmYear;
    private FloatingActionButton btnCloseValidation;

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

    // allows for the menu that appears with the settings icon
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.main_menu, menu);
        return true;
    }

    // item: the item that the user clicks on in the menu
    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        if (item.getItemId() == R.id.settings_menu ) {
            createNewVerificationDialog();
            return true;
        } else {
            return super.onOptionsItemSelected(item);
        }
    }

    // pop up dialogue for when the settings button is pressed
    public void createNewVerificationDialog() {
        dialogueBuilder = new AlertDialog.Builder(this);
        final View verificationPopupView = getLayoutInflater().inflate(R.layout.verification_popup,null);
        txtYear = verificationPopupView.findViewById(R.id.txtYear);
        btnConfirmYear = verificationPopupView.findViewById(R.id.btnConfirmYear);
        btnCloseValidation = verificationPopupView.findViewById(R.id.btnCloseValidation);

        dialogueBuilder.setView(verificationPopupView);
        dialogue = dialogueBuilder.create();
        dialogue.show();

        // button user clicks to confirm their year of birth
        btnConfirmYear.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                int inputYear = Integer.parseInt(txtYear.getText().toString());
                int currentYear = Calendar.getInstance().get(Calendar.YEAR);
                // the maximum valid age someone could be to be considered grown up
                int minYear = currentYear - 120;
                // considering if an older sibling, at least a teenager could want to adjust the settings
                int maxYear = currentYear - 13;
                if ((inputYear >= minYear) && (inputYear <= maxYear)) {
                    Toast.makeText(MainActivity.this, txtYear.getText(), Toast.LENGTH_SHORT).show();
                } else{
                    Toast.makeText(MainActivity.this, "invalid year", Toast.LENGTH_SHORT).show();
                }
            }
        });

        // button user clicks to close the pop up window
        btnCloseValidation.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                dialogue.dismiss();
            }
        });
    }
}