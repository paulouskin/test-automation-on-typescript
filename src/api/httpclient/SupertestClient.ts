import supertest from "supertest";
import { CustomHttpClient } from "./CustomHttpClient";

export class SupertestClient implements CustomHttpClient {
    
    postRequest(host: string, endpoint: string, headers: Map<string, string>, body: any, cookies?: Map<string, string>): Promise<any> {
        throw new Error("Method not implemented.");
    }
    putRequest(host: string, endpoint: string, headers: Map<string, string>, body: any, cookies?: Map<string, string>): Promise<any> {
        throw new Error("Method not implemented.");
    }
    deleteRequest(host: string, endpoint: string, headers: Map<string, string>, cookies?: Map<string, string>): Promise<any> {
        throw new Error("Method not implemented.");
    }

    getRequest(host: string, endpoint: string, headers: Map<string, string>, query = '', cookies?: Map<string, string>): Promise<any> {
        let req = supertest(host).get(endpoint + query);
        this.setHeaders(req, headers);
        if (cookies) { this.setCookies(req, cookies) };
        return req;
    }

    private setHeaders(req: supertest.Test, headers: Map<string, string>): supertest.Test {
        for (const header of headers.keys()) {
            req.set(header, headers.get(header)!)
        }
        return req;
    }

    private setCookies(req: supertest.Test, cookies: Map<string, string>): supertest.Test {
        const cookiesArray = new Array<string>();
        cookies.forEach((k,v) => cookiesArray.push(`${k}=${v}`));
        return req.set('Cookie', cookiesArray);
    }
   
}