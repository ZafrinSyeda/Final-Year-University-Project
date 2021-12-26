package uk.ac.rhul.zhac024.final_year_project.letter_tracing_interface;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;

import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.NumberPicker;
import android.widget.Toast;

import com.google.android.material.floatingactionbutton.FloatingActionButton;

import java.util.Calendar;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    private AlertDialog.Builder dialogueBuilder;
    private AlertDialog dialogue;
    private EditText txtYear;
    private Button btnConfirmYear;
    private FloatingActionButton btnCloseValidation;


    @Override
    // all UI elements are views - onClick not limited for buttons
    public void onClick(View view) {
        switch (view.getId()) {
            case R.id.startButton:
                //toast messages useful for test messages
                Toast.makeText(this, "hello there", Toast.LENGTH_SHORT).show();
                break;
            default:
                break;
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        FloatingActionButton btnStart = findViewById(R.id.startButton);
        // sets on click listener and passes the class
        btnStart.setOnClickListener(this);
        btnStart.setOnLongClickListener(new View.OnLongClickListener() {
            @Override
            public boolean onLongClick(View view) {
                Toast.makeText(MainActivity.this, "hey that hurts!", Toast.LENGTH_SHORT).show();
                return true;
            }
        });
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
                // the minimum age someone could be to be considered grown up
                int maxYear = currentYear - 13;
                if ((inputYear >= minYear) || (inputYear <= maxYear)) {
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