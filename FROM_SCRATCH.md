# react-native app from scratch!

Read the official documentation [here](https://docs.expo.dev/get-started/create-a-project/).

## 1. The Initial Setup

- Node v20.17.0
- NPM v10.8.2

Use this command to create an expo app with router feature

```bash
npx create-expo-app@latest -e with-router
```

Use any name for the project. I am using `cardventure`. And I will use `cardventure` to refer to the project from now on.

It would ask for the name of the project.
I have used `cardventure` as the name of the project and the directory.,
cd into the folder.

```bash
cd cardventure
npm i axios react-native-dotenv
```

- Use `npm start` command to start the application.
- When running, see if there were any discrepencies in the version of the package used. There should not be any, but if there is, make changes to `package.json` file accordingly
- Use "CTRL+C" to exit the application.

## 2. Setting up typescript

- I will be adding TypeScript to our application. Create a `babel.js` file in the root directory. and paste the following lines.

```bash
module.exports = function(api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
    };
  };
```

- Make few changes in package.json file. Add the Typescript packages in the dev dependencies.

```bash
  "devDependencies": {
    "@babel/core": "^7.20.0",
    "@types/react": "~18.3.12",
    "@types/react-native": "~0.70.6",
    "typescript": "~5.3.3"
  },
```

- create a folder named `app` in the root of your project directory. In my case it is in `carventure` folder.
- Inside this app folder, create 2 files, `index.js` & `_layout.js`.

## Creating our base route

- Remember, Expo use file bases routing system. And the base route file is the `index.tsx`, making the route `/`
- In our application we need to have a base layout file. Create a file named `_layout.tsx`.

This is content of `index.tsx`.

```bash
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>This is home route</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

This is content for `_layout.tsx`

```bash
import { Stack } from "expo-router"

export default function RootLayout() {
    return (
        <Stack />
    )
  }
```

### Creating other routes

- If we create a file named `about.tsx`, the route for this file would be `/about`.
- But instead of that We would create a folder named `about`. Then inside it we would create a file named `index.tsx`

```bash
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>This isAbout route</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

But how are we supposed to open this page. For that we need Links.
Lets create a link to `/about` from the base route `/`.
Now in the `index.tsx` file let import Link from `expo-router`

```bash
import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>This is home route</Text>
      <Link href="/about">About page</Link>
    </View>
  );
}

const styles = StyleSheet.create({
	// use the original styles
});
```

Some fixes you would like. In the router header you would see `about/index` as the title of the route.
New content of the `about/index.tsx` file

```bash
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
```

Another thing you might notice that the status bar of your device is not visible in your application.
To fix this use the `expo-status-bar` in your app

```bash
import { StatusBar } from 'expo-status-bar';
...
      <StatusBar style="auto" />
...
```

If you want to have this in all the routes. Just do this only once in your `index.tsx` file and it would be inherited in all the routes.

## END good luck
