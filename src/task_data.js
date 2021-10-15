const DataModule = (() => {
    // all tasks data array
    const tasksList = [];
    const defaultTasks = {
        ongoingTaskList: [],
        finishedTaskList: [],
    };

    // new project factory
    const newList = (title) => {
        const ongoingTaskList = [];
        const finishedTaskList = [];
        return { title, ongoingTaskList, finishedTaskList };
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

    return {
        tasksList,
        defaultTasks,
        createNewList,
        deleteList,
        createNewTaskInTheList,
        deleteTask,
    };
})();

export default DataModule;
