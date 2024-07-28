import { useState } from "react";
import * as DocumentPicker from "expo-document-picker";
import { CustomButton, FormField } from "../../components";
import { spacing } from "@/theme";
import CustomText from "@/components/CustomText";
import Screen from "@/components/Screen";
import UploadVideo from "@/components/create/UploadVideo";
import AddThumbnailImage from "@/components/create/AddThumbnailImage";

const Create = () => {
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    video: { localUri: "" },
    thumbnail: { localUri: "" },
    prompt: "",
  });

  const openPicker = async (mediaType: string) => {
    const result = await DocumentPicker.getDocumentAsync({
      type:
        mediaType === "image"
          ? ["image/png", "image/jpg"]
          : ["video/mp4", "video/gif"],
    });

    console.log({ result });

    // if (!result.canceled) {
    //   if (mediaType === "image") {
    //     setForm({
    //       ...form,
    //       thumbnail: result.assets[0],
    //     });
    //   }

    //   if (mediaType === "video") {
    //     setForm({
    //       ...form,
    //       video: result.assets[0],
    //     });
    //   }
    // } else {
    //   setTimeout(() => {
    //     Alert.alert("Document picked", JSON.stringify(result, null, 2));
    //   }, 100);
    // }
  };

  const submit = async () => {
    // if (
    //   (form.prompt === "") |
    //   (form.title === "") |
    //   !form.thumbnail |
    //   !form.video
    // ) {
    //   return Alert.alert("Please provide all fields");
    // }
    // setUploading(true);
    // try {
    //   await createVideoPost({
    //     ...form,
    //     userId: user.$id,
    //   });
    //   Alert.alert("Success", "Post uploaded successfully");
    //   router.push("/home");
    // } catch (error) {
    //   Alert.alert("Error", error.message);
    // } finally {
    //   setForm({
    //     title: "",
    //     video: null,
    //     thumbnail: null,
    //     prompt: "",
    //   });
    //   setUploading(false);
    // }
  };

  return (
    <Screen scrollable px="tiny" top="smaller" bottom="smaller">
      <CustomText content="Upload Video" variant="largeSemiBold" />

      <FormField
        label="Video Title"
        value={form.title}
        placeholder="Give your video a catchy title..."
        onChangeText={(e) => setForm({ ...form, title: e })}
        containerStyles={{ marginTop: spacing.medium - 2 }}
      />
      <UploadVideo
        openPicker={openPicker}
        video={form.video || { localUri: "" }}
      />
      <AddThumbnailImage
        openPicker={openPicker}
        thumbnail={form.video || { localUri: "" }}
      />

      <FormField
        label="AI Prompt"
        value={form.prompt}
        placeholder="The AI prompt of your video...."
        onChangeText={(e) => setForm({ ...form, prompt: e })}
        containerStyles={{ marginTop: spacing.small }}
      />

      <CustomButton
        title="Submit & Publish"
        onPress={submit}
        containerStyles={{ marginTop: spacing.small }}
        isLoading={uploading}
      />
    </Screen>
  );
};

export default Create;
