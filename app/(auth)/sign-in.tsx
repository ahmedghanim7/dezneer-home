import { useState } from "react";
import { Link, router } from "expo-router";
import { View, Dimensions, Image, StyleSheet } from "react-native";
import { images } from "../../constants";
import { colors, spacing } from "@/theme";
import { SignInSchema } from "@/utils/validation";
import { getCurrentUser, signIn, signOut } from "@/service/app-write/auth";
import { useAppDispatch, useAppSelector } from "@/store";
import { setUser } from "@/store/features/user";
import { IFormField, SignInParams } from "@/@types";
import { CustomText, FormikForm, Screen } from "@/components/common";
import Toast from "react-native-toast-message";

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useAppDispatch();

  const signInHandler = async ({ email, password }: SignInParams) => {
    setIsSubmitting(true);
    // router.replace("/home");
    try {
      await signIn({ email, password });
      const user = await getCurrentUser();
      dispatch(
        setUser({
          $id: user?.$id || "",
          accountId: user?.accountId,
          avatar: user?.avatar,
          email: user?.email,
          username: user?.username,
        })
      );
      // Alert.alert("Success", "User signed in successfully");
      router.replace("/home");
    } catch (error: any) {
      console.log({ error });
      // Toast.show({
      //   type: "error",
      //   text1: error?.message,
      // });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Screen>
      <View style={[styles.container]}>
        <View style={styles.topContainer}>
          <Image
            source={images.logo}
            resizeMode="contain"
            style={{ width: 115, height: 34 }}
          />
          <CustomText content={`Sign In`} variant="xLargeBold" />
        </View>

        <FormikForm
          fields={formFields}
          initialValues={{
            email: "test@test.com",
            password: "Ahmed123@",
          }}
          onSubmit={signInHandler}
          submitButtonLabel="Log In"
          validationSchema={SignInSchema}
          submitButtonState={isSubmitting}
        />
        <CustomText content="Don't have an account?" variant="smallRegular">
          <Link href="/sign-up">
            <CustomText
              color={colors.secondary.DEFAULT}
              content="Signup"
              variant="smallSemiBold"
            />
          </Link>
        </CustomText>
      </View>
    </Screen>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginVertical: spacing.xLarge,
    minHeight: Dimensions.get("window").height - 100,
  },
  topContainer: {
    gap: spacing.xxLarge,
    alignItems: "flex-start",
    marginBottom: spacing.xxLarge,
  },
});

const formFields: IFormField[] = [
  {
    label: "Email",
    name: "email",
  },
  {
    label: "Password",
    name: "password",
    type: "PASSWORD",
  },
];
