export interface CustomHttpClient {
    getRequest(host: string, endpoint: string, headers: Map<string, string>, query?: string, cookies?: Map<string, string>): Promise<any>;
    postRequest(host: string, endpoint: string, headers: Map<string, string>, body: any, cookies?: Map<string, string>): Promise<any>;
    putRequest(host: string, endpoint: string, headers: Map<string, string>, body: any, cookies?: Map<string, string>): Promise<any>;
    deleteRequest(host: string, endpoint: string, headers: Map<string, string>, cookies?: Map<string, string>): Promise<any>;
}