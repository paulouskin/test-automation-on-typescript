export interface CustomHttpClient {
    getRequest(host: string, endpoint: string, headers: Map<any, any>, query?: string): Promise<any>;
    postRequest(host: string, endpoint: string, headers: Map<string, string>, body: any): Promise<any>;
    putRequest(host: string, endpoint: string, headers: Map<string, string>, body: any): Promise<any>;
    deleteRequest(host: string, endpoint: string, headers: Map<string, string>): Promise<any>;
}