package uk.ac.rhul.zhac024.final_year_project.letter_tracing_interface;

import android.graphics.Path;

// represents the stroke drawn by the user
public class PaintingStroke {
    public int colour;
    public int strokeWidth;

    //represents geometric paths that can be drawn
    public Path path;

    public PaintingStroke(int colour,  int strokeWidth, Path path) {
        this.colour = colour;

        this.strokeWidth = strokeWidth;
        this.path = path;
    }
}
