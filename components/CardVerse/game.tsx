import { SafeAreaView, Text, Button } from "react-native";
import { useAppContext } from "../../context/AppContext";

export default function Game() {
  const { isLoggedIn, toggleLogin } = useAppContext();
  return (
    <SafeAreaView>
      <Text>Game Page</Text>
      <Button title="Logout" onPress={toggleLogin} />
    </SafeAreaView>
  );
}
