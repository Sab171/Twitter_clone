import { Header, Text } from "@mantine/core";

export default function MainHeader() {
  return (
    <Header height={60} bg="dark.3" py={15} px={10}>
      <Text align="left" fw={600} fz={20} c="white">
        Home
      </Text>
    </Header>
  );
}
