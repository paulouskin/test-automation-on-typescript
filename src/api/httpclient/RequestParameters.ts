export class RequestParameters {

    private _headers: Map<string, string>;
    private _cookies: Map<string, string>;

    constructor (headers: Map<string, string>, cookies: Map<string, string>) {
        this._cookies = cookies;
        this._headers = headers;
    }

    static getDefaultRequestParameters(): RequestParameters {
        const headers = new Map<string, string>()
            .set('Content-Type','application/json');
        return new RequestParameters(headers, new Map<string, string>());
    }

    get headers() {
        return this._headers;
    }

    get cookies() {
        return this._cookies;
    }

    addHeader(key: string, value: string) {
        this._headers.set(key, value);
    }

    removeHeader(key: string):boolean {
        return this._headers.delete(key);
    }

    addCookie(key: string, value: string) {
        this._cookies.set(key, value);
    }

    removeCookie(key: string):boolean {
        return this._cookies.delete(key);
    }

}