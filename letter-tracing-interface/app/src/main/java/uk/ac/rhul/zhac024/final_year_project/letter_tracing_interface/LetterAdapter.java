package uk.ac.rhul.zhac024.final_year_project.letter_tracing_interface;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

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
        //LetterViewHolder viewHolder = new LetterViewHolder(view);
        return  new LetterViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull LetterViewHolder holder, int position) {
        Letter letter = letterList.get(position);
        holder.letterImg.setImageResource(letter.getBtnImage());
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
