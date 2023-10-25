# Prerequisite
First install the dependencies running `yarn install`, then make sure to build the package using `yarn build` and add the package as a dependency to the package/app you want to consume it from (could be the `app` or `ui` package) like so:
```
"dependencies": {
  "@tamagui-google-fonts/courier-prime": "*"
}
```
## Usage
### Expo
  
Add this to the root of your file:
    
```ts
import { useFonts } from 'expo-font'

export default function App() {
  const [loaded] = useFonts({
    CourierPrime: require('@tamagui-google-fonts/courier-prime/fonts/CourierPrime-Regular.ttf'),
    CourierPrimeItalic: require('@tamagui-google-fonts/courier-prime/fonts/CourierPrime-Italic.ttf'),
    CourierPrimeBold: require('@tamagui-google-fonts/courier-prime/fonts/CourierPrime-Bold.ttf'),
    CourierPrimeBoldItalic: require('@tamagui-google-fonts/courier-prime/fonts/CourierPrime-BoldItalic.ttf'),
  })
// ...
```

## Web

Get the font's script (`<link>` or `@import`) and add it to `<head>` from [here](https://fonts.google.com/specimen/Courier+Prime)


## Next.js Font (next/font/google)

Import the font from `next/font/google` and give it a variable name in your `_app.tsx` like so:

```ts
import { CourierPrime } from 'next/font/google' // the casing might differ

const font = CourierPrime({
  variable: '--my-font',
})
```

Add the variable style in `_app.tsx`:

```tsx
<div className={font.variable}>
  {*/ ...rest of your _app.tsx tree */}
</div>
```

Then go to the generated font package and update `family` with the variable.

So, change it from:
```ts
return createFont({
    family: isWeb
      ? '"Courier Prime", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
      : 'Courier Prime',
```

To:
```ts
return createFont({
    family: isWeb
      ? 'var(--my-font), -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
      : 'Courier Prime',
```


## Usage in config

```ts
import { createCourierPrimeFont } from '@tamagui-google-fonts/courier-prime' 

export const myFont = createCourierPrimeFont(
  {
    face: {
    "400": {
        "normal": "CourierPrime",
        "italic": "CourierPrimeBold"
    },
    "700": {
        "normal": "CourierPrimeItalic",
        "italic": "CourierPrimeBoldItalic"
    }
}
        },
  {
    // customize the size and line height scaling to your own needs
    // sizeSize: (size) => Math.round(size * 1.1),
    // sizeLineHeight: (size) => size + 5,
  }
)
```

NOTE: these instructions are auto-generated and might not be accurate with some fonts since not all fonts share the same conventions. you may need to edit them out to get them to work.
