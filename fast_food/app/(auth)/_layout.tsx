import {
  View,
  KeyboardAvoidingView,
  Platform,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import { Slot } from "expo-router";
import { ImageBackground } from "expo-image";

import { images } from "../../constants/index";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

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
            contentFit="fill"
          />
          <Image
            source={images.logo}
            className="self-center size-48 absolute -bottom-16 z-10"
          />
        </View>
        <CustomInput />
        <CustomButton />
      </ScrollView>
      <Slot />
    </KeyboardAvoidingView>
  );
}
