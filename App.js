import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Linking, Alert } from 'react-native';

export default function App() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      const url = `es:${query}`;
      Linking.openURL(url).catch(() => {
        Alert.alert('Error', 'Could not open Everything Search. Is it installed?');
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search Everything..."
          placeholderTextColor="#888"
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch} // press Enter to trigger
        />
        <Text style={styles.title}>My Files</Text>
      </View>
      <View style={styles.content}>
        <Text>Type and press enter to search in Everything!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    paddingHorizontal: 15,
  },
});