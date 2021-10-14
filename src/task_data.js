// new project factory
const newList = (title) => {
    const ongoingTaskList = {};
    const finishedTaskList = {};
    return { title, ongoingTaskList, finishedTaskList };
};

// new task factory
const newTask = (title, description, status, date) => ({
    title,
    description,
    status,
    date,
});
