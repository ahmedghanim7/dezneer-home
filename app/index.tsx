import { Loader, Screen } from "@/components/common";
import { Redirect, router } from "expo-router";

const Splash = () => {
  if (true) return <Redirect href="/timeline" />;

  return (
    <Screen withStatusBar px="none" scrollable={false}>
      <Loader isLoading={true} />
    </Screen>
  );
};

export default Splash;
