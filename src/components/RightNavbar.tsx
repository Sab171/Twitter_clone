import { Aside, Text, MediaQuery, useMantineTheme } from "@mantine/core";

export default function RightNavbar() {
  const theme = useMantineTheme();
  return (
    <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
      <Aside
        bg="dark.3"
        width={{ sm: 150, lg: 300 }}
        hiddenBreakpoint="sm"
        styles={{ root: { borderLeft: `1px solid ${theme.colors.dark[4]}` } }}
      >
        <Text align="center">Right Navbar</Text>
      </Aside>
    </MediaQuery>
  );
}
