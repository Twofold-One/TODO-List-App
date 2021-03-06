import displayModule from './display_data';
import TaskFieldModule from './tasks_field';
import DataModule from './task_data';

const DOM = (() => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const newTaskWindow = document.getElementById('new-task-window');
    const newTaskWindowMenu = document.getElementById('new-task-window-menu');
    const tasksListBtn = document.getElementById('tasks-list-btn');
    const tasksListWindow = document.getElementById('tasks-list-window');
    const tasksListWindowMenu = document.getElementById(
        'tasks-list-window-menu'
    );
    const createNewListBtn = document.getElementById('create-new-list');
    const newListWindow = document.getElementById('new-list-window');
    const createNewListMenuBtn = document.getElementById(
        'create-new-list-menu'
    );
    const taskLists = document.querySelectorAll('[data-list-tag]');
    const deleteListBtn = document.getElementById('delete-list-btn');

    function openWindow(window) {
        window.classList.add('show');
    }

    return {
        addTaskBtn,
        newTaskWindow,
        newTaskWindowMenu,
        tasksListBtn,
        tasksListWindow,
        tasksListWindowMenu,
        createNewListBtn,
        newListWindow,
        createNewListMenuBtn,
        openWindow,
        taskLists,
        deleteListBtn,
    };
})();

const mainWindowBtn = (() => {
    function addNewTaskBtnClick() {
        const openNewTaskWindow = () => DOM.openWindow(DOM.newTaskWindow);

        function closeNewTaskWindow(e) {
            if (!DOM.newTaskWindowMenu.contains(e.target)) {
                DOM.newTaskWindow.classList.remove('show');
            }
        }

        DOM.addTaskBtn.addEventListener('click', openNewTaskWindow);
        window.addEventListener('mouseup', closeNewTaskWindow);
    }

    function tasksListBtnClick() {
        const openTasksListWindow = () => DOM.openWindow(DOM.tasksListWindow);

        function closeTasksList(e) {
            if (!DOM.tasksListWindowMenu.contains(e.target)) {
                DOM.tasksListWindow.classList.remove('show');
            }
        }

        DOM.tasksListBtn.addEventListener('click', openTasksListWindow);
        window.addEventListener('mouseup', closeTasksList);
    }

    function createNewListBtnClick() {
        const openNewListWindow = () => DOM.openWindow(DOM.newListWindow);

        DOM.createNewListBtn.addEventListener('click', openNewListWindow);
    }

    function createNewListMenuBtnClick() {
        const openNewListWindow = () => {
            DOM.tasksListWindow.classList.remove('show');
            DOM.openWindow(DOM.newListWindow);
        };

        DOM.createNewListMenuBtn.addEventListener('click', openNewListWindow);
    }

    function changeActiveListOnClick() {
        const taskLists = document.querySelectorAll('[data-list-tag]');
        function changeActiveList(e) {
            function clearListsActivity() {
                DataModule.tasksList.forEach((list) => {
                    const everyList = list;
                    everyList.activeList = false;
                });
            }
            clearListsActivity();
            const clickedListNumber = e.target.dataset.list;
            DataModule.tasksList[clickedListNumber].activeList = true;
            displayModule.initDisplayModule();
            TaskFieldModule.initTaskFieldModule();
            mainWindowBtn.changeActiveListOnClick();
        }
        taskLists.forEach((list) => {
            list.addEventListener('click', changeActiveList);
        });
    }

    function deleteActiveList() {
        function deleteCurrentList() {
            function listActivityCheck(list) {
                return list.activeList === true;
            }
            const currentActiveList =
                DataModule.tasksList.find(listActivityCheck);
            const currentActiveListIndex =
                DataModule.tasksList.indexOf(currentActiveList);
            DataModule.deleteList(currentActiveListIndex);
            displayModule.initDisplayModule();
            changeActiveListOnClick();
        }
        DOM.deleteListBtn.addEventListener('click', deleteCurrentList);
    }

    function initMainWindowBtnModule() {
        addNewTaskBtnClick();
        tasksListBtnClick();
        createNewListBtnClick();
        createNewListMenuBtnClick();
        changeActiveListOnClick();
    }

    return {
        addNewTaskBtnClick,
        tasksListBtnClick,
        createNewListBtnClick,
        createNewListMenuBtnClick,
        changeActiveListOnClick,
        deleteActiveList,
        initMainWindowBtnModule,
    };
})();
mainWindowBtn.deleteActiveList();

export default mainWindowBtn;
