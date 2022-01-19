package uk.ac.rhul.zhac024.final_year_project.letter_tracing_interface;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Path;
import android.util.AttributeSet;
import android.util.DisplayMetrics;
import android.view.MotionEvent;
import android.view.View;

import androidx.annotation.Nullable;

import java.util.ArrayList;

public class TraceView extends View {

    public static int BRUSH_SIZE = 50;
    public static final int DEFAULT_COLOUR = Color.RED;
    public static final int DEFAULT_BG_COLOUR = Color.WHITE;
    // detects when the user started to draw on the screen
    public static final float TOUCH_TOLERANCE = 1;
    // coordinates for where the user's pointer is
    private float mX, mY;
    private Path mPath;
    private Paint mPaint;
    // stores the paths that the user has drawn
    private ArrayList<PaintingStroke> paths = new ArrayList<>();
    private int currentColor;
    private int backgroundColor = DEFAULT_BG_COLOUR;
    private int strokeWidth;
    private Bitmap mBitmap;
    private Canvas mCanvas;
    private Paint mBitmapPaint = new Paint(Paint.DITHER_FLAG);


    public TraceView(Context context) {
        super(context, null);
    }

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
    }

    public void init(DisplayMetrics metrics){
        int height = metrics.heightPixels;
        int width = metrics.widthPixels;

        mBitmap = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888);
        mCanvas = new Canvas(mBitmap);
        currentColor = DEFAULT_COLOUR;
        strokeWidth = BRUSH_SIZE;
        //View.setcliptooutline android;
    }

    public void clear() {
        backgroundColor = DEFAULT_BG_COLOUR;
        paths.clear();
        invalidate();
    }

    @Override
    public void draw(Canvas canvas) {
        super.draw(canvas);
    }

    @Override
    protected void onDraw(Canvas canvas) {
        canvas.save();
        mCanvas.drawColor(backgroundColor);

        for (PaintingStroke ps : paths) {
            mPaint.setColor(ps.colour);
            mPaint.setStrokeWidth(ps.strokeWidth);
            mCanvas.drawPath(ps.path, mPaint);
        }
        canvas.drawBitmap(mBitmap, 0,0, mBitmapPaint);
        canvas.restore();
    }

    // called when the user touches the screen to draw
    private void touchStart(float x, float y) {
        mPath = new Path();
        PaintingStroke ps = new PaintingStroke(currentColor, strokeWidth, mPath);
        paths.add(ps);

        mPath.reset();
        mPath.moveTo(x, y);
        mX = x;
        mY = y;
    }

    // when the user moves their finger on the screen
    private void touchMove(float x, float y) {
        float dx = (x - mX);
        float dy = (y - mY);

        mPath.quadTo(mX, mY, (dx + mX), (dy + mY));
        mX = x;
        mY = y;

    }

    private void touchUp() {
        mPath.lineTo(mX, mY);
    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {
        float x = event.getX();
        float y = event.getY();

        switch (event.getAction()) {
            case MotionEvent.ACTION_DOWN:
                touchStart(x, y);
                invalidate();
                break;
            case MotionEvent.ACTION_MOVE:
                touchMove(x, y);
                invalidate();
                break;
            case MotionEvent.ACTION_UP:
                touchUp();
                invalidate();
                break;
        }
        return true;
    }

}
