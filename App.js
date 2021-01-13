import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigation from "./Components/Navigation/"

import theme from "./Utilities/theme"

export default function App() {
  return (
    <MainNavigation style={styles}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: 'center',
    justifyContent: 'center',
    height:"100%"
  },
});
