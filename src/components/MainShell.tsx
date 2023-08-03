import { AppShell } from "@mantine/core";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import { ReactNode } from "react";

export default function MainShell({ children }: { children: ReactNode }) {
  return (
    <AppShell
      bg="dark.2"
      hidden={false}
      header={<MainHeader />}
      footer={<MainFooter />}
    >
      {children}
    </AppShell>
  );
}
