import displayModule from './display_data';
import DataModule from './task_data';
import TaskFieldModule from './tasks_field';

const DOM = (() => {
    // I have to reassing dynamically created nodes, because
    // of initial value in the DOM element is evaluated upon
    // first expanding
    const newTaskName = document.getElementById('new-task-name');
    const newTaskDescription = document.getElementById('new-task-description');
    const saveBtn = document.getElementById('save-button');
    const newTaskWindow = document.getElementById('new-task-window');

    return {
        newTaskName,
        newTaskDescription,
        saveBtn,
        newTaskWindow,
    };
})();

const NewTaskModule = (() => {
    function clearInput() {
        DOM.newTaskName.value = '';
        DOM.newTaskDescription.value = '';
    }

    function newTask() {
        function listActivityCheck(list) {
            return list.activeList === true;
        }
        const currentActiveList = DataModule.tasksList.find(listActivityCheck);

        const currentActiveListIndex =
            DataModule.tasksList.indexOf(currentActiveList);

        const taskName = DOM.newTaskName.value;
        const taskDescription = DOM.newTaskDescription.value;
        if (taskName !== '') {
            DataModule.createNewTaskInTheList(
                currentActiveListIndex,
                taskName,
                taskDescription,
                true,
                'none'
            );
        }

        displayModule.displayActiveList();
        TaskFieldModule.changeTaskStatus();
        TaskFieldModule.initTaskFieldModule();
        clearInput();
        DOM.newTaskWindow.classList.remove('show');
    }

    DOM.saveBtn.addEventListener('click', (e) => {
        e.preventDefault();
        newTask();
    });

    return { newTask };
})();
export default NewTaskModule;
