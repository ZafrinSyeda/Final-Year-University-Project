package uk.ac.rhul.zhac024.final_year_project.letter_tracing_interface;

/**
 * Used as a structure for each letter to hold unique elements of the letter that would be used in
 * reusable interfaces
 */
public class Letter {
    // the name of the letter
    private String letter;
    // elements to be used in the interface
    private int btnImage, upperCase, lowerCase, header, sound;

    /**
     * The constructor for a letter that does not have any relevant features set up yet and is inaccessible
     *
     * @param letter the character of the letter
     * @param btnImage the image of the letter shown on the letter selection menu
     * @param sound the sound played if the user tries to access the letter from the menu
     */
    public Letter(String letter, int btnImage, int sound) {
        this.letter = letter;
        this.btnImage =btnImage;
        upperCase = 0;
        lowerCase = 0;
        this.sound = sound;

    }

    /**
     * The constructor for a letter that has been set up to be accessible from the menu and have features
     * used to show a letter writing interface
     *
     * @param letter the character of the letter
     * @param btnImage the image reference of the letter shown on the letter selection menu
     * @param upperCase the image reference that the user traces over with the upper case shape of the letter
     * @param lowerCase the image reference that the user traces over with the lower case shape of the letter
     * @param header the image reference that shows how the letter should be written out
     * @param sound the sound reference played if the user tries to access the letter from the menu
     */
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
