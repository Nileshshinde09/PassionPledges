import storageService from "../appwrite/storage"
const getImagePreview=({imageID})=>{
    if (imageID) {
        const previewImage = storageService.imagePreview({imageID})
        return previewImage.href
    }
}

export default getImagePreview;