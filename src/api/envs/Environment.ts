import { Environments } from "./Environments";

export class Environment {

    private _host: string;
    private _port: number | undefined;

    constructor (host: string, port?: number | undefined) {
        this._host = host;
        this._port = port;
    }

    static getDefaultEnvironment(): Environment {
        const host: string = process.env.npm_config_host || Environments.DEV;
        return new Environment(host);
    }

    get host() {
        return this._host;
    }

    get port() {
        return this._port;
    }

    get environment() {
        return  this._port !== undefined ? this._host + this._port?.toString() : this._host;
    }
}