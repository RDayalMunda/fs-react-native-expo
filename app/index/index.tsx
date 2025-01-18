import { StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

import Dashboard from "../../components/Dashboard/dashboard";
import Game from "../../components/CardVerse/game";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={headerOptions} />
      <StatusBar style="auto" />
      {configuration.isLoggedIn ? <Game /> : <Dashboard />}
    </SafeAreaView>
  );
}

const configuration = {
  isLoggedIn: true, // if true Show Game Page else show Dashboard
};

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
