package uk.ac.rhul.zhac024.final_year_project.letter_tracing_interface;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.util.AttributeSet;
import android.util.DisplayMetrics;
import android.view.MotionEvent;
import android.view.View;
import androidx.annotation.Nullable;
import java.util.ArrayList;

/**
 * Represents a view that allows for the user to draw and erase strokes over it when interacting
 * with it through dragging the screen
 */
public class TraceView extends View {
    // width of the stroke
    public static int BRUSH_SIZE = 40;
    // chosen colour of the user's stroke
    public static final int DEFAULT_COLOUR = Color.RED;
    // coordinates for where the user's pointer is
    private float mX, mY;
    private Path mPath;
    private Paint mPaint, mEraser;
    // stores the paths that the user has drawn
    private ArrayList<PaintingStroke> paths = new ArrayList<>();
    private ArrayList<PaintingStroke> eraserPaths = new ArrayList<>();
    private int currentColor;
    private int strokeWidth;
    private Bitmap mBitmap;
    private Canvas mCanvas;
    private Paint mBitmapPaint = new Paint(Paint.DITHER_FLAG);
    private boolean setEraser = false;


    /**
     * Constructor when there are no attributes
     */
    public TraceView(Context context) {
        super(context, null);
    }

    /**
     * Constructor when there are relevant attributes where all of the variables are set up
     */
    public TraceView(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
        mPaint = new Paint();
        // smooths the edges when being drawn
        mPaint.setAntiAlias(true);
        // sets the paint colour
        mPaint.setColor(DEFAULT_COLOUR);
        // sets the paint's style to be stroked
        mPaint.setStyle(Paint.Style.STROKE);
        // when lines join on a stroked path they will meet in a circular shape
        mPaint.setStrokeJoin(Paint.Join.ROUND);
        // the stroke ends with a semicircle
        mPaint.setStrokeCap(Paint.Cap.ROUND);
        /*functionally mPaint and mEraser perform the same type of behaviour and ultimately have mostly
        similar attributes*/
        mEraser = new Paint();
        // smooths the edges when being drawn
        mEraser.setAntiAlias(true);
        // sets the paint colour
        mEraser.setColor(DEFAULT_COLOUR);
        // sets the paint's style to be stroked
        mEraser.setStyle(Paint.Style.STROKE);
        // when lines join on a stroked path they will meet in a circular shape
        mEraser.setStrokeJoin(Paint.Join.ROUND);
        // the stroke ends with a semicircle
        mEraser.setStrokeCap(Paint.Cap.ROUND);
        // changes the pixels of the paint stroke that it covers to be set to 0 thus clearing it
        mEraser.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.CLEAR));

    }

    /**
     * Initialises the canvas that is drawn upon
     *
     * @param metrics the information about the view
     */
    public void init(DisplayMetrics metrics){
       int height = metrics.heightPixels;
        int width = metrics.widthPixels;
        mBitmap = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888);
        mCanvas = new Canvas(mBitmap);
        // the canvas colour is transparent to allow for the background to be set as a trace image
        mCanvas.drawColor(Color.TRANSPARENT, PorterDuff.Mode.CLEAR);
        currentColor = DEFAULT_COLOUR;
        strokeWidth = BRUSH_SIZE;
    }

    /**
     * When this is selected all strokes are removed from the screen
     */
    public void clear() {
        // sets the colour of the strokes to be transparent so they are no longer visible
        mCanvas.drawColor(0, PorterDuff.Mode.CLEAR);
        // removes all of the strokes
        paths.clear();
        invalidate();
    }

    /**
     * Sets the pen to be the eraser pen or the drawing pen
     *
     * @param setEraser toggles between whether the eraser should be set or not
     */
    public void eraser(boolean setEraser) {
        this.setEraser = setEraser;
        if (setEraser) {
            mPaint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.CLEAR));
        } else {
            mPaint.setXfermode( null);
        }
    }

    @Override
    public void draw(Canvas canvas) {
        super.draw(canvas);
    }

    /**
     * Creates relevant paths when the user drags their finger across the view
     *
     * @param canvas the view being drawn upon
     */
    @Override
    protected void onDraw(Canvas canvas) {
        // saves the paths drawn on the canvas
        canvas.save();
        // sets the paths to clear the items drawn on screen
        if (setEraser) {
            for (PaintingStroke ps : eraserPaths) {
                mEraser.setColor(Color.TRANSPARENT);
                mEraser.setStrokeWidth(60);
                mCanvas.drawPath(ps.path, mEraser);
                paths.clear();
            }
        // sets the path that the user draws on using the pen
        } else {

            for (PaintingStroke ps : paths) {
                mPaint.setColor(currentColor);
                mPaint.setStrokeWidth(ps.strokeWidth);
                mCanvas.drawPath(ps.path, mPaint);

            }
        }
        canvas.drawBitmap(mBitmap, 0,0, mBitmapPaint);
        canvas.restore();
    }

    /**
     * called when the user touches the screen to draw
     *
     * @param x where the user's pointer is on the x axis
     * @param y where the user's pointer is on the y axis
     */
    private void touchStart(float x, float y) {
        mPath = new Path();
        //adds paths to the relevant array when being drawn
        if (setEraser) {
            PaintingStroke ps = new PaintingStroke(Color.TRANSPARENT, strokeWidth, mPath);
            eraserPaths.add(ps);
        } else {
            PaintingStroke ps = new PaintingStroke(currentColor, strokeWidth, mPath);
            paths.add(ps);
        }
        mPath.reset();
        mPath.moveTo(x, y);
        mX = x;
        mY = y;
    }

    /**
     * deals with drawing the path from one point to another as the user moves their finger on the screen
     *
     * @param x where the user's pointer is on the x axis
     * @param y where the user's pointer is on the y axis
     */
    private void touchMove(float x, float y) {
        float dx = (x - mX);
        float dy = (y - mY);

        mPath.quadTo(mX, mY, (dx + mX), (dy + mY));
        mX = x;
        mY = y;
    }

    /**
     * Used to draw a line based on the user's finger position after they lift their finger up from the screen
     */
    private void touchUp() {
        // draws the path to the line where the user's finger has moved
        mPath.lineTo(mX, mY);
        if (setEraser) {
            mCanvas.drawPath(mPath, mEraser);
            invalidate();
        } else {
            mCanvas.drawPath(mPath, mPaint);
        }
        mPath = new Path();
    }

    /**
     * Deals with any instance  where the user interacts with the trace view
     *
     * @param event the user's interaction with the view
     * @return that the event has occurred
     */
    @Override
    public boolean onTouchEvent(MotionEvent event) {
        // coordinates of where the user is pointing
        float x = event.getX();
        float y = event.getY();
        // performs a different action based on the nature of the user's interaction
        switch (event.getAction()) {
            // calls when the user puts their finger down on the view
            case MotionEvent.ACTION_DOWN:
                touchStart(x, y);
                invalidate();
                break;
            // calls when the user puts their finger down on the view
            case MotionEvent.ACTION_MOVE:
                touchMove(x, y);
                invalidate();
                break;
            // calls when the user puts their finger down on the view
            case MotionEvent.ACTION_UP:
                touchUp();
                invalidate();
                break;
        }
        invalidate();
        return true;
    }

}
