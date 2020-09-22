import { expect } from "chai";
import { PalindromeChecker } from "../src/PalindromeChecker";

describe('Palindrome checker tests', () => {

    let checker: PalindromeChecker;

    beforeEach('Create palindrome checker instance', () => {
        checker = new PalindromeChecker();
    })

    it('should return true for valid palindrome string', () => {
        const palindrome = 'abccba';
        expect(checker.isPalindrome(palindrome)).to.equal(true);
    });

    it('should return false for even length string', () => {
        const palindrome = 'abccb';
        expect(checker.isPalindrome(palindrome)).to.equal(false);
    });

    it('should return true for valid palindrome string - recursive', () => {
        const palindrome = 'abccba';
        expect(checker.isPalindromeRecursive(palindrome)).to.equal(true);
    });

    it('should return false for non-palindromic string', () => {
        const nonPalindrome = 'abcdfg';
        expect(checker.isPalindrome(nonPalindrome)).to.equal(false);
    });

    it('should return false for non-palindromic string - recursive', () => {
        const nonPalindrome = 'abcdfg';
        expect(checker.isPalindromeRecursive(nonPalindrome)).to.equal(false);
    });

}); 