package uk.ac.rhul.zhac024.final_year_project.letter_tracing_interface;

import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;

import android.content.Intent;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.widget.Toolbar;

public class LetterSelectionMenu extends BaseActivity implements View.OnClickListener {

    private CardView cardA, cardB, cardC, cardD, cardE, cardF, cardG, cardH   ;
    private MediaPlayer learn_a, learn_b, unavailable;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_letter_selection_menu);

        cardA = (CardView) findViewById(R.id.cardA);
        cardB = (CardView) findViewById(R.id.cardB);
        cardC = (CardView) findViewById(R.id.cardC);
        cardD = (CardView) findViewById(R.id.cardD);
        cardE = (CardView) findViewById(R.id.cardE);
        cardF = (CardView) findViewById(R.id.cardF);
        cardG = (CardView) findViewById(R.id.cardG);
        cardH = (CardView) findViewById(R.id.cardH);

        cardA.setOnClickListener(this);
        cardB.setOnClickListener(this);
        cardC.setOnClickListener(this);
        cardD.setOnClickListener(this);
        cardE.setOnClickListener(this);
        cardF.setOnClickListener(this);
        cardG.setOnClickListener(this);
        cardH.setOnClickListener(this);
    }

    @Override
    public void onClick(View view) {

        switch(view.getId()) {
            case R.id.cardA:
                learn_a = MediaPlayer.create(this, R.raw.learn_a);
                learn_a.start();
                openLetterA();
                break;
            case R.id.cardB:
                learn_b = MediaPlayer.create(this, R.raw.learn_b);
                learn_b.start();
                break;
            default:
                unavailable = MediaPlayer.create(this, R.raw.unavailable);
                unavailable.start();
                break;
        }
    }

    private void openLetterA() {
        Intent intent = new Intent(this, LetterWriting.class);
        startActivity(intent);
    }
}