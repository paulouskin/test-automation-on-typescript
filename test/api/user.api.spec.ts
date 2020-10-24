import { expect } from "chai";
import supertest from "supertest"
import { UserAPI } from "../../src/api/apis/UserAPI";
import { Environment } from "../../src/api/envs/Environment";
import { SupertestClient } from "../../src/api/httpclient/SupertestClient";

describe('User API ', () => {
    it('should get user for specified userid',async () => {
        const userId: number = 4;
        const response: any = await supertest('https://reqres.in')
        .get(`/api/users/${userId}`);
        expect(response.status).to.be.equal(200);
        
    })

    it('should get user for specified userid - http client encapsulation',async () => {
        const userId: number = 4;
        const headers: Map<any, any> = new Map();
        headers.set('content-type','application/json');
        const client: SupertestClient = new SupertestClient();
        const response = await client.getRequest(
            'https://reqres.in',
            `/api/users/${userId}`,
            headers
        )
        expect(response.status).to.be.equal(200);
    })

    it('should get user for specified userid - api encapsulation',async () => {
        const userId = 4;
        const userApi = new UserAPI(Environment.getDefaultEnvironment());
        const response = await userApi.getUser(userId);
        expect(response.status).to.be.equal(200);
    })
})