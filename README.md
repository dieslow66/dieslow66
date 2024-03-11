# Task Scheduler

Task Scheduler is a simple JavaScript package that allows you to schedule tasks to run at specified intervals.

## Installation

You can install the Task Scheduler package via npm:

```bash
npm install task-scheduler
const TaskScheduler = require('task-scheduler');

// Create a new instance of TaskScheduler
const scheduler = new TaskScheduler();

// Add some tasks
scheduler.addTask('Task 1', 2000, () => {
    console.log('Executing Task 1');
});
scheduler.addTask('Task 2', 3000, () => {
    console.log('Executing Task 2');
});

// Start the scheduler
scheduler.startScheduler();

// List all tasks
scheduler.listTasks();

// Stop the scheduler after 10 seconds
setTimeout(() => {
    scheduler.stopScheduler();
}, 10000);
