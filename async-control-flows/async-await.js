// Function to simulate an asynchronous task with a delay using Promise
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

// Function to perform multiple asynchronous tasks using async/await
async function performTasks() {
    try {
        console.log('Task 1 started');
        await delay(2000); // Simulate some asynchronous task that takes 2 seconds
        console.log('Task 1 completed');

        console.log('Task 2 started');
        await delay(1000); // Simulate another asynchronous task that takes 1 second
        console.log('Task 2 completed');

        console.log('All tasks completed!');
    } catch (err) {
        // Error handling can be added here if necessary
        console.error('Error:', err);
    }
}

// Call the async function
performTasks();
