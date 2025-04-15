import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://littlelemon.com/logo.png' }}
        style={styles.logo}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel="Little Lemon Logo"
      />
      <Text style={styles.title}>Welcome to Little Lemon</Text>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={() => navigation.navigate('Subscribe')}
        accessibilityRole="button"
        accessibilityLabel="Go to Newsletter Subscription"
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    backgroundColor: '#f4ce14',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonPressed: {
    backgroundColor: '#d4b213',
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
  },
});
