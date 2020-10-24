import supertest from "supertest";
import { CustomHttpClient } from "./CustomHttpClient";

export class SupertestClient implements CustomHttpClient {

    postRequest(host: string, endpoint: string, headers: Map<string, string>, body: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    putRequest(host: string, endpoint: string, headers: Map<string, string>, body: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    deleteRequest(host: string, endpoint: string, headers: Map<string, string>): Promise<any> {
        throw new Error("Method not implemented.");
    }

    getRequest(host: string, endpoint: string, headers: Map<string, string>, query = ''): Promise<any> {
        let req = supertest(host).get(endpoint + query);
        this.setHeaders(req, headers);
        return req;
    }

    private setHeaders(req: supertest.Test, headers: Map<string, string>): supertest.Test {
        for (const header of headers.keys()) {
            req.set(header, headers.get(header)!)
        }
        return req;
    }
   
}