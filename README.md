1. Instalar Node.js no computador.

2. Instalar expo no computador:
npm install -g expo-cli

3. Criar projeto Expo:
npx create-expo-app <nome-do-projeto>

4. Babel.config.js

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};

5. Instalar as bibliotecas node:
npm install @react-navigation/native @react-navigation/stack

6. Instalar as bibliotecas expo: 
npx expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

7. Executar expo app:
npx expo start

# Sample Snack app

Open the `App.js` file to start writing some code. You can preview the changes directly on your phone or tablet by scanning the **QR code** or use the iOS or Android emulators. When you're done, click **Save** and share the link!

When you're ready to see everything that Expo provides (or if you want to use your own editor) you can **Download** your project and use it with [expo-cli](https://docs.expo.io/get-started/installation).

All projects created in Snack are publicly available, so you can easily share the link to this project via link, or embed it on a web page with the `<>` button.

If you're having problems, you can tweet to us [@expo](https://twitter.com/expo) or ask in our [forums](https://forums.expo.io/c/snack).

Snack is Open Source. You can find the code on the [GitHub repo](https://github.com/expo/snack).
