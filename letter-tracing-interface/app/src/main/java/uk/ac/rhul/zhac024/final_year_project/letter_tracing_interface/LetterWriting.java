package uk.ac.rhul.zhac024.final_year_project.letter_tracing_interface;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.graphics.Color;
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
    private ImageButton eraserBtn, penBtn, clearBtn;

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
        traceViewUpperCase = findViewById(R.id.traceViewUpperCase);
        traceViewLowerCase = findViewById(R.id.traceViewLowerCase);
        ImageView headerImg = findViewById(R.id.learnLetterImg);
        // initialises the traceview to have the right backgrounds to be drawn upon
        // gets the right attributes about the display to be used to create the trace view
        DisplayMetrics metrics = new DisplayMetrics();
        getWindowManager().getDefaultDisplay().getMetrics(metrics);
        traceViewUpperCase.init(metrics);
        traceViewLowerCase.init(metrics);
        traceViewUpperCase.setBackground(getResources().getDrawable(upperCaseLetter));
        traceViewLowerCase.setBackground(getResources().getDrawable(lowerCaseLetter));
        headerImg.setImageDrawable(getResources().getDrawable(header));

        eraserBtn = findViewById(R.id.eraserBtn);
        penBtn = findViewById(R.id.penBtn);
        clearBtn =  findViewById(R.id.clearBtn);
        ImageButton finishBtn =  findViewById(R.id.finishBtn);

        eraserBtn.setOnClickListener(this);
        penBtn.setOnClickListener(this);
        clearBtn.setOnClickListener(this);
        finishBtn.setOnClickListener(this);

        //as the pen is initially set to be used the button for pen changes colour to denote this
        penBtn.setBackgroundColor(Color.parseColor("#2FA5C6"));
    }

    /**
     * Deals with any click events within the letter writing view
     * @param view the letter writing view
     */
    @Override
    public void onClick(View view) {
        switch(view.getId()) {
            // upon clicking any of the button the background colour changes to a lighter shade
            // if the eraser is set the user is able to erase items on screen
            case R.id.eraserBtn:
                traceViewLowerCase.eraser(true);
                traceViewUpperCase.eraser(true);
                eraserBtn.setBackgroundColor(Color.parseColor("#2FA5C6"));
                penBtn.setBackgroundColor(Color.parseColor("#00588E"));
                clearBtn.setBackgroundColor(Color.parseColor("#00588E"));
                Toast.makeText(this, "erase", Toast.LENGTH_SHORT).show();
                break;
            // if the pen button is selected the user can draw
            case R.id.penBtn:
                traceViewLowerCase.eraser(false);
                traceViewUpperCase.eraser(false);
                penBtn.setBackgroundColor(Color.parseColor("#2FA5C6"));
                eraserBtn.setBackgroundColor(Color.parseColor("#00588E"));
                clearBtn.setBackgroundColor(Color.parseColor("#00588E"));
                Toast.makeText(this, "draw", Toast.LENGTH_SHORT).show();
                break;
            // erases the whole screen
            case R.id.clearBtn:
                traceViewLowerCase.clear();
                traceViewUpperCase.clear();
                clearBtn.setBackgroundColor(Color.parseColor("#2FA5C6"));
                penBtn.setBackgroundColor(Color.parseColor("#00588E"));
                eraserBtn.setBackgroundColor(Color.parseColor("#00588E"));
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