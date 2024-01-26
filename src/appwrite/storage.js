import { Client, ID, Storage, Account } from "appwrite";

import conf from '../conf/conf';


export class StorageService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
        this.bucket = new Storage(this.client);
    }
    async uploadImage() {
       try {
         const promise =await this.bucket.createFile(conf.appwriteProposalImageBucketId, ID.unique(), document.getElementById('Promisee_Image').files[0]);
         if (promise) {
             return promise.$id
        }
        return null;
       } catch (error) {
        console.log(error);
       }
    }

    async getImage({imageID}) {
        try {
            
            const promise =await this.bucket.getFile(conf.appwriteProposalImageBucketId, imageID);
            if (promise) {
                return promise
                
            }
            return null;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteImage({fileId}) {
        try {
            
            const promise =await this.bucket.deleteFile(conf.appwriteProposalImageBucketId, fileId);
            promise.then((res)=>{
                console.log(res);
                return res;
            })
            .catch((error)=>{
                console.log(error);
                return null;
            })
        } catch (error) {
            console.log(error);
        }
    }

    imagePreview({imageID}) {
        try {
                const promise = this.bucket.getFilePreview(conf.appwriteProposalImageBucketId, imageID);
            if (promise) {
                return promise
            }
        } catch (error) {
            console.log(error);
        }
    }

}
const storageService = new StorageService();
export default storageService;