import DataModule from './task_data';
import taskWindowModule from './task_window';
import DateModule from './date_module';

const DOM = (() => {
    const headerMenu = document.getElementById('header-menu-additional-tasks');
    const taskListWindow = document.getElementById(
        'tasks-list-window-menu-additional-tasks'
    );
    const tasksField = document.getElementById('tasks-field');
    const tasksFieldOngoing = document.getElementById('tasks-field-ongoing');
    const tasksFieldFinished = document.getElementById('tasks-field-finished');
    const taskListTags = document.querySelectorAll('[data-list-tag]');
    const newTaskWindow = document.getElementById('this-task-window');

    return {
        headerMenu,
        taskListWindow,
        tasksField,
        tasksFieldOngoing,
        tasksFieldFinished,
        taskListTags,
        newTaskWindow,
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
        if (list) {
            list.tasks.forEach((task, index) => {
                if (task.on) {
                    const newTaskOngoing = document.createElement('div');
                    newTaskOngoing.dataset.taskNumber = `${index}`;
                    newTaskOngoing.className = 'o-tasks';

                    const newTaskOngoingInput = document.createElement('input');
                    newTaskOngoingInput.type = 'checkbox';
                    newTaskOngoingInput.dataset.taskNumber = `${index}`;
                    newTaskOngoingInput.name = `o-task${index}`;
                    newTaskOngoingInput.dataset.taskTag = '';
                    newTaskOngoingInput.className = 'tasks';

                    const newTaskOngoingInputLabel =
                        document.createElement('label');
                    newTaskOngoingInputLabel.setAttribute(
                        'for',
                        `o-task${index}`
                    );
                    newTaskOngoingInputLabel.dataset.taskNumber = `${index}`;
                    newTaskOngoingInputLabel.textContent = task.title;
                    newTaskOngoingInputLabel.dataset.thisTask = '';

                    const newTaskDateAlert = document.createElement('div');
                    newTaskDateAlert.className = 'task-date-alert';
                    newTaskDateAlert.dataset.taskNumber = `${index}`;
                    newTaskDateAlert.dataset.thisTaskDateAlert = '';
                    newTaskDateAlert.textContent = `${DateModule.displayDateAlertText(
                        task
                    )}`;
                    DateModule.displayDateAlertTextStatus(
                        task,
                        newTaskDateAlert
                    );
                    newTaskOngoing.appendChild(newTaskOngoingInput);
                    newTaskOngoing.appendChild(newTaskOngoingInputLabel);
                    newTaskOngoing.appendChild(newTaskDateAlert);
                    return DOM.tasksFieldOngoing.appendChild(newTaskOngoing);
                }
                return DOM.tasksFieldOngoing;
            });
        }
        return '';
    }

    function displayFinishedTasks(list) {
        if (list) {
            list.tasks.forEach((task, index) => {
                if (!task.on) {
                    const newTaskFinished = document.createElement('div');
                    newTaskFinished.dataset.taskNumber = `${index}`;
                    newTaskFinished.className = 'f-tasks';

                    const newTaskFinishedInput =
                        document.createElement('input');
                    newTaskFinishedInput.type = 'checkbox';
                    newTaskFinishedInput.dataset.taskNumber = `${index}`;
                    newTaskFinishedInput.name = `f-task${index}`;
                    newTaskFinishedInput.dataset.taskTag = '';
                    newTaskFinishedInput.className = 'tasks';
                    newTaskFinishedInput.checked = true;

                    const newTaskFinishedInputLabel =
                        document.createElement('label');
                    newTaskFinishedInputLabel.setAttribute(
                        'for',
                        `f-task${index}`
                    );
                    newTaskFinishedInputLabel.dataset.taskNumber = `${index}`;
                    newTaskFinishedInputLabel.textContent = task.title;
                    newTaskFinishedInputLabel.dataset.thisTask = '';

                    newTaskFinished.appendChild(newTaskFinishedInput);
                    newTaskFinished.appendChild(newTaskFinishedInputLabel);
                    return DOM.tasksFieldFinished.appendChild(newTaskFinished);
                }
                return DOM.tasksFieldFinished;
            });
        }
        return '';
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
        resetTasks();
        displayOngoingTasksH2();
        displayOngoingTasks(currentActiveList);
        displayFinishedTasksH2();
        displayFinishedTasks(currentActiveList);
    }

    function displayChosenTaskWindow(activeList, taskNumber) {
        function taskWindowClear() {
            DOM.newTaskWindow.innerHTML = '';
        }

        const goBackBtn = document.createElement('div');
        goBackBtn.id = 'this-task-go-back';
        goBackBtn.className = 'go-back';
        goBackBtn.insertAdjacentHTML(
            'afterbegin',
            `<i id="this-task-go-back-btn" data-task-number='${taskNumber}' class="fas fa-chevron-left"></i>`
        );

        const thisTaskName = document.createElement('div');
        thisTaskName.id = 'this-task-name';
        thisTaskName.className = 'this-task-name';
        const thisTaskNameTitle = document.createElement('h1');
        thisTaskNameTitle.contentEditable = 'true';
        thisTaskNameTitle.dataset.taskTitle = '';
        thisTaskNameTitle.textContent = `${activeList.tasks[taskNumber].title}`;
        thisTaskName.appendChild(thisTaskNameTitle);

        const thisTaskDescription = document.createElement('div');
        thisTaskDescription.id = 'this-task-description';
        thisTaskDescription.className = 'this-task-description';
        const thisTaskDescriptionText = document.createElement('p');
        thisTaskDescriptionText.contentEditable = 'true';
        thisTaskDescriptionText.dataset.taskDescription = '';
        thisTaskDescriptionText.textContent = `${activeList.tasks[taskNumber].description}`;
        thisTaskDescription.appendChild(thisTaskDescriptionText);

        const thisTaskStatus = document.createElement('div');
        thisTaskStatus.id = 'this-task-status-container';
        thisTaskStatus.className = 'this-task-status';

        const thisTaskOn = activeList.tasks[taskNumber].on;
        function checkTaskOn() {
            if (thisTaskOn) {
                return `<option value="ongoing" selected>Ongoing</option>
                        <option value="finished">Finished</option>`;
            }
            return `<option value="ongoing">Ongoing</option>
                        <option value="finished" selected>Finished</option>`;
        }

        thisTaskStatus.insertAdjacentHTML(
            'afterbegin',
            `<label for="this-task-status">Task status:</label>
            <select name="this-task-status" id="this-task-status">
            ${checkTaskOn()}
            </select>`
        );

        const thisTaskDate = document.createElement('input');
        thisTaskDate.id = 'this-task-date';
        thisTaskDate.className = 'this-task-date';
        thisTaskDate.type = 'date';
        thisTaskDate.value = activeList.tasks[taskNumber].date;

        const deleteBtn = document.createElement('div');
        deleteBtn.id = 'this-task-delete';
        deleteBtn.className = 'this-task-delete';
        deleteBtn.insertAdjacentHTML(
            'afterbegin',
            '<i class="fas fa-trash"></i>'
        );

        taskWindowClear();
        DOM.newTaskWindow.appendChild(goBackBtn);
        DOM.newTaskWindow.appendChild(thisTaskName);
        DOM.newTaskWindow.appendChild(thisTaskDescription);
        DOM.newTaskWindow.appendChild(thisTaskStatus);
        DOM.newTaskWindow.appendChild(thisTaskDate);
        DOM.newTaskWindow.appendChild(deleteBtn);
        taskWindowModule.backBtnClick();
        taskWindowModule.deleteTaskFromListBtnClick();
    }

    function initDisplayModule() {
        taskListMain();
        taskListWindow();
        displayActiveList();
    }

    return {
        taskListMain,
        taskListWindow,
        displayActiveList,
        displayChosenTaskWindow,
        initDisplayModule,
    };
})();

export default displayModule;
