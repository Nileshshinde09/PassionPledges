const conf={
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteProposalCardCollectionId:String(import.meta.env.VITE_APPWRITE_proposalCard_COLLECTION_ID),
    appwriteUserProposalInfoCollectionId:String(import.meta.env.VITE_APPWRITE_userProposalInfo_COLLECTION_ID),
    appwriteSongBucketId:String(import.meta.env.VITE_APPWRITE_song_BUCKET_ID),
    appwriteProposalImageBucketId:String(import.meta.env.VITE_APPWRITE_proposalImage_BUCKET_ID)

}

export default conf;



