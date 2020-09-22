import { Deque } from "../src/data_structures/Deque";
import { expect } from "chai";

describe('Deque unit tests', () => {

    let deque: Deque<number>;

    describe('Empty deque', () => {

        before('Create an empty deque', () => {
            deque = new Deque();
        });

        it('should have size equals to 0', () => {
            expect(deque.size()).to.equal(0);
        });
    
        it('should be empty', () => {
            expect(deque.isEmpty()).to.equal(true);
        });
    })

    describe('Deque', () => {
        let arr: Array<number>;

        beforeEach('Create a deque with elements', () => {
            arr = [1,2,3,4,6];
            deque = new Deque(arr);
        });

        it('should have size equal to length of constructor arguments array', () => {
            expect(deque.size()).to.equal(arr.length);
        });

        it('should not be empty', () => {
            expect(deque.isEmpty()).to.equal(false);
        });

        it('should add element to the front', () => {
            deque.addFront(10);
            expect(deque.size()).to.equal(arr.length + 1);
        });

        it('should remove element from the front', () => {
            deque.removeFront();
            expect(deque.size()).to.equal(arr.length - 1);
        });

        it('should remove and return the front element', () => {
            const frontElement = deque.peekFront();
            expect(frontElement).to.equal(arr[0]);
        });

        it('should add an element to the back', () => {
            deque.addBack(10);
            expect(deque.size()).to.equal(arr.length + 1);
        });

        it('should remove an element from the back', () => {
            deque.removeBack();
            expect(deque.size()).to.equal(arr.length - 1);
        });

        it('should remove and return the back element', () => { 
            const backElement = deque.peekBack();
            expect(backElement).to.equal(arr[arr.length - 1]);
        });
    })

    
})