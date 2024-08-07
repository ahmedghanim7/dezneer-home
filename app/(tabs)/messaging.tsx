import { Screen, Typography } from "@/components/common";
import ImageSlider from "@/components/timeline/ImageSlider";

const MessagingScreen = () => {
  return (
    <Screen px="none">
      <ImageSlider />
      {/* <Typography content={"MessagingScreen"} variant="smallRegular" /> */}
    </Screen>
  );
};

export default MessagingScreen;
