export class Queue<T> {

    private _store: T[] = [];

    constructor(items: Array<T>  = []) {
        this._store.push(...items);
    }

    push(val: T) {
        this._store.push(val);
    }

    pop(): T | undefined {
        return this._store.shift();
    }

    isEmpty(): boolean {
        return this.size() === 0;
    }

    size(): number {
        return this._store.length;
    }

}