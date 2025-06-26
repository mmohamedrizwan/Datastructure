/**
 * Insertion Sort Algorithm
 * This code implements the insertion sort algorithm to sort an array of numbers.
 * It iterates through the array, taking each element and inserting it into its correct position in the sorted portion of the array.
 * The algorithm is efficient for small data sets and is stable, meaning that it maintains the relative order of equal elements.
 * It splits the array into a sorted and an unsorted part, gradually building the sorted part by inserting elements from the unsorted part.
 * * Example:
 * * let numbers = [5, 2, 9, 1, 5, 6];
 * * insertionSort(numbers);
 * * * console.log(numbers); // Output: [1, 2, 5, 5, 6, 9]
 * This function sorts an array using the insertion sort algorithm.
 * Time Complexity: O(n^2) in the worst case, O(n) in the best case.
 * Space Complexity: O(1) as it sorts the array in place.
 */

/**
 * Insertion Sort Algorithm
 * @param {number[]} arr - The array to be sorted.
 */
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const numberToInsert = arr[i];
        let j = j - 1;
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j+1] = arr[j];
            j = j - 1;
        }
        arr[j+1] = numberToInsert;
    }
}