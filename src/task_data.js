import localStorageModule from './localStorage_module';

const DataModule = (() => {
    // all tasks data array
    const tasksList = localStorageModule.get() || [];

    // new list factory
    const newList = (title) => {
        const tasks = [];
        const activeList = false;
        return { title, tasks, activeList };
    };

    function createNewList(title) {
        tasksList.push(newList(title));
        localStorageModule.set();
    }

    function deleteList(listIndex) {
        tasksList.splice(listIndex, 1);
        localStorageModule.set();
    }

    // new task factory
    const newTask = (title, description, on, date) => ({
        title,
        description,
        on,
        date,
    });

    function createNewTaskInTheList(listIndex, title, description, on, date) {
        tasksList[listIndex].tasks.push(newTask(title, description, on, date));
        localStorageModule.set();
    }

    function deleteTask(listIndex, taskIndex) {
        tasksList[listIndex].tasks.splice(taskIndex, 1);
        localStorageModule.set();
    }

    function defaultTasksList() {
        if (tasksList.length === 0) {
            return tasksList.push(newList('My tasks'));
        }
    }

    function defaultTasks() {
        if (tasksList[0].tasks.length === 0) {
            createNewTaskInTheList(
                0,
                'Ongoing task 1',
                'My ongoing task 1',
                true,
                '2021-10-10'
            );
            createNewTaskInTheList(
                0,
                'Finished task 1',
                'My finished task 1',
                false,
                '2021-10-10'
            );
        }
    }

    function defaultTasksListActiveStatus() {
        tasksList[0].activeList = true;
    }

    function changeTaskOnStatus(task) {
        return !task.on;
    }

    function initDefaultDataModule() {
        defaultTasksList();
        defaultTasks();
        defaultTasksListActiveStatus();
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
        changeTaskOnStatus,
        initDefaultDataModule,
    };
})();

export default DataModule;
