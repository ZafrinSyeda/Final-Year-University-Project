package uk.ac.rhul.zhac024.final_year_project.letter_tracing_interface;

import android.app.AlertDialog;
import android.content.Context;
import android.content.SharedPreferences;
import android.media.AudioManager;
import android.media.MediaPlayer;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.CompoundButton;
import android.widget.EditText;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.switchmaterial.SwitchMaterial;

import java.util.Calendar;

/**
 * This acts as the base that each page of the app will follow, in particular this includes the
 * options menu at the top of each page where the user can access settings
 */
public abstract class BaseActivity extends AppCompatActivity {
    // Used to provide the APIs needed to create the alert dialog dialogue
    private AlertDialog.Builder dialogueBuilder;
    // Used to hold the contents of the Settings section
    private AlertDialog dialogue;
    // An input box where older users can validate their age by entering the year they were born
    private EditText txtYear;
    // Sound that's played if the user is not a valid age
    private MediaPlayer unavailable;

    // Used to save preferences even after the app is closed
    private static final String SHARED_PREFS = "sharedPrefs";

    /**
     * Used to create an Options Menu that is presented at the top of each page of the app
     * @param menu The menu that needs to be rendered
     * @return true if the creation was successful
     */
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.main, menu);
        return true;
    }


    /**
     * Used to deal with what happens depending on what button of the options menu
     * has been selected
     * @param item the item that the user clicks on in the options menu
     * @return true if the settings button has been selected in order to create the next
     * dialog for the user
     */
    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        // since the only button on the options menu is one that provides access to settings that is the only one processed
        if (item.getItemId() == R.id.settings_menu ) {
            // needs the user to prove their age before being able to access the Settings page
            createNewVerificationDialog();
            return true;
        } else {
            return super.onOptionsItemSelected(item);
        }
    }

    /**
     * Used to create the pop-up dialog to validate the user's age when the settings button is pressed
     */
    protected void createNewVerificationDialog() {
        dialogueBuilder = new AlertDialog.Builder(this);
        final View verificationPopupView = getLayoutInflater().inflate(R.layout.verification_popup,null);
        txtYear = verificationPopupView.findViewById(R.id.txtYear);
        Button btnConfirmYear = verificationPopupView.findViewById(R.id.btnConfirmYear);
        FloatingActionButton btnCloseValidation = verificationPopupView.findViewById(R.id.btnCloseValidation);
        // sets up the dialog to be shown to the user
        dialogueBuilder.setView(verificationPopupView);
        dialogue = dialogueBuilder.create();
        dialogue.show();

        // button user clicks to confirm their year of birth
        btnConfirmYear.setOnClickListener(new View.OnClickListener() {
            /**
             * Processes what occurs after the user selects a button to confirm their birth year
             * @param view the button that has been clicked
             */
            @Override
            public void onClick(View view) {
                // the year that the user has input into the form
                int inputYear;
                // checks if the input box is empty and sets the year to 0 which is invalid
                if (txtYear.getText().toString().matches("")) {
                    inputYear = 0;
                } else {
                    inputYear = Integer.parseInt(txtYear.getText().toString());
                }
                // the current year
                int currentYear = Calendar.getInstance().get(Calendar.YEAR);
                // the maximum valid age someone could be to be considered grown up
                int minYear = currentYear - 120;
                // considering if an older sibling, at least a teenager (aged 13) could want to adjust the settings
                int maxYear = currentYear - 13;
                // if the user is a valid age they can continue to gain access of the actual Settings dialog
                if ((inputYear >= minYear) && (inputYear <= maxYear)) {
                    dialogue.dismiss();
                    createNewSettingsDialog();
                /* if the user is too young or the number is that of someone who obviously don't know
                how to read the instructions, the validation dialog plays a sound to suggest they cannot
                gain access and close */
                } else{
                    unavailable = MediaPlayer.create(BaseActivity.this, R.raw.unavailable);
                    unavailable.start();
                    dialogue.dismiss();
                }
            }
        });

        // button user clicks to close the dialog window
        btnCloseValidation.setOnClickListener(view -> dialogue.dismiss());
    }

    /**
     * Used to create the actual settings dialog where so far the user is able to toggle whether
     * the app plays sounds or not
     */
    protected void createNewSettingsDialog() {
        //sets up and builds the dialog based on the designed view
        dialogueBuilder = new AlertDialog.Builder(this);
        final View settingsPopupView = getLayoutInflater().inflate(R.layout.settings_popup,null);
        FloatingActionButton btnCloseSettings = settingsPopupView.findViewById(R.id.btnClosePopUp);
        SwitchMaterial soundSwitch = settingsPopupView.findViewById(R.id.soundSwitch);
        dialogueBuilder.setView(settingsPopupView);
        dialogue = dialogueBuilder.create();
        dialogue.show();

        // Using persistent storage to see what the user has saved as preferences
        SharedPreferences sharedPrefs = getSharedPreferences(BaseActivity.SHARED_PREFS, Context.MODE_PRIVATE);
        /* if the user toggles the switch on the settings page it will change the preferences saved
        * of whether the user wants sound to be played or not - by default this is set to true*/
        soundSwitch.setChecked(sharedPrefs.getBoolean("SOUND_SWITCH", true));

        soundSwitch.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            /**
             * Used to toggle the user's preferences on whether the app should be able to play sounds
             * or not
             * @param buttonView The button that was pressed to change the sound
             * @param isChecked The user's previous preference for whether or not sound should play
             */
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                AudioManager amanager = (AudioManager) getSystemService(Context.AUDIO_SERVICE);

                SharedPreferences.Editor editor = sharedPrefs.edit();
                // stores the user's preference
                editor.putBoolean("SOUND_SWITCH", isChecked);
                editor.apply();
                // for each aspect of the sound in the app, the sound is toggled
                amanager.setStreamMute(AudioManager.STREAM_NOTIFICATION, !isChecked);
                amanager.setStreamMute(AudioManager.STREAM_ALARM, !isChecked);
                amanager.setStreamMute(AudioManager.STREAM_MUSIC, !isChecked);
                amanager.setStreamMute(AudioManager.STREAM_RING, !isChecked);
                amanager.setStreamMute(AudioManager.STREAM_SYSTEM, !isChecked);
            }});

        //button user clicks to close the settings dialog
        btnCloseSettings.setOnClickListener(view -> dialogue.dismiss());
    }
}
