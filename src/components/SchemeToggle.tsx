import {
  Switch,
  Group,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

export function SchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <Group position="left" my={30} px={30}>
      <Switch
        checked={colorScheme === "dark"}
        onChange={() => toggleColorScheme()}
        size="md"
        onLabel={<IconSun color={theme.white} size="1.25rem" stroke={1.5} />}
        offLabel={
          <IconMoonStars
            color={theme.colors.gray[7]}
            size="1.25rem"
            stroke={1.5}
          />
        }
        color="dark"
      />
    </Group>
  );
}
