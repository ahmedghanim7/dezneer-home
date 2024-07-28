import { router } from "expo-router";
import { View, Image, StyleSheet } from "react-native";

import { images } from "../constants";
import { CustomButton, Loader } from "../components";
import { colors, spacing } from "@/theme";
import CustomText from "@/components/CustomText";
import Screen from "@/components/Screen";
// import { useGlobalContext } from "../context/GlobalProvider";
const Welcome = () => {
  // const { loading, isLogged } = useGlobalContext();

  // if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <Screen withStatusBar>
      <Loader isLoading={false} />
      <View style={styles.viewContainer}>
        <Image source={images.logo} resizeMode="contain" />
        <Image
          source={images.cards}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={{ position: "relative", marginTop: spacing.tiny }}>
          <CustomText
            content={`Discover Endless\nPossibilities with`}
            variant="xLargeMedium"
          >
            <CustomText variant="xLargeMedium" content={`Aora`} />
          </CustomText>
          <Image
            source={images.path}
            style={styles.aroaPath}
            resizeMode="contain"
          />
        </View>
        <CustomText
          variant="mediumRegular"
          color={colors.gray[400]}
          content="Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora"
        />
        <CustomButton
          title="Continue with Email"
          onPress={() => router.push("/sign-in")}
          containerStyles={{ width: "100%", marginTop: 7 }}
          variant="mediumRegular"
        />
      </View>
    </Screen>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black["100"],
  },
  viewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: spacing.large,
    rowGap: 20,
  },
  image: {
    width: "70%",
    height: 140,
  },
  aroaPath: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 70,
    height: 7,
  },
});
