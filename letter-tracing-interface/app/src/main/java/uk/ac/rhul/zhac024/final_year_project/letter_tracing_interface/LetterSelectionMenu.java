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
        letterSelectRecycler.setLayoutManager(gridLayoutManager);
        letterSelectRecycler.setAdapter(adapter);
        prepareLetters();
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

        int[] upperCase = new int[] {
                R.drawable.a_upper_case, R.drawable.b_upper_case,
        };

        int[] lowerCase = new int[] {
                R.drawable.a_lower_case, R.drawable.b_lower_case,
        };

        int[] header = new int[] {
                R.drawable.a_is_for, R.drawable.b_is_for,
        };

        int[] sounds = new int[] {
                R.raw.learn_a, R.raw.learn_b, R.raw.unavailable
        };

        for (int i = 0; i < letters.length; i++) {
            Letter l;
            if (i < upperCase.length) {

                l = new Letter(letters[i], letterImages[i], upperCase[i], lowerCase[i], header[i], sounds[i]);
            } else {
                 l = new Letter(letters[i], letterImages[i], sounds[sounds.length - 1]);
            }
            letterList.add(l);
        }
    }
}