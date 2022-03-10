package uk.ac.rhul.zhac024.final_year_project.letter_tracing_interface;

import android.content.Intent;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.util.DisplayMetrics;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class LetterWriting extends BaseActivity implements View.OnClickListener {

    private TraceView traceViewUpperCase, traceViewLowerCase;
    private Button eraserBtn, penBtn, finishBtn, clearBtn;
    private MediaPlayer success;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_letter_writing);
        Bundle traceBackgrounds = getIntent().getExtras();
        int upperCaseLetter = traceBackgrounds.getInt("upperCaseLetter");
        int lowerCaseLetter = traceBackgrounds.getInt("lowerCaseLetter");
        traceViewUpperCase = (TraceView) findViewById(R.id.traceViewUpperCase);
        traceViewLowerCase = (TraceView) findViewById(R.id.traceViewLowerCase);
        DisplayMetrics metrics = new DisplayMetrics();
        getWindowManager().getDefaultDisplay().getMetrics(metrics);
        traceViewUpperCase.init(metrics);
        traceViewLowerCase.init(metrics);
        traceViewUpperCase.setBackground(getResources().getDrawable(upperCaseLetter));
        traceViewLowerCase.setBackground(getResources().getDrawable(lowerCaseLetter));

        eraserBtn = (Button) findViewById(R.id.eraserBtn);
        penBtn = (Button) findViewById(R.id.penBtn);
        clearBtn = (Button) findViewById(R.id.clearBtn);
        finishBtn = (Button) findViewById(R.id.finishBtn);

        eraserBtn.setOnClickListener(this);
        penBtn.setOnClickListener(this);
        clearBtn.setOnClickListener(this);
        finishBtn.setOnClickListener(this);
    }

    @Override
    public void onClick(View view) {
        switch(view.getId()) {
            case R.id.eraserBtn:
                traceViewLowerCase.eraser(true);
                traceViewUpperCase.eraser(true);
                Toast.makeText(this, "eraser on", Toast.LENGTH_SHORT).show();
                break;
            case R.id.penBtn:
                traceViewLowerCase.eraser(false);
                traceViewUpperCase.eraser(false);
                Toast.makeText(this, "eraser off", Toast.LENGTH_SHORT).show();
                break;
            case R.id.clearBtn:
                traceViewLowerCase.clear();
                traceViewUpperCase.clear();
                Toast.makeText(this, "clear all", Toast.LENGTH_SHORT).show();
                break;
            case R.id.finishBtn:
                success = MediaPlayer.create(this, R.raw.success);
                success.start();
                backToMenu();
            default:
                break;
        }
    }

    private void backToMenu() {
        Intent intent = new Intent(this, LetterSelectionMenu.class);
        startActivity(intent);
    }
}