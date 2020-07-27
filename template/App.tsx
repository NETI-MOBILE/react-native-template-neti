import React from 'react';
import { enableScreens } from 'react-native-screens';
import { Platform } from 'react-native';
import { Navigator } from './src/navigation/Navigator';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// @ts-ignore
import KeyboardManager from 'react-native-keyboard-manager';
import * as Sentry from '@sentry/react-native';

if (!__DEV__) {
    // TODO Sentry.init({ dsn: 'https://dsn@sentry.netimob.com/14' });
}

enableScreens();
// IOS Keyboard settings
if (Platform.OS === 'ios') {
    KeyboardManager.setEnable(true);
    KeyboardManager.setEnableDebugging(false);
    KeyboardManager.setKeyboardDistanceFromTextField(10);
    KeyboardManager.setPreventShowingBottomBlankSpace(true);
    KeyboardManager.setEnableAutoToolbar(true);
    KeyboardManager.setToolbarDoneBarButtonItemText('ОК');
    KeyboardManager.setToolbarManageBehaviour(0);
    KeyboardManager.setToolbarPreviousNextButtonEnable(false);
    KeyboardManager.setShouldToolbarUsesTextFieldTintColor(false);
    KeyboardManager.setShouldShowTextFieldPlaceholder(true); // deprecated, use setShouldShowToolbarPlaceholder
    KeyboardManager.setShouldShowToolbarPlaceholder(true);
    KeyboardManager.setOverrideKeyboardAppearance(false);
    KeyboardManager.setShouldResignOnTouchOutside(true);
    KeyboardManager.resignFirstResponder();
}

const App = () => {
  return (
      <>
        <SafeAreaProvider>
          <Navigator />
        </SafeAreaProvider>
      </>
  );
};

export default App;
