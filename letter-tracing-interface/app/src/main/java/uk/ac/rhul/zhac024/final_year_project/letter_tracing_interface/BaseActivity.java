package uk.ac.rhul.zhac024.final_year_project.letter_tracing_interface;

import android.app.AlertDialog;
import android.content.Context;
import android.content.SharedPreferences;
import android.media.AudioManager;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.provider.MediaStore;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.CompoundButton;
import android.widget.EditText;
import android.widget.Switch;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.switchmaterial.SwitchMaterial;

import java.util.Calendar;

public class BaseActivity extends AppCompatActivity {
    private AlertDialog.Builder dialogueBuilder;
    private AlertDialog dialogue;
    private EditText txtYear;
    private Button btnConfirmYear;
    private FloatingActionButton btnCloseValidation, btnCloseSettings;
    private MediaPlayer unavailable;
    private SwitchMaterial soundSwitch;

    public static final String SHARED_PREFS = "sharedPrefs";
    //public static final boolean SOUND_SWITCH = "soundSwitch";

    // allows for the menu that appears with the settings icon
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.main, menu);
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
                    Toast.makeText(BaseActivity.this, txtYear.getText(), Toast.LENGTH_SHORT).show();
                    dialogue.dismiss();
                    createNewSettingsDialog();
                } else{
                    unavailable = MediaPlayer.create(BaseActivity.this, R.raw.unavailable);
                    unavailable.start();
                    Toast.makeText(BaseActivity.this, "invalid year", Toast.LENGTH_SHORT).show();
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

    private void createNewSettingsDialog() {
        dialogueBuilder = new AlertDialog.Builder(this);
        final View settingsPopupView = getLayoutInflater().inflate(R.layout.settings_popup,null);

        btnCloseSettings = settingsPopupView.findViewById(R.id.btnClosePopUp);
        soundSwitch = settingsPopupView.findViewById(R.id.soundSwitch);

        dialogueBuilder.setView(settingsPopupView);
        dialogue = dialogueBuilder.create();
        dialogue.show();

        SharedPreferences sharedPrefs = getSharedPreferences(BaseActivity.SHARED_PREFS, Context.MODE_PRIVATE);
        soundSwitch.setChecked(sharedPrefs.getBoolean("SOUND_SWITCH", true));

        soundSwitch.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                AudioManager amanager = (AudioManager) getSystemService(Context.AUDIO_SERVICE);

                SharedPreferences.Editor editor = sharedPrefs.edit();
                editor.putBoolean("SOUND_SWITCH", isChecked);
                editor.apply();

                if (!isChecked) {
                    amanager.setStreamMute(AudioManager.STREAM_NOTIFICATION, true);
                    amanager.setStreamMute(AudioManager.STREAM_ALARM, true);
                    amanager.setStreamMute(AudioManager.STREAM_MUSIC, true);
                    amanager.setStreamMute(AudioManager.STREAM_RING, true);
                    amanager.setStreamMute(AudioManager.STREAM_SYSTEM, true);

                    Toast.makeText(BaseActivity.this, "no sound", Toast.LENGTH_SHORT).show();
                } else {
                    amanager.setStreamMute(AudioManager.STREAM_NOTIFICATION, false);
                    amanager.setStreamMute(AudioManager.STREAM_ALARM, false);
                    amanager.setStreamMute(AudioManager.STREAM_MUSIC, false);
                    amanager.setStreamMute(AudioManager.STREAM_RING, false);
                    amanager.setStreamMute(AudioManager.STREAM_SYSTEM, false);
                }
            }});


        // button user clicks to close the pop up window
        btnCloseSettings.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                dialogue.dismiss();
            }
        });
    }
}
