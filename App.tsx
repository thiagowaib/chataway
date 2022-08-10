import React from 'react';
import { NativeBaseProvider, extendTheme} from 'native-base';

import ScreenStack from './navigation/ScreenStack';

export default function App() {
    const theme = extendTheme({
      colors: {
        green: {
          100: '#117900',
          200: '#1A9C94'
        },
        secondary: {
          100: '#282828',
          200: '#A2A2A2',
          300: '#F5F5F5',
          400: '#FFFFFF',
        },
        semantic: {
          100: '#4ECE58',
          200: '#BB2D2D'
        }
      }
    })
    return (
      <NativeBaseProvider theme={theme}>
        <ScreenStack/>
      </NativeBaseProvider>
    );
}
