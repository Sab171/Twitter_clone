import { Center } from "@mantine/core";
import MainShell from "./components/MainShell";

function Overview() {
  return (
    <MainShell>
      <Center h="100%">
        <iframe
          src="https://giphy.com/embed/jsG3uqzhSV59rRBFdr/video"
          height="600px"
          width="100%"
        ></iframe>
      </Center>
    </MainShell>
  );
}

export default Overview;
