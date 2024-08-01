import { useState } from "react";
import { Link, router } from "expo-router";
import { View, Dimensions, Alert, Image, StyleSheet } from "react-native";

import { images } from "../../constants";
import { colors, spacing } from "@/theme";
import { createUser } from "@/service/app-write/auth";
import { IFormField, SignUpParams } from "@/@types";
import { useAppDispatch } from "@/store";
import { setUser } from "@/store/features/user";
import { SignupSchema } from "@/utils/validation";
import { CustomText, FormikForm, Screen } from "@/components/common";

const SignUp = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const dispatch = useAppDispatch();

  const SignUpHandler = async (params: SignUpParams) => {
    console.log("SIGN_UP SUBMITTED");
    setSubmitting(true);
    try {
      const user = await createUser(params);
      const { accountId, $id, email, username, avatar } = user;
      dispatch(
        setUser({
          $id,
          accountId,
          avatar,
          email,
          username,
        })
      );
      router.replace("/home");
    } catch (error: any) {
      // Toast.show({
      //   type: "error",
      //   text1: error?.message,
      // });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image
            source={images.logo}
            resizeMode="contain"
            style={{ width: 115, height: 34 }}
          />
          <CustomText content={`Sign Up`} variant="xLargeBold" />
        </View>

        <FormikForm
          fields={formFields}
          initialValues={{
            username: "",
            email: "",
            password: "",
          }}
          onSubmit={SignUpHandler}
          submitButtonLabel="Sign Up"
          validationSchema={SignupSchema}
          submitButtonState={isSubmitting}
        />
        <CustomText content="Already have an account?" variant="smallRegular">
          <Link href="/sign-in">
            <CustomText
              color={colors.secondary.DEFAULT}
              content="Login"
              variant="smallSemiBold"
            />
          </Link>
        </CustomText>
      </View>
    </Screen>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
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
    label: "Username",
    name: "username",
  },
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
