import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar} from 'react-native-paper';

import { Actions } from 'react-native-router-flux';


export default function Main() {

 

  return (
    <>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Principal" />
      </Appbar.Header>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  header: {
  },
});
