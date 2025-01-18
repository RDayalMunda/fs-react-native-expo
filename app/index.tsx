import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>This is home route</Text>
      <Link href="/about">About page</Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
