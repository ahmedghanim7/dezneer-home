import {
  Account,
  Avatars,
  Client,
  Databases,
  Storage,
} from "react-native-appwrite";

export const appWriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.ahmedghanim.anora",
  projectId: "66a42fbd000ff36bc1ae",
  storageId: "66a65f66002d94a3e3e5",
  databaseId: "660d14b2b809e838959a",
  userCollectionId: "66a65b33000bbd806d86",
  videoCollectionId: "660d157fcb8675efe308",
};

export const appWriteClient = new Client();
export const appWriteAccount = new Account(appWriteClient);
export const appWriteStorage = new Storage(appWriteClient);
export const appWriteAvatars = new Avatars(appWriteClient);
export const appWriteDatabases = new Databases(appWriteClient);

appWriteClient
  .setEndpoint(appWriteConfig.endpoint)
  .setProject(appWriteConfig.projectId)
  .setPlatform(appWriteConfig.platform);
