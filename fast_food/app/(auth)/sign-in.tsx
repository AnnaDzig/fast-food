import { View, Text, Button } from "react-native";
import React from "react";
import { router } from "expo-router";

const SignIn = () => {
  return (
    <View>
      <Text>signIn</Text>
      <Button title="Sign Up" onPress={() => router.push("/(auth)/sign-up")} />
    </View>
  );
};

export default SignIn;
