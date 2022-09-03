package com.winzana.excludesystemgesturearea
import android.widget.FrameLayout
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewGroupManager
import com.facebook.react.uimanager.annotations.ReactProp

class ExcludeSystemGestureAreaViewManager(
  private val callerContext: ReactApplicationContext
) : ViewGroupManager<FrameLayout>() {
  override fun getName() = "ExcludeSystemGestureAreaView"

  override fun createViewInstance(reactContext: ThemedReactContext): FrameLayout {
    return ComponentExcludeGestureArea(reactContext, callerContext)
  }
}
