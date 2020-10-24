import { Environment } from "../envs/Environment";
import { Environments } from "../envs/Environments";
import { CustomHttpClient } from "../httpclient/CustomHttpClient";
import { RequestParameters } from "../httpclient/RequestParameters";
import { SupertestClient } from "../httpclient/SupertestClient";

export class UserAPI {

    private readonly endpoint = '/api/users/';
    private client: CustomHttpClient;
    private env: Environment;
    private requestParameters: RequestParameters;

    constructor (env: Environment) {
        this.env = env;
        this.client = new SupertestClient();
        this.requestParameters = RequestParameters.getDefaultRequestParameters();
    }

    getUser (userId: number): Promise<any> {
        return this.client.getRequest (
            this.env.environment,
            this.endpoint + userId,
            this.requestParameters.headers,
        )
    }

}