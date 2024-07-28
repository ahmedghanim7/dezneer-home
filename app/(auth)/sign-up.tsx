import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
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
// import { createUser } from "../../lib/appwrite";
import { CustomButton, FormField } from "../../components";
import Screen from "@/components/Screen";
import { colors, spacing } from "@/theme";
import CustomText from "@/components/CustomText";
import { Formik } from "formik";
// import { useGlobalContext } from "../../context/GlobalProvider";

const SignUp = () => {
  // const { setUser, setIsLogged } = useGlobalContext();

  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    console.log("SIGN_UP SUBMITTED");

    // if (form.username === "" || form.email === "" || form.password === "") {
    //   Alert.alert("Error", "Please fill in all fields");
    // }

    // setSubmitting(true);
    // try {
    //   const result = await createUser(form.email, form.password, form.username);
    //   setUser(result);
    //   setIsLogged(true);

    //   router.replace("/home");
    // } catch (error) {
    //   Alert.alert("Error", error.message);
    // } finally {
    //   setSubmitting(false);
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
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          onSubmit={() => {}}
        >
          {({ errors, touched, values, handleChange }) => {
            return (
              <View style={{ gap: spacing.normal }}>
                <FormField
                  label="Username"
                  name="username"
                  value={values["email"]}
                  onChangeText={handleChange}
                  containerStyles={{ marginTop: spacing.normal }}
                  keyboardType="default"
                  errors={errors}
                  touched={touched}
                />
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
                  title="Sign Up"
                  onPress={submit}
                  containerStyles={{ marginTop: spacing.small }}
                  isLoading={isSubmitting}
                />
                <CustomText
                  content="Already have an account?"
                  variant="smallMedium"
                >
                  <Link
                    href="/sign-up"
                    className="text-lg font-psemibold text-secondary"
                  >
                    <CustomText
                      touchable
                      color={colors.secondary.DEFAULT}
                      onPress={() => router.push("/sign-in")}
                      content="Login"
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

export default SignUp;

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
