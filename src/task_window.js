import DataModule from './task_data';
import displayModule from './display_data';
import TaskFieldModule from './tasks_field';
import localStorageModule from './localStorage_module';

const DOM = (() => {
    const backBtn = document.getElementById('this-task-go-back-btn');
    const taskTitle = document.querySelector('[data-task-title]');
    const taskDescription = document.querySelector('[data-task-description]');
    const taskStatus = document.getElementById('this-task-status');
    const taskDate = document.getElementById('this-task-date');
    const deleteBtn = document.getElementById('this-task-delete');
    const thisTaskWidnow = document.getElementById('this-task-window');

    return {
        backBtn,
        taskTitle,
        taskDescription,
        taskStatus,
        taskDate,
        deleteBtn,
        thisTaskWidnow,
    };
})();

// TODO this task window functionallity
const taskWindowModule = (() => {
    // TODO thisTaskEdit functionality
    function thisTaskEdit(activeList, taskNumber) {
        const editedActiveList = activeList;
        editedActiveList.tasks[taskNumber].title = DOM.taskTitle.textContent;
        editedActiveList.tasks[taskNumber].descritption =
            DOM.taskDescription.textContent;
        const { taskStatus } = DOM;
        console.log(taskStatus);
        const taskOnStatus =
            taskStatus.options[taskStatus.selectedIndex].value === 'ongoing';
        console.log(taskOnStatus);
        editedActiveList.tasks[taskNumber].on = taskOnStatus;
        editedActiveList.tasks[taskNumber].date = DOM.taskDate.value;
        return editedActiveList;
    }

    // thisTaskNumber will be taken from back button data attribute
    function thisActiveListTasksEdit() {
        function listActivityCheck(list) {
            return list.activeList === true;
        }
        const currentActiveList = DataModule.tasksList.find(listActivityCheck);
        const { taskNumber } = DOM.backBtn.dataset;
        return thisTaskEdit(currentActiveList, taskNumber);
    }

    function closeTaskWindow() {
        return DOM.thisTaskWidnow.classList.remove('show');
    }

    function deleteTaskFromList() {
        function listActivityCheck(list) {
            return list.activeList === true;
        }
        const currentActiveList = DataModule.tasksList.find(listActivityCheck);
        const currentActiveListIndex =
            DataModule.tasksList.indexOf(currentActiveList);
        const { taskNumber } = DOM.backBtn.dataset;
        DataModule.deleteTask(currentActiveListIndex, taskNumber);
    }

    function deleteTaskFromListBtnClick() {
        DOM.deleteBtn = document.getElementById('this-task-delete');
        if (DOM.deleteBtn) {
            DOM.deleteBtn.addEventListener(
                'click',
                (e) => {
                    console.log(e.target);
                    deleteTaskFromList();
                    localStorageModule.set();
                    closeTaskWindow();
                    displayModule.displayActiveList();
                    TaskFieldModule.initTaskFieldModule();
                },
                false
            );
        }
    }

    function backBtnClick() {
        DOM.backBtn = document.getElementById('this-task-go-back-btn');
        DOM.taskTitle = document.querySelector('[data-task-title]');
        DOM.taskDescription = document.querySelector('[data-task-description]');
        DOM.taskStatus = document.getElementById('this-task-status');
        // const taskStatus = document.getElementById('this-task-status');
        DOM.taskDate = document.getElementById('this-task-date');
        if (DOM.backBtn) {
            DOM.backBtn.addEventListener(
                'click',
                () => {
                    closeTaskWindow();
                    thisActiveListTasksEdit();
                    localStorageModule.set();
                    displayModule.displayActiveList();
                    TaskFieldModule.initTaskFieldModule();
                },
                false
            );
        }
    }

    return {
        backBtnClick,
        deleteTaskFromListBtnClick,
    };
})();

export default taskWindowModule;
