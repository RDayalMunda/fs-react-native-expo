import { Link } from "expo-router";
import { SafeAreaView, Text } from "react-native";

export default function Dashboard() {
  return (
    <SafeAreaView>
      <Text>Dashboard</Text>
      <Link href="/about">About page</Link>
    </SafeAreaView>
  );
}
