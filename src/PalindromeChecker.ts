import { Deque } from "./data_structures/Deque";

export class PalindromeChecker {
    
    private deque: Deque<string>;

    constructor () {
        this.deque = new Deque();
    }

    isPalindrome(candidate: string): boolean {
        let isEqual = true;
        for (const char of candidate) {
            this.deque.addFront(char);
        }
        while(this.deque.size() > 0) {
            const firstChar = this.deque.peekFront();
            const lastChar = this.deque.peekBack();
            if (firstChar !== lastChar) {
                return false;
            }
        }
        return isEqual;
    }

    isPalindromeRecursive(candidate: string): boolean {
        if(candidate.length === 0) {
            return true;
        }
        const firstChar = candidate.charAt(0);
        const lastChar = candidate.charAt(candidate.length - 1);
        if (firstChar !== lastChar) {
            return false
        } else {
            const newCandidate = candidate.substring(1, candidate.length - 1);
            return this.isPalindromeRecursive(newCandidate);
        }    
    }
}