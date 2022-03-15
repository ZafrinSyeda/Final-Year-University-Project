package uk.ac.rhul.zhac024.final_year_project.letter_tracing_interface;

import android.content.Context;
import android.content.Intent;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

/**
 * Used to handle the data that will be used when setting up a recycler view to display the items
 * on the letter selection menu
 */
public class LetterAdapter extends RecyclerView.Adapter<LetterAdapter.LetterViewHolder>{
    private final List<Letter> letterList;
    private final Context context;

    /**
     * Takes in the letter and the context of the view holder to construct the adapter
     *
     * @param letterList the list of all of the letters of type letter to be processed
     * @param context the information that deals with the views
     */
    public LetterAdapter(List<Letter> letterList, Context context) {
        this.letterList = letterList;
        this.context = context;
    }

    @NonNull
    @Override
    public LetterViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        LayoutInflater layoutInflater = LayoutInflater.from(parent.getContext());
        View view = layoutInflater.inflate(R.layout.letter_btn, parent, false);
        return  new LetterViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull LetterViewHolder holder, int position) {
        // gets the letter item from the letter list
        Letter letter = letterList.get(position);
        // sets the image to the image kept on the letter instance
        holder.letterImg.setImageResource(letter.getBtnImage());
        // dynamically sets the content description to be relevant for the right letter
        holder.letterImg.setContentDescription("to learn the letter " + letter.getLetter());
        holder.letterImg.setOnClickListener(view -> {
            // if the letter button is clicked play the sound stored in the instance
            MediaPlayer sound = MediaPlayer.create(context, letter.getSound());
            sound.start();
            // takes in information that is presented when the letter writing activity starts
            Intent intent = new Intent(context, LetterWriting.class);
            Bundle traceElements = new Bundle();
            // if the button cannot be used to go to a letter writing page return nothing
            if (letter.getUpperCase() == 0) {
                return;
            } else {
                // sets the bundle to hold the relevant information to be used in the letter writing view
                traceElements.putInt("upperCaseLetter", letter.getUpperCase());
                traceElements.putInt("lowerCaseLetter", letter.getLowerCase());
                traceElements.putInt("header", letter.getHeader());
            }
            intent.putExtras(traceElements);
            // starts the letter writing activity
            context.startActivity(intent);
        });
    }

    @Override
    public int getItemCount() {
        return letterList.size();
    }

    /**
     * Acts as a reference to the views being used in the view such as the image of the button
     */
    public static class LetterViewHolder extends RecyclerView.ViewHolder{
        ImageView letterImg;

        /**
         * identifies the view features and initialises variables for these elements
         * @param itemView the feature of the view
         */
        public LetterViewHolder(@NonNull View itemView) {
            super(itemView);
            letterImg = itemView.findViewById(R.id.letterImg);
        }
    }


}
