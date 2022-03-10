package uk.ac.rhul.zhac024.final_year_project.letter_tracing_interface;

import android.graphics.drawable.Drawable;

public class Letter {
    private String letter;
    private int btnImage, upperCase, lowerCase, header, sound;

    public Letter() {}
    public Letter(String letter, int btnImage, int sound) {
        this.letter = letter;
        this.btnImage =btnImage;
        upperCase = 0;
        lowerCase = 0;
        this.sound = sound;

    }
    public Letter(String letter, int btnImage, int upperCase, int lowerCase, int header, int sound) {
        this.letter = letter;
        this.btnImage = btnImage;
        this.upperCase = upperCase;
        this.lowerCase = lowerCase;
        this.header = header;
        this.sound = sound;
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

    public int getUpperCase() {
        return upperCase;
    }

    public void setUpperCase(int upperCase) {
        this.upperCase = upperCase;
    }

    public int getLowerCase() {
        return lowerCase;
    }

    public void setLowerCase(int lowerCase) {
        this.lowerCase = lowerCase;
    }

    public int getHeader() {
        return header;
    }

    public void setHeader(int header) {
        this.header = header;
    }

    public int getSound() {
        return sound;
    }

    public void setSound(int sound) {
        this.sound = sound;
    }
}
