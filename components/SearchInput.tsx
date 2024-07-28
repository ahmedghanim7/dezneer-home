import { useState } from "react";
import { router, usePathname } from "expo-router";
import {
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  StyleSheet,
} from "react-native";

import { icons } from "../constants";
import { colors, spacing } from "@/theme";

const SearchInput = ({ initialQuery }: { initialQuery?: string }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");

  const searchPressHandler = () => {
    if (query === "")
      return Alert.alert(
        "Missing Query",
        "Please input something to search results across database"
      );
    if (pathname.startsWith("/search")) router.setParams({ query });
    else router.push(`/search/${query}`);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={{ marginTop: -1, flex: 1, color: colors.white }}
        value={query}
        placeholder="Search a video topic"
        placeholderTextColor="#CDCDE0"
        onChangeText={(e) => setQuery(e)}
      />
      <TouchableOpacity onPress={searchPressHandler}>
        <Image
          source={icons.search}
          style={{ width: spacing.smaller, height: spacing.smaller }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: spacing.tiny,
    width: "100%",
    height: spacing.large,
    paddingHorizontal: spacing.tiny,
    backgroundColor: colors.black.DEFAULT,
    borderRadius: spacing.tiny,
    borderWidth: 2,
    borderColor: colors.black.DEFAULT,
  },
});
