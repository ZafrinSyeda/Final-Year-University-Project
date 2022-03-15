package uk.ac.rhul.zhac024.final_year_project.letter_tracing_interface;

import android.graphics.Path;

/**
 * Represents the stroke drawn by the user drawn on the trace view
 */
public class PaintingStroke {
    public int colour;
    public int strokeWidth;
    public Path path;

    /**
     * Sets up the features of the stroke drawn
     *
     * @param colour the colour of the stroke
     * @param strokeWidth the width of the stroke
     * @param path represents geometric paths that can be drawn
     */
    public PaintingStroke(int colour,  int strokeWidth, Path path) {
        this.colour = colour;
        this.strokeWidth = strokeWidth;
        this.path = path;
    }
}
