import React from 'react';
import { StyleSheet, } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {BottomNavigation , DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

// router
import Routes from './src/Routes'


export default function App() {

  //  bottom menu 
  const [index, setIndex] = React.useState(null);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'scheduling', title: 'Agendamento', icon: 'book' },
    { key: 'repository', title: 'Repositorio', icon: 'link' },
  ]);

  handleIndexChange = (_index) => {
    if (_index === 0) {
      Actions.main();
    } else if (_index === 1) {
      Actions.scheduling();
    } else if (_index === 2) {
      Actions.repository();
    } else {
      Actions.main();
    }
  }

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'red',
      accent: 'yellow',
    },
  };

  return (
    <PaperProvider theme={theme}>
      <Routes/>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={handleIndexChange}
      />
    </PaperProvider>
  );
}


const styles = StyleSheet.create({
  container: {
   
  },

  header: {

  },

  search:{
    padding: '2%',
  }
});
