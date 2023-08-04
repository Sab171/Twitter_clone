import { AppShell } from "@mantine/core";
import MainHeader from "./MainHeader";
// import MainFooter from "./MainFooter";
import LeftNavbar from "./LeftNavbar";
import { ReactNode } from "react";
import RightNavbar from "./RightNavbar";

export default function MainShell({ children }: { children: ReactNode }) {
  return (
    <AppShell
      bg="dark.2"
      hidden={false}
      header={<MainHeader />}
      // footer={<MainFooter />}
      navbar={<LeftNavbar />}
      aside={<RightNavbar />}
      layout="alt"
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
    >
      {children}
    </AppShell>
  );
}
