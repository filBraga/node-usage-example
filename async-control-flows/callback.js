function squareAsync(number, callback) {
    setTimeout(() => {
        const result = number * number;
        callback(result);
    }, 1000); // Simulate an asynchronous operation with setTimeout
}

function myPrint(text) {
    console.log('Squared value:', text);
}

// Call the function with a callback
squareAsync(5, (square) => myPrint(square));
