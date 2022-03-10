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

        cardA = findViewById(R.id.cardA);
        cardB = findViewById(R.id.cardB);
        cardC = findViewById(R.id.cardC);
        cardD = findViewById(R.id.cardD);
        cardE = findViewById(R.id.cardE);
        cardF = findViewById(R.id.cardF);

        cardA.setOnClickListener(this);
        cardB.setOnClickListener(this);
        cardC.setOnClickListener(this);
        cardD.setOnClickListener(this);
        cardE.setOnClickListener(this);
        cardF.setOnClickListener(this);

    }

    @Override
    public void onClick(View view) {

        Intent intent = new Intent(this, LetterWriting.class);
        Bundle traceBackgrounds = new Bundle();

        switch(view.getId()) {
            case R.id.cardA:
                learn_a = MediaPlayer.create(this, R.raw.learn_a);
                learn_a.start();
                traceBackgrounds.putInt("upperCaseLetter", R.drawable.a_upper_case);
                traceBackgrounds.putInt("lowerCaseLetter", R.drawable.a_lower_case);
                break;
            case R.id.cardB:
                learn_b = MediaPlayer.create(this, R.raw.learn_b);
                learn_b.start();
                traceBackgrounds.putInt("upperCaseLetter", R.drawable.b_upper_case);
                traceBackgrounds.putInt("lowerCaseLetter", R.drawable.b_lower_case);
                break;
            default:
                unavailable = MediaPlayer.create(this, R.raw.unavailable);
                unavailable.start();
                return;
        }
        intent.putExtras(traceBackgrounds);
        startActivity(intent);
    }


}