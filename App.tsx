import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AuthContext, AuthProvider } from './AuthContext';

import AppStack from './src/navigation/AppStack';
import AuthStack from './src/navigation/AuthStack';

export default function App() {
  return (
    <AuthProvider>
      <AppContainer />
    </AuthProvider>
  )
}

function AppContainer() {

  const authContext = useContext(AuthContext);

  return (
    <SafeAreaView style={{flex: 1}}>
      {!authContext?.auth?.authenticated ? (
        <AuthStack />
      ) : (
        <AppStack />
      )}
    </SafeAreaView>
  );
}