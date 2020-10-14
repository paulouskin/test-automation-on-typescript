import { Environments } from "../envs/Environments";
import { CustomHttpClient } from "../httpclient/CustomHttpClient";

export class UserAPI {

    private readonly endpoint = '/api/users/';
    private readonly headers: Map<any, any> = new Map;

    constructor (private client: CustomHttpClient) {
        this.headers.set('Content-Type','application/json');
    }

    getUser (userId: number): Promise<any> {
        return this.client.getRequest (
            Environments.DEV,
            this.endpoint + userId,
            this.headers,
        )
    }

}