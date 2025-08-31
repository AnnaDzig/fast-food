import { Platform } from "react-native";

export const appwriteConfig = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  platform: "com.cv.foodordering",
  projectId: process.env.EXPO_PUBLIC_APPWRITE_ID,
};
