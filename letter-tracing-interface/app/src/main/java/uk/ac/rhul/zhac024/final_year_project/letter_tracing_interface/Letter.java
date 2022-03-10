package uk.ac.rhul.zhac024.final_year_project.letter_tracing_interface;

import android.graphics.drawable.Drawable;

public class Letter {
    private String letter;
    private int btnImage;

    public Letter() {}
    public Letter(String letter, int btnImage) {
        this.letter = letter;
        this.btnImage =btnImage;
    }

    public String getLetter() {
        return letter;
    }

    public void setLetter(String letter) {
        this.letter = letter;
    }

    public int getBtnImage() {
        return btnImage;
    }

    public void setBtnImage(int btnImage) {
        this.btnImage = btnImage;
    }
}
