import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BasicNavigator from '@/navigators/Basic';
import { store, persistor } from '@/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { navigationRef } from '@/router';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <BasicNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
