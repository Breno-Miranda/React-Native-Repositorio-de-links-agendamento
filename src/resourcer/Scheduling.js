import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider, Appbar, List, Searchbar } from 'react-native-paper';

export default function Scheduling() {

  const _goBack = () => {
    Actions.main()
  };

  const _handleSearch = () => alert('pesquisa')

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

 

  return (
    <>
    <Appbar.Header style={styles.header}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Agendamento" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
    </Appbar.Header>

    <View style={styles.container}>
      <Searchbar style={styles.search}
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
    </>
  );
}


const styles = StyleSheet.create({
  container: {

  },

  header: {

  },

  search: {
    padding: '2%',
  }
});
