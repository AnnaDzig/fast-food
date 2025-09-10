import { View, Text, Button, Alert } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async () => {
    // const { email, password } = form;

    if (!form.email || !form.password)
      return Alert.alert(
        "Error",
        "Please enter valid email address & password."
      );

    setIsSubmitting(true);

    try {
      Alert.alert("Success", "User signed in succesfully");
      router.replace("/");
    } catch (error: any) {
      Alert.alert("Error", error.message);
      //Sentry.captureEvent(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <Text>signIn</Text>
      <Button title="Sign Up" onPress={() => router.push("/(auth)/sign-up")} />

      <CustomInput
        placeholder="Enter your email"
        value={form.email}
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
        label="Email"
        keyboardType="email-address"
      />
      <CustomInput
        placeholder="Enter your password"
        value={form.password}
        onChangeText={(text) =>
          setForm((prev) => ({ ...prev, password: text }))
        }
        label="Password"
        secureTextEntry={true}
      />
      <CustomButton title="Sign In" isLoading={isSubmitting} onPress={submit} />
      <View className="flex justify-center mt-5 flex-row gap-2">
        <Text className="base-regular text-gray-100">
          Don't have an account?
        </Text>
        <Button
          title="Sign In"
          onPress={() => router.push("/(auth)/sign-in")}
        />
      </View>
    </View>
  );
};

export default SignUp;
