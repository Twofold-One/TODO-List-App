const DataModule = (() => {
    // all tasks data array
    const tasksList = [];

    // new list factory
    const newList = (title) => {
        const ongoingTaskList = [];
        const finishedTaskList = [];
        const activeList = false;
        return { title, ongoingTaskList, finishedTaskList, activeList };
    };

    function createNewList(title) {
        return tasksList.push(newList(title));
    }

    function deleteList(listIndex) {
        return tasksList.splice(listIndex, 1);
    }

    // new task factory
    const newTask = (title, description, status, date) => ({
        title,
        description,
        status,
        date,
    });

    function createNewTaskInTheList(
        listIndex,
        title,
        description,
        status,
        date
    ) {
        if (status === 'ongoing') {
            return tasksList[listIndex].ongoingTaskList.push(
                newTask(title, description, status, date)
            );
        }
        return tasksList[listIndex].finishedTaskList.push(
            newTask(title, description, status, date)
        );
    }

    function deleteTask(listIndex, taskIndex, status) {
        if (status === 'ongoing') {
            return tasksList[listIndex].ongoingTaskList.splice(taskIndex, 1);
        }
        return tasksList[listIndex].finishedTaskList.splice(taskIndex, 1);
    }

    function defaultTasksList() {
        return tasksList.push(newList('My tasks'));
    }

    function defaultTasks() {
        createNewTaskInTheList(
            0,
            'Ongoing task 1',
            'My ongoing task 1',
            'ongoing',
            'none'
        );
        createNewTaskInTheList(
            0,
            'Finished task 1',
            'My finished task 1',
            'finished',
            'none'
        );
    }

    function defaultTasksListActiveStatus() {
        tasksList[0].activeList = true;
    }

    return {
        tasksList,
        createNewList,
        deleteList,
        createNewTaskInTheList,
        deleteTask,
        defaultTasksList,
        defaultTasks,
        defaultTasksListActiveStatus,
    };
})();

export default DataModule;
