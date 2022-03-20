package uk.ac.rhul.zhac024.final_year_project.letter_tracing_interface;

import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import android.os.Bundle;
import java.util.ArrayList;
import java.util.List;

/**
 * Sets up the menu of letters that the user can select which letter to learn from
 */
public class LetterSelectionMenu extends BaseActivity  {

    private List<Letter> letterList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_letter_selection_menu);
        /* each item in the menu is presented using a recycler view which to set up,
        requires feeding data into the adapter */
        RecyclerView letterSelectRecycler = (RecyclerView) findViewById(R.id.letterSelectRecycler);
        letterList = new ArrayList<>();
        // presents the recycler view items in a grid format made up of 2 items per row
        GridLayoutManager gridLayoutManager = new GridLayoutManager(this, 2);
        letterSelectRecycler.setLayoutManager(gridLayoutManager);
        LetterAdapter adapter = new LetterAdapter(letterList, this);
        letterSelectRecycler.setAdapter(adapter);
        // sets up the elements that make up the list of each letters
        prepareLetters();
    }

    /**
     * Creates a letter item and fills it in with relevant information
     * and for each letter places it in a list
     */
    private void prepareLetters() {
        // the character of each letter
        String[] letters = new String[] {
                "a", "b", "c", "d", "e", "f"
        };

        // the image of the letters displayed on the letter selection menu
        int[] letterImages = new int[] {
                R.drawable.letter_a_btn,
                R.drawable.letter_b_btn,
                R.drawable.letter_c_btn,
                R.drawable.letter_d_btn,
                R.drawable.letter_e_btn,
                R.drawable.letter_f_btn,
        };

        // the image that is traced over to practice writing upper case letters
        int[] upperCase = new int[] {
                R.drawable.a_upper_case, R.drawable.b_upper_case,
        };

        // the image that is traced over to practice writing lower case letters
        int[] lowerCase = new int[] {
                R.drawable.a_lower_case, R.drawable.b_lower_case,
        };

        // the header that shows users how to write each letter
        int[] header = new int[] {
                R.drawable.a_is_for, R.drawable.b_is_for,
        };

        // the sound that is played when the letter is selected from the selection menu
        int[] sounds = new int[] {
                R.raw.learn_a, R.raw.learn_b, R.raw.unavailable
        };

        for (int i = 0; i < letters.length; i++) {
            Letter l;
            /* if the letter has information such as uppercase trace views, headers, etc,
             use that constructor to create a letter else use the other constructor */
            if (i < upperCase.length) {
                l = new Letter(letters[i], letterImages[i], upperCase[i], lowerCase[i], header[i], sounds[i]);
            } else {
                 l = new Letter(letters[i], letterImages[i], sounds[sounds.length - 1]);
            }
            letterList.add(l);
        }
    }
}