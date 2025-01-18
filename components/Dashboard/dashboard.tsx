import { Link } from "expo-router";
import { SafeAreaView, Text, Button } from "react-native";
import { useAppContext } from "../../context/AppContext";

export default function Dashboard() {
  const { toggleLogin } = useAppContext();
  return (
    <SafeAreaView>
      <Text>Dashboard</Text>
      <Link href="/about">About page</Link>
      <Button title="Login" onPress={toggleLogin} />
    </SafeAreaView>
  );
}
