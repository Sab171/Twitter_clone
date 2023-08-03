import { Navbar, Text, Image } from "@mantine/core";
import logo from "../assets/goose-logo.png";

export default function LeftNavbar() {
  return (
    <Navbar bg="dark.3" width={{ base: 300 }}>
      <Text align="center">Left Navbar</Text>
      <Navbar.Section>
        <Image src={logo} alt="goose" width={30} />
      </Navbar.Section>
    </Navbar>
  );
}
