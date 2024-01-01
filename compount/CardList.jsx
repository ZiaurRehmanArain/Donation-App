import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardList = ({ name, cnic, category, categoryDetail, status, Phone }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.row}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>CNIC:</Text>
        <Text style={styles.value}>{cnic}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Category:</Text>
        <Text style={styles.value}>{Phone}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Category:</Text>
        <Text style={styles.value}>{category}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Category Detail:</Text>
        <Text style={styles.value}>{categoryDetail}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Status:</Text>
        <Text style={styles.value}>{status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
    color: 'gray'
  },
  value: {
    flex: 2,
    color: 'gray'

  },
});

export default CardList;
