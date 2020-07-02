import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider, Appbar, List , Searchbar } from 'react-native-paper';

export default function Login() {

  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

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

      <Appbar.Header style={styles.header}>
        {/* <Appbar.BackAction onPress={_goBack} /> */}
        <Appbar.Content title="Repositorio" />
        {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
        {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
      </Appbar.Header>

      <View style={styles.container}>
      <Searchbar  style={styles.search}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
        <List.Section title="Meus Links">

          
          <List.Accordion
            title="Uncontrolled Accordion"
            left={props => <List.Icon {...props} icon="folder" />}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Controlled Accordion"
            left={props => <List.Icon {...props} icon="folder" />}
            expanded={expanded}
            onPress={handlePress}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>

    

      </View>
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
