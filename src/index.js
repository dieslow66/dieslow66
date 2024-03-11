// taskScheduler.js

class TaskScheduler {
    constructor() {
        this.tasks = [];
        this.intervalId = null;
    }

    // Add a task to the scheduler
    addTask(taskName, interval, taskFunction) {
        const task = { name: taskName, interval, taskFunction };
        this.tasks.push(task);
    }

    // Start the scheduler
    startScheduler() {
        if (!this.intervalId) {
            this.intervalId = setInterval(() => {
                this.tasks.forEach(task => {
                    console.log(`Running task: ${task.name}`);
                    task.taskFunction();
                });
            }, 1000); // Run every second
        } else {
            console.log('Scheduler is already running.');
        }
    }

    // Stop the scheduler
    stopScheduler() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
            console.log('Scheduler stopped.');
        } else {
            console.log('Scheduler is not running.');
        }
    }

    // List all scheduled tasks
    listTasks() {
        console.log('Scheduled tasks:');
        this.tasks.forEach(task => {
            console.log(`${task.name} - Interval: ${task.interval}ms`);
        });
    }
}

module.exports = TaskScheduler;
