import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SeeDonationCard = ({ title, description, category }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.description}>{category}</Text>

      <View style={styles.buttonContainer}>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'gray'
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    color: 'gray'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
  },
  approveButton: {
    backgroundColor: 'green',
    marginRight: 8,
  },
  rejectButton: {
    backgroundColor: 'red',
    marginLeft: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SeeDonationCard;
