// Simulated asynchronous function that returns a Promise
function simulateAsyncOperation() {
    return new Promise((resolve) => {
        // Simulating an asynchronous operation with setTimeout
        setTimeout(() => {
            const isSuccess = Math.random() < 0.5; // Simulating success or failure randomly
            if (isSuccess) {
                resolve('Operation successful!');
            } else {
                resolve('Operation failed!');
            }
        }, 2000); // Simulating a 2-second delay
    });
}

// Usage of the simulateAsyncOperation function
console.log('Start of the program');

simulateAsyncOperation().then((result) => {
    console.log(result);
});

console.log('End of the program');
