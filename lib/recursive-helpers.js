/**
 * @method findFactorial - finds the factorial of a number
 * @param number - the number to find the factorial of
 * @return {string}
 */
export function findFactorial(n) {
    if (n < 0) {
        return "Negative numbers are not allowed";
    }

    if (!Number.isInteger(n)) {
        return "Non-integer numbers are not allowed";
    }

    if (n === 0 || n === 1) {
        return 1;
    }

    return n * findFactorial(n - 1);
}