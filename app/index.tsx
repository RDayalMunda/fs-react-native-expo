import { StyleSheet, SafeAreaView, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

import Dashboard from "../components/Dashboard/dashboard";
import Game from "../components/CardVerse/game";
import { useAppContext } from "../context/AppContext";

export default function HomeScreen() {
  const { isLoggedIn } = useAppContext();
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={headerOptions} />
      <StatusBar style="auto" />
      {isLoggedIn ? <Game /> : <Dashboard />}
    </SafeAreaView>
  );
}

const headerOptions = {
  // title: "Home",
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
