import { ID, Query } from "react-native-appwrite";
import { appWriteConfig, appWriteDatabases } from "./appwrite.config";
import { uploadFile } from "./files";

export async function createVideoPost(form: any) {
  console.log("createVideoPost", form);

  try {
    const [thumbnailUrl, videoUrl] = await Promise.all([
      uploadFile(form.thumbnail, "image"),
      uploadFile(form.video, "video"),
    ]);

    const newPost = await appWriteDatabases.createDocument(
      appWriteConfig.databaseId,
      appWriteConfig.videoCollectionId,
      ID.unique(),
      {
        title: form.title,
        thumbnail: thumbnailUrl,
        video: videoUrl,
        prompt: form.prompt,
        creator: form.userId,
      }
    );

    return newPost;
  } catch (error: any) {
    console.log("createVideoPost", { error });

    throw new Error(error);
  }
}

export async function getAllPosts() {
  try {
    const posts = await appWriteDatabases.listDocuments(
      appWriteConfig.databaseId,
      appWriteConfig.videoCollectionId
    );

    return posts.documents;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getUserPosts(userId: string) {
  try {
    const posts = await appWriteDatabases.listDocuments(
      appWriteConfig.databaseId,
      appWriteConfig.videoCollectionId,
      [Query.equal("creator", userId)]
    );

    return posts.documents;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function searchPosts(query: string) {
  try {
    const posts = await appWriteDatabases.listDocuments(
      appWriteConfig.databaseId,
      appWriteConfig.videoCollectionId,
      [Query.search("title", query)]
    );

    if (!posts) throw new Error("Something went wrong");

    return posts.documents;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getLatestPosts() {
  try {
    const posts = await appWriteDatabases.listDocuments(
      appWriteConfig.databaseId,
      appWriteConfig.videoCollectionId,
      [Query.orderDesc("$createdAt"), Query.limit(7)]
    );

    return posts.documents;
  } catch (error: any) {
    throw new Error(error);
  }
}
