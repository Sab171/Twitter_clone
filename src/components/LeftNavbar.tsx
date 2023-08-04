import { Navbar, Image, MediaQuery, useMantineTheme } from "@mantine/core";
import logo from "../assets/goose-logo.png";
import { SchemeToggle } from "./SchemeToggle";

export default function LeftNavbar() {
  const theme = useMantineTheme();

  return (
    <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
      <Navbar
        bg="dark.3"
        hiddenBreakpoint="sm"
        width={{ sm: 150, lg: 300 }}
        styles={{ root: { borderRight: `1px solid ${theme.colors.dark[4]}` } }}
      >
        <Navbar.Section p={15}>
          <Image src={logo} alt="goose" width={30} />
        </Navbar.Section>
        {/* <Button
                variant="subtle"
                component={Link}
                leftIcon={<IconChevronLeft size={15} />}
                to="/login"
                color="dark.5"
                fz={12}
                mt={15}
                mb={40}
              >
                Back to login
              </Button> */}
        <Navbar.Section>
          <SchemeToggle />
        </Navbar.Section>
      </Navbar>
    </MediaQuery>
  );
}
