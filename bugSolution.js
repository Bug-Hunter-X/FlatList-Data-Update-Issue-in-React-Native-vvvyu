The solution is to create a new array instead of modifying the existing one.  This will change the reference of the data array, triggering a re-render of the FlatList.  This can be achieved by creating a copy of the array using the spread operator (...) or the slice() method, and then applying changes to this copy.

Here's how you can modify the provided code to fix the issue:

```javascript
// bugSolution.js

import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5]);

  const addData = () => {
    // Create a new array instead of modifying the existing one
    const newData = [...data, 6]; //Spread Operator creating a copy of the array
    setData(newData);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.toString()} />
      <Button title="Add Data" onPress={addData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default App;
```