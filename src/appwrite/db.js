import { Client, ID, Databases, Account ,Query } from "appwrite";

import conf from '../conf/conf'

export class DBService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
        this.databases = new Databases(this.client);
    }

    async createProposal({ userId, appearance, Title, content, imageID, Type, promiseeName, optGender }) {
        try {

            const promise = await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteProposalCardCollectionId, ID.unique(), { userId, appearance, Title, content, imageID, Type, promiseeName, optGender });
            if (promise) {
                return promise
            }

        } catch (error) {
            console.log(error);
        }
    }

    async getProposal({ proposalId }) {
        try {
            if (proposalId) {
                const promise = await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteProposalCardCollectionId, proposalId);
                if (promise) {
                    return promise
                }



            }

        } catch (error) {
            console.log(error);
        }
    }

    async listProposal({userId}) {
        try {
            if (userId) {
                const promise = await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteProposalCardCollectionId,
                    [
                        Query.equal("userId", [userId])
                    ]
                    );
                    if (promise) {
                        return promise
                    }
        }
        return null;


        } catch (error) {
            console.log(error);
        }
    }

    async deleteProposal({ proposalId }) {
        try {
            if (proposalId) {
                const promise = await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteProposalCardCollectionId, proposalId);
                if (promise) {
                    return promise;
                }

            }

        } catch (error) {
            console.log(error);
            return false;
        }
    }
}
const dbService = new DBService();

export default dbService;