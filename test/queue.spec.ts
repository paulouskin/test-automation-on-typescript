import { Queue } from "../src/Queue"
import { expect } from "chai";

describe('Queue', () => {
    
    before('Test set up', () => {
        console.log('Here can be your test setup activities');
    });

    it('should have size equal to 0 after initialization without parameters', () => {
        const queue = new Queue<number> ();
        expect(queue.size()).to.equal(0);
    }) 
    
    it('should be empty after initialization with empty array', () => {
        const queue = new Queue<number> ([]);
        expect(queue.isEmpty()).to.equal(true);
    }) 

    it('should be initialized with constructor arguments', () => {
        const arr: Array<number> = [1,2,3,4,78];
        const queue = new Queue<number>(arr);
        expect(queue.size()).to.equal(arr.length);
    })

    it('should be able to add new element after initialization', () => {
        const queue = new Queue<number>();
        queue.push(2);
        queue.push(3);
        expect(queue.size()).to.equal(2);
        expect(queue.isEmpty()).to.equal(false);
    })

    it('should be able to pop element from the top', () => {
        const queue = new Queue<number>();
        queue.push(2);
        queue.push(3);
        expect(queue.pop()).to.equal(2);
    })
})