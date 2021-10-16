import DataModule from './task_data';

const DOM = (() => {
    const headerMenu = document.getElementById('header-menu-additional-tasks');
    const taskListWindow = document.getElementById(
        'tasks-list-window-menu-additional-tasks'
    );
    const tasksField = document.getElementById('tasks-field');
    const tasksFieldOngoing = document.getElementById('tasks-field-ongoing');
    const tasksFieldFinished = document.getElementById('tasks-field-finished');

    return {
        headerMenu,
        taskListWindow,
        tasksField,
        tasksFieldOngoing,
        tasksFieldFinished,
    };
})();

const displayModule = (() => {
    function taskListMain() {
        DOM.headerMenu.innerHTML = '';
        DataModule.tasksList.forEach((list, index) => {
            const newList = document.createElement('a');
            newList.href = '#';
            newList.dataset.list = `${index}`;
            newList.textContent = `${list.title}`;

            DOM.headerMenu.append(newList);

            return DOM.headerMenu;
        });
    }

    function taskListWindow() {
        DOM.taskListWindow.innerHTML = '';
        DataModule.tasksList.forEach((list, index) => {
            const newList = document.createElement('a');
            newList.href = '#';
            newList.dataset.list = `${index}`;
            newList.textContent = `${list.title}`;

            DOM.taskListWindow.append(newList);

            return DOM.taskListWindow;
        });
    }

    function defaultTasks() {
        function ongoingTasks() {
            DataModule.tasksList[0].ongoingTaskList.forEach((task, index) => {
                const newTaskOngoing = document.createElement('div');
                newTaskOngoing.id = 'o-tasks';
                newTaskOngoing.className = 'o-tasks';
                newTaskOngoing.dataset.task = `${index}`;

                const newTaskOngoingInput = document.createElement('input');
                newTaskOngoingInput.type = 'checkbox';
                newTaskOngoingInput.id = 'o-task';
                newTaskOngoingInput.name = `o-task${index}`;
                newTaskOngoingInput.className = 'tasks';

                const newTaskOngoingInputLabel =
                    document.createElement('label');
                newTaskOngoingInputLabel.setAttribute('for', `o-task${index}`);
                newTaskOngoingInputLabel.textContent = task.title;

                newTaskOngoing.appendChild(newTaskOngoingInput);
                newTaskOngoing.appendChild(newTaskOngoingInputLabel);
                return DOM.tasksFieldOngoing.appendChild(newTaskOngoing);
            });
        }

        function finishedTasks() {
            DataModule.tasksList[0].finishedTaskList.forEach((task, index) => {
                const newTaskFinished = document.createElement('div');
                newTaskFinished.id = 'f-tasks';
                newTaskFinished.className = 'f-tasks';
                newTaskFinished.dataset.task = `${index}`;

                const newTaskFinishedInput = document.createElement('input');
                newTaskFinishedInput.type = 'checkbox';
                newTaskFinishedInput.id = 'f-task';
                newTaskFinishedInput.name = `f-task${index}`;
                newTaskFinishedInput.className = 'tasks';
                newTaskFinishedInput.checked = true;

                const newTaskFinishedInputLabel =
                    document.createElement('label');
                newTaskFinishedInputLabel.setAttribute('for', `f-task${index}`);
                newTaskFinishedInputLabel.textContent = task.title;

                newTaskFinished.appendChild(newTaskFinishedInput);
                newTaskFinished.appendChild(newTaskFinishedInputLabel);
                return DOM.tasksFieldFinished.appendChild(newTaskFinished);
            });
        }

        ongoingTasks();
        finishedTasks();
    }

    return {
        taskListMain,
        taskListWindow,
        defaultTasks,
    };
})();

export default displayModule;
