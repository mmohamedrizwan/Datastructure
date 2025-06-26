/**
 * Bubble Sort is a simple sorting algorithm that repeatedly steps through the list,
 * compares adjacent elements, and swaps them if they are in the wrong order.
 * This process is repeated until the list is sorted.
 *
 * Example:
 * let numbers = [5, 2, 9, 1, 5, 6];
 * bubbleSort(numbers);
 * console.log(numbers); // Output: [1, 2, 5, 5, 6, 9]
 *
 * Time Complexity: O(n^2) in the worst and average case.
 * Space Complexity: O(1) (in-place sorting).
 */

/**
 * Performs a bubble sort on an array.
 * @param {number[]} arr - The array to sort.
 */
function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if(arr[i] > arr[i + 1]) {
                const temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
                swapped = true;
            }
        }
    } while(swapped)
}