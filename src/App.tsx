import Overview from "./Overview.tsx";

import { useLocalStorage } from "@mantine/hooks";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "dark",
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
        // theme={{
        //   colorScheme: 'dark',
        //   colors: {
        //     // override dark colors to change them for all components
        //     dark: [
        //       '#d5d7e0',
        //       '#acaebf',
        //       '#8c8fa3',
        //       '#666980',
        //       '#4d4f66',
        //       '#34354a',
        //       '#2b2c3d',
        //       '#1d1e30',
        //       '#0c0d21',
        //       '#01010a',
        //     ],
        //   },
        // }}
      >
        <Overview />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
