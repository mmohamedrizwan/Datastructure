/**
 * QuickSort Algorithm Implementation
 * This function sorts an array using the QuickSort algorithm.
 * QuickSort is a divide-and-conquer algorithm that works by selecting a 'pivot' element
 * and partitioning the other elements into two sub-arrays,
 * one with elements less than the pivot and one with elements greater than the pivot.
 * The sub-arrays are then sorted recursively.
 * Example:
 * let numbers = [5, 2, 9, 1, 5, 6];
 * quickSort(numbers);
 * console.log(numbers); // Output: [1, 2, 5, 5, 6, 9]
 * Time Complexity: O(n log n) on average, O(n^2) in the worst case.
 * Space Complexity: O(log n) due to recursive stack space.
 */

/**
 * @description This function sorts an array using the QuickSort algorithm.
 * It selects a pivot and partitions the array into two halves,
 * @param {number[]} arr - The array to sort.
 * @returns {number[]} The sorted array.
 */
function quickSort(arr) {
    if (arr.length < 2) { return arr; }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for(let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [1, 10, 3, 9, 2]
console.log(quickSort(arr));