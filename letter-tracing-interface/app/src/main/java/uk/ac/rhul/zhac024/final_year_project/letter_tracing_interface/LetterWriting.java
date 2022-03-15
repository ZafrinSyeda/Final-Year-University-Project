package uk.ac.rhul.zhac024.final_year_project.letter_tracing_interface;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.util.DisplayMetrics;
import android.view.View;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.Toast;

/**
 * Sets up the view where users can trace letters to learn them
 */
public class LetterWriting extends BaseActivity implements View.OnClickListener {

    private TraceView traceViewUpperCase, traceViewLowerCase;

    @SuppressLint("UseCompatLoadingForDrawables")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_letter_writing);
        // gets the items within the intent to be used for this view
        Bundle traceElements = getIntent().getExtras();
        int upperCaseLetter = traceElements.getInt("upperCaseLetter");
        int lowerCaseLetter = traceElements.getInt("lowerCaseLetter");
        int header = traceElements.getInt("header");
        traceViewUpperCase = (TraceView) findViewById(R.id.traceViewUpperCase);
        traceViewLowerCase = (TraceView) findViewById(R.id.traceViewLowerCase);
        ImageView headerImg = (ImageView) findViewById(R.id.learnLetterImg);
        // initialises the traceview to have the right backgrounds to be drawn upon
        // gets the right attributes about the display to be used to create the trace view
        DisplayMetrics metrics = new DisplayMetrics();
        getWindowManager().getDefaultDisplay().getMetrics(metrics);
        traceViewUpperCase.init(metrics);
        traceViewLowerCase.init(metrics);
        traceViewUpperCase.setBackground(getResources().getDrawable(upperCaseLetter));
        traceViewLowerCase.setBackground(getResources().getDrawable(lowerCaseLetter));
        headerImg.setImageDrawable(getResources().getDrawable(header));

        ImageButton eraserBtn = (ImageButton) findViewById(R.id.eraserBtn);
        ImageButton penBtn = (ImageButton) findViewById(R.id.penBtn);
        ImageButton clearBtn = (ImageButton) findViewById(R.id.clearBtn);
        ImageButton finishBtn = (ImageButton) findViewById(R.id.finishBtn);
        eraserBtn.setOnClickListener(this);
        penBtn.setOnClickListener(this);
        clearBtn.setOnClickListener(this);
        finishBtn.setOnClickListener(this);
    }

    /**
     * Deals with any click events within the letter writing view
     * @param view the letter writing view
     */
    @Override
    public void onClick(View view) {
        switch(view.getId()) {
            // if the eraser is set the user is able to erase items on screen
            case R.id.eraserBtn:
                traceViewLowerCase.eraser(true);
                traceViewUpperCase.eraser(true);
                break;
            // if the pen button is selected the user can draw
            case R.id.penBtn:
                traceViewLowerCase.eraser(false);
                traceViewUpperCase.eraser(false);
                break;
            // erases the whole screen
            case R.id.clearBtn:
                traceViewLowerCase.clear();
                traceViewUpperCase.clear();
                Toast.makeText(this, "clear all", Toast.LENGTH_SHORT).show();
                break;
            // sends the user back to the menu as they have completed their work
            case R.id.finishBtn:
                MediaPlayer success = MediaPlayer.create(this, R.raw.success);
                success.start();
                backToMenu();
            default:
                break;
        }
    }

    /**
     * Returns the user to the letter selection menu view
     */
    private void backToMenu() {
        Intent intent = new Intent(this, LetterSelectionMenu.class);
        startActivity(intent);
    }
}