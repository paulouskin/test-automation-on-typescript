export class Deque<T> {

    private _store: T[] = [];

    constructor(args: T[] = []) {
        this._store.push(...args);
    }

    size(): number {
        return this._store.length;
    }

    isEmpty(): boolean {
        return this.size() === 0;
    }

    addFront(element: T): void {
        this._store.unshift(element);
    }

    addBack(element: T): void {
        this._store.push(element);
    }

    removeFront(): void {
        this._store.shift();
    }

    removeBack(): void {
        this._store.pop();
    }

    peekFront(): T | undefined {
        return this._store.shift();
    }

    peekBack(): T | undefined {
        return this._store.pop();
    }
}