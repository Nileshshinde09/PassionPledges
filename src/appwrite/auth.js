import { Client,ID,Storage,Account } from "appwrite";

import conf from '../conf/conf'


export class AuthService{
    client= new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.account=new Account(this.client)
        this.bucket = new Storage(this.client);
    }

    async createAccount({email,password,name}){
        try {
            const age=20;
            const sex='Male'
            const userAccount = await this.account.create(ID.unique(),email,password,name,age,sex)
            if(userAccount){
                //use another method
                console.log(userAccount);
                return true;
            }
            else{
                return userAccount;
            }
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    async login({email,password}){
        try {
            const userSession =await this.account.createEmailSession(email,password);
            return userSession;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
const authService= new AuthService();
export default authService;