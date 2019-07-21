import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: '#C0E8F9',
    elevation: 2
  },
  title: {
    fontSize: 16,
    color: '#000'
  },
  container_text: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12,
    justifyContent: 'center'
  },
  description: {
    fontSize: 11,
    fontStyle: 'italic'
  },
  photo: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    borderWidth: 3,
    borderColor: 'black'
  }
});

const Card = ({ title, description, image_url }) => (
  <View style={styles.container}>
    <Image source={{ uri: image_url }} style={styles.photo} />
    <View style={styles.container_text}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

export default Card;
