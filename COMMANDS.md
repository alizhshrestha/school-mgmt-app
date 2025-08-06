## Dependencies to install And Step to configure
### React navigation drawer
```
    npm install @react-navigation/drawer
    npm install react-native-gesture-handler react-native-reanimated
    npm install expo-router react-native-safe-area-context react-native-screens
    npm install nativewind tailwindcss --save-dev

```

### Install nativewind and tailwindcss
```
npm install nativewind tailwindcss

npx tailwindcss init
```

### Create file globals.css inside app directory then create metro.config.js with following content
```
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./app/globals.css" });
```

### Add these lines to globals.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Create file nativewind-env.d.ts
```
/// <reference types="nativewind/types" />
```
### Edit tsconfig.json
```
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./*"
      ]
    }
  },
  "include": [
    "**/*.ts",
    "**/*.tsx",
    ".expo/types/**/*.ts",
    "expo-env.d.ts",
    "app/_layout.tsx",
    "nativewind-env.d.ts",
    "types/**/*.d.ts"
  ]
}
```

### Edit tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Create babel.config.js
```
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ]
  };
};


```

### To create metro.config.js
```
# This will allow Metro to convert Tailwind CSS styles into React Native styles:
npx expo customize metro.config.js

# copy below content
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);
module.exports = withNativeWind(config, { input: "./app/globals.css" });
```

### Import the globals.css file into your root layout app/_layout.tsx
```
import "./globals.css";
export default function RootLayout() {
return <Stack />;
 }
```

## To fresh start node_modules and everything
```
rm -rf node_modules
rm -f package-lock.json yarn.lock # Use rm -f package-lock.json if you use npm, or rm -f yarn.lock if you use yarn

npm install
```

## At last, Run app in dev server
```
npx expo start --clear

# r to reload
```