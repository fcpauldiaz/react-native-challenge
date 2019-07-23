import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';


const Card = ({ title, description, image_url }) => (
  <View style={styles.container}>
    <Image source={{ uri: image_url }} style={styles.photo} />
    <View style={styles.container_text}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

export default Card;
