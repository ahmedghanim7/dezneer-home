import { useState } from "react";
import { Link, router } from "expo-router";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Alert,
  Image,
  StyleSheet,
} from "react-native";

import { images } from "../../constants";
import { CustomButton, FormField } from "../../components";
// import { getCurrentUser, signIn } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";
import Screen from "@/components/Screen";
import { colors, spacing } from "@/theme";
import CustomText from "@/components/CustomText";
import { Formik } from "formik";

const SignIn = () => {
  // const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    console.log("SIGN_IN SUBMITTED");

    // if (form.email === "" || form.password === "") {
    //   Alert.alert("Error", "Please fill in all fields");
    // }
    // setIsSubmitting(true);
    // try {
    //   await signIn(form.email, form.password);
    //   const result = await getCurrentUser();
    //   setUser(result);
    //   setIsLogged(true);
    //   Alert.alert("Success", "User signed in successfully");
    //   router.replace("/home");
    // } catch (error: any) {
    //   Alert.alert("Error", error.message);
    // } finally {
    //   setIsSubmitting(false);
    // }
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

          <CustomText content="Sign in" variant="xLargeSemiBold" />
        </View>

        <Formik initialValues={{ email: "", password: "" }} onSubmit={() => {}}>
          {({ errors, touched, values, handleChange }) => {
            return (
              <View style={{ gap: spacing.large }}>
                <FormField
                  label="Email"
                  name="email"
                  value={values["email"]}
                  // onChangeText={(e) => setForm({ ...form, email: e })}
                  onChangeText={handleChange}
                  containerStyles={{ marginTop: spacing.small }}
                  keyboardType="email-address"
                  errors={errors}
                  touched={touched}
                />

                <FormField
                  label="Password"
                  name="password"
                  value={values["password"]}
                  onChangeText={handleChange}
                  containerStyles={{ marginTop: spacing.small }}
                  errors={errors}
                  touched={touched}
                  type="PASSWORD"
                />
                <CustomButton
                  title="Sign In"
                  onPress={submit}
                  containerStyles={{ marginTop: spacing.small }}
                  isLoading={isSubmitting}
                />
                <CustomText
                  content="Don't have an account?"
                  variant="smallMedium"
                >
                  <Link
                    href="/sign-up"
                    className="text-lg font-psemibold text-secondary"
                  >
                    <CustomText
                      touchable
                      color={colors.secondary.DEFAULT}
                      onPress={() => router.push("/sign-up")}
                      content="Signup"
                      variant="smallSemiBold"
                    />
                  </Link>
                </CustomText>
              </View>
            );
          }}
        </Formik>
      </View>
    </Screen>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    marginVertical: spacing.smaller,
    marginHorizontal: spacing.tiny,
    minHeight: Dimensions.get("window").height - 100,
  },
  topContainer: {
    gap: spacing.xxLarge,
    alignItems: "flex-start",
    marginBottom: spacing.xxLarge,
  },
});
