import { Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={headerOptions} />
      <View style={styles.container}>
        <Text>This isAbout route</Text>
      </View>
    </SafeAreaView>
  );
}
const headerOptions = {
  title: "About",
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
