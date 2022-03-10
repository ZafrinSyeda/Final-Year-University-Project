package uk.ac.rhul.zhac024.final_year_project.letter_tracing_interface;

import android.content.Context;
import android.content.Intent;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

public class LetterAdapter extends RecyclerView.Adapter<LetterAdapter.LetterViewHolder>{
    private List<Letter> letterList;
    private Context context;


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
        Letter letter = letterList.get(position);
        holder.letterImg.setImageResource(letter.getBtnImage());
        holder.letterImg.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                MediaPlayer sound = MediaPlayer.create(context, letter.getSound());
                sound.start();
                Intent intent = new Intent(context, LetterWriting.class);
                Bundle traceElements = new Bundle();
                if (letter.getUpperCase() == 0) {
                    return;
                } else {
                    traceElements.putInt("upperCaseLetter", letter.getUpperCase());
                    traceElements.putInt("lowerCaseLetter", letter.getLowerCase());
                    traceElements.putInt("header", letter.getHeader());
                }
                intent.putExtras(traceElements);
                context.startActivity(intent);
            }
        });
    }

    @Override
    public int getItemCount() {
        return letterList.size();
    }

    public static class LetterViewHolder extends RecyclerView.ViewHolder{
        ImageView letterImg;

        public LetterViewHolder(@NonNull View itemView) {
            super(itemView);
            letterImg = itemView.findViewById(R.id.letterImg);
        }
    }


}
