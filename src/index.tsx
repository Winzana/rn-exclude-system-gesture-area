import React from 'react';
import { requireNativeComponent, UIManager, Platform } from 'react-native';

const LINKING_ERROR =
  `The package '@wz-mobile/exclude-system-gesture-area' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

interface ExcludeSystemGestureAreaProps {
  children: any;
}

const ComponentName = 'ExcludeSystemGestureAreaView';

export const NativeExcludeSystemGestureAreaView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<ExcludeSystemGestureAreaProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

export const ExcludeSystemGestureAreaView: React.FC = ({ children }: any) => {
  return Platform.OS === 'android' ? (
    <NativeExcludeSystemGestureAreaView>
      {children}
    </NativeExcludeSystemGestureAreaView>
  ) : (
    children
  );
};
