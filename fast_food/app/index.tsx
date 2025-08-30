import { SafeAreaView } from "react-native-safe-area-context";
import "./globals.css";
import { Text, View, FlatList, Pressable } from "react-native";
// eslint-disable-next-line import/no-unresolved
import { offers } from "@/constants";

export default function Index() {
  return (
    <SafeAreaView>
      <FlatList
        data={offers}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Pressable className="bg-amber-600">
                <Text>{item.title}</Text>
              </Pressable>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
