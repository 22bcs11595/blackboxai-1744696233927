import React, { useState } from 'react';
import { View, Text, Image, TextInput, Pressable, Alert, StyleSheet } from 'react-native';

export default function SubscribeScreen() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    Alert.alert('Subscription Confirmed', `Thank you for subscribing with ${email}!`);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://littlelemon.com/logo.png' }}
        style={styles.logo}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel="Little Lemon Logo"
      />
      <Text style={styles.title}>Subscribe to our Newsletter</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email address"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        accessibilityLabel="Email address input"
      />
      <Pressable
        style={({ pressed }) => [
          styles.button,
          !email ? styles.buttonDisabled : null,
          pressed && email ? styles.buttonPressed : null,
        ]}
        onPress={handleSubscribe}
        disabled={!email}
        accessibilityRole="button"
        accessibilityLabel="Subscribe to newsletter"
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#f4ce14',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonDisabled: {
    backgroundColor: '#ddd',
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
