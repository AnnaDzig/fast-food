import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";
import React from "react";
import { Slot } from "expo-router";
import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
import { ImageBackground } from "expo-image";
import { images } from "../../constants";

export default function _layout() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView
        className="bg-white h-full"
        keyboardShouldPersistTaps="handled">
        <View
          className="w-full relative"
          style={{ height: Dimensions.get("screen").height / 2.25 }}>
          <ImageBackground
            source={images.loginGraphic}
            className="size-full rounded-b-lg"
            resizeMode="stretch"
          />
        </View>
      </ScrollView>
      <Slot />
    </KeyboardAvoidingView>
  );
}
