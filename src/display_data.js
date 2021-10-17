import DataModule from './task_data';

const DOM = (() => {
    const headerMenu = document.getElementById('header-menu-additional-tasks');
    const taskListWindow = document.getElementById(
        'tasks-list-window-menu-additional-tasks'
    );
    const tasksField = document.getElementById('tasks-field');
    const tasksFieldOngoing = document.getElementById('tasks-field-ongoing');
    const tasksFieldFinished = document.getElementById('tasks-field-finished');
    const taskListTags = document.querySelectorAll('[data-list-tag]');

    return {
        headerMenu,
        taskListWindow,
        tasksField,
        tasksFieldOngoing,
        tasksFieldFinished,
        taskListTags,
    };
})();

const displayModule = (() => {
    function taskListMain() {
        DOM.headerMenu.innerHTML = '';
        DataModule.tasksList.forEach((list, index) => {
            const newList = document.createElement('a');
            newList.href = '#';
            newList.dataset.list = `${index}`;
            newList.dataset.listTag = '';
            newList.textContent = `${list.title}`;
            if (list.activeList === true) {
                newList.className = 'active-list';
            }

            DOM.headerMenu.appendChild(newList);

            return DOM.headerMenu;
        });
    }

    function taskListWindow() {
        DOM.taskListWindow.innerHTML = '';
        DataModule.tasksList.forEach((list, index) => {
            const newList = document.createElement('a');
            newList.href = '#';
            newList.dataset.list = `${index}`;
            newList.dataset.listTag = '';
            newList.textContent = `${list.title}`;
            if (list.activeList === true) {
                newList.className = 'active-list';
            }

            DOM.taskListWindow.appendChild(newList);

            return DOM.taskListWindow;
        });
    }

    function displayOngoingTasksH2() {
        const ongoingTasksH2 = document.createElement('h2');
        ongoingTasksH2.textContent = 'Ongoing tasks';
        DOM.tasksFieldOngoing.appendChild(ongoingTasksH2);
    }

    function displayFinishedTasksH2() {
        const finishedTasksH2 = document.createElement('h2');
        finishedTasksH2.textContent = 'Finished tasks';
        DOM.tasksFieldFinished.appendChild(finishedTasksH2);
    }

    function displayOngoingTasks(list) {
        list.tasks.forEach((task, index) => {
            if (task.on) {
                const newTaskOngoing = document.createElement('div');
                newTaskOngoing.dataset.status = 'ongoing';
                newTaskOngoing.dataset.taskNumber = `${index}`;
                newTaskOngoing.className = 'o-tasks';

                const newTaskOngoingInput = document.createElement('input');
                newTaskOngoingInput.type = 'checkbox';
                newTaskOngoingInput.dataset.status = 'ongoing';
                newTaskOngoingInput.dataset.taskNumber = `${index}`;
                newTaskOngoingInput.name = `o-task${index}`;
                newTaskOngoingInput.dataset.taskTag = '';
                newTaskOngoingInput.className = 'tasks';

                const newTaskOngoingInputLabel =
                    document.createElement('label');
                newTaskOngoingInputLabel.setAttribute('for', `o-task${index}`);
                newTaskOngoingInputLabel.dataset.taskNumber = `${index}`;
                newTaskOngoingInputLabel.textContent = task.title;

                newTaskOngoing.appendChild(newTaskOngoingInput);
                newTaskOngoing.appendChild(newTaskOngoingInputLabel);
                return DOM.tasksFieldOngoing.appendChild(newTaskOngoing);
            }
            return DOM.tasksFieldOngoing;
        });
    }

    function displayFinishedTasks(list) {
        list.tasks.forEach((task, index) => {
            if (!task.on) {
                const newTaskFinished = document.createElement('div');
                newTaskFinished.dataset.status = 'finished';
                newTaskFinished.dataset.taskNumber = `${index}`;
                newTaskFinished.className = 'f-tasks';

                const newTaskFinishedInput = document.createElement('input');
                newTaskFinishedInput.type = 'checkbox';
                newTaskFinishedInput.dataset.status = 'finished';
                newTaskFinishedInput.dataset.taskNumber = `${index}`;
                newTaskFinishedInput.name = `f-task${index}`;
                newTaskFinishedInput.dataset.taskTag = '';
                newTaskFinishedInput.className = 'tasks';
                newTaskFinishedInput.checked = true;

                const newTaskFinishedInputLabel =
                    document.createElement('label');
                newTaskFinishedInputLabel.setAttribute('for', `f-task${index}`);
                newTaskFinishedInputLabel.dataset.taskNumber = `${index}`;
                newTaskFinishedInputLabel.textContent = task.title;

                newTaskFinished.appendChild(newTaskFinishedInput);
                newTaskFinished.appendChild(newTaskFinishedInputLabel);
                return DOM.tasksFieldFinished.appendChild(newTaskFinished);
            }
            return DOM.tasksFieldFinished;
        });
    }

    function resetTasks() {
        DOM.tasksFieldOngoing.innerHTML = '';
        DOM.tasksFieldFinished.innerHTML = '';
    }

    function displayActiveList() {
        function listActivityCheck(list) {
            return list.activeList === true;
        }

        const currentActiveList = DataModule.tasksList.find(listActivityCheck);
        // console.log(currentActiveList);
        resetTasks();
        displayOngoingTasksH2();
        displayOngoingTasks(currentActiveList);
        displayFinishedTasksH2();
        displayFinishedTasks(currentActiveList);
    }

    return {
        taskListMain,
        taskListWindow,
        displayActiveList,
    };
})();

export default displayModule;
