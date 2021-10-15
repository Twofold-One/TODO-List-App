import DataModule from './task_data';

const DOM = (() => {
    const headerMenu = document.getElementById('header-menu-additional-tasks');
    const taskListWindow = document.getElementById(
        'tasks-list-window-menu-additional-tasks'
    );

    return {
        headerMenu,
        taskListWindow,
    };
})();

const displayModule = (() => {
    function taskListMain() {
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
        DataModule.tasksList.forEach((list, index) => {
            const newList = document.createElement('a');
            newList.href = '#';
            newList.dataset.list = `${index}`;
            newList.textContent = `${list.title}`;

            DOM.taskListWindow.append(newList);

            return DOM.taskListWindow;
        });
    }

    return {
        taskListMain,
        taskListWindow,
    };
})();

export default displayModule;
