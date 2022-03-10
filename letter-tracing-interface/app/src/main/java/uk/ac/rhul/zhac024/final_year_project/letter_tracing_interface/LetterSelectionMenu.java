package uk.ac.rhul.zhac024.final_year_project.letter_tracing_interface;

import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.widget.Toolbar;

import java.util.ArrayList;
import java.util.List;

public class LetterSelectionMenu extends BaseActivity  {

    private CardView cardA, cardB, cardC, cardD, cardE, cardF, cardG, cardH;
    private MediaPlayer learn_a, learn_b, unavailable;
    private RecyclerView letterSelectRecycler;
    private List<Letter> letterList;
    private LetterAdapter adapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_letter_selection_menu);

        letterSelectRecycler = (RecyclerView) findViewById(R.id.letterSelectRecycler);
        letterList = new ArrayList<>();
        adapter = new LetterAdapter(letterList, this);
        GridLayoutManager gridLayoutManager = new GridLayoutManager(this, 2);
        //RecyclerView.LayoutManager layoutManager = new LinearLayoutManager(this);
        letterSelectRecycler.setLayoutManager(gridLayoutManager);
        //letterSelectRecycler.setHasFixedSize(true);
        letterSelectRecycler.setAdapter(adapter);

        prepareLetters();

        /*cardA = findViewById(R.id.cardA);
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
        cardF.setOnClickListener(this);*

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
 */

    }

    private void prepareLetters() {
        String[] letters = new String[] {
                "a", "b", "c", "d", "e", "f"
        };

        int[] letterImages = new int[] {
                R.drawable.letter_a_btn,
                R.drawable.letter_b_btn,
                R.drawable.letter_c_btn,
                R.drawable.letter_d_btn,
                R.drawable.letter_e_btn,
                R.drawable.letter_f_btn,
        };

        for (int i = 0; i < letters.length; i++) {
            Letter l = new Letter(letters[i], letterImages[i]);
            letterList.add(l);
        }
    }
}