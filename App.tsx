import useCachedResources from './hooks/useCachedResources';
import React from 'react';
import { NativeBaseProvider, extendTheme, Box } from 'native-base';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {

    const theme = extendTheme({
      colors: {
        green: {
          100: '#567A04',
          200: '#D4CF6D'
        },
        purple: {
          100: '#54387F',
          200: '#9783A9',
          300: '#D7A3B6'
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
      </NativeBaseProvider>
    );
  }
}
