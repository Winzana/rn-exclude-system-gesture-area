package com.winzana.excludesystemgesturearea

import android.content.Context
import android.graphics.Canvas
import android.graphics.Rect
import android.os.Build
import android.widget.FrameLayout
import com.facebook.react.bridge.ReactApplicationContext

class ComponentExcludeGestureArea(context: Context, private val callerContext: ReactApplicationContext) : FrameLayout(context) {
  val rects : MutableList<Rect>;

  init {
      rects = emptyList<Rect>().toMutableList()
  }

  override fun onLayout(changed: Boolean, left: Int, top: Int, right: Int, bottom: Int) {
    super.onLayout(changed, left, top, right, bottom)
    if(changed){ rects.clear();}
    rects.add(Rect(left,  top+40, right,  bottom+40))
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
      callerContext.currentActivity?.window?.decorView?.rootView?.systemGestureExclusionRects = rects
    }
  }

  override fun onDraw(canvas: Canvas?) {
    super.onDraw(canvas)
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
      callerContext.currentActivity?.window?.decorView?.rootView?.systemGestureExclusionRects = rects
    }
  }
}
