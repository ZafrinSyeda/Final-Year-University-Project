package uk.ac.rhul.zhac024.final_year_project.letter_tracing_interface;

import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;

import android.media.MediaPlayer;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;

public class LetterSelectionMenu extends AppCompatActivity implements View.OnClickListener {

    private CardView cardA, cardB, cardC;
    private MediaPlayer learn_a, learn_b, unavailable;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_letter_selection_menu);

        cardA = (CardView) findViewById(R.id.cardA);
        cardB = (CardView) findViewById(R.id.cardB);
        cardC = (CardView) findViewById(R.id.cardC);

        cardA.setOnClickListener(this);
        cardB.setOnClickListener(this);
        cardC.setOnClickListener(this);
    }

    @Override
    public void onClick(View view) {

        switch(view.getId()) {
            case R.id.cardA:
                learn_a = MediaPlayer.create(this, R.raw.learn_a);
                learn_a.start();
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
}