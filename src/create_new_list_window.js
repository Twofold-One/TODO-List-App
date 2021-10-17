import DataModule from './task_data';
import displayModule from './display_data';

const DOM = (() => {
    const newListWndow = document.getElementById('new-list-window');
    const closeBtn = document.getElementById('close-btn');
    const readyBtn = document.getElementById('ready-btn');
    const newListNameText = document.getElementById('new-list-name');

    return {
        newListWndow,
        closeBtn,
        readyBtn,
        newListNameText,
    };
})();

const NewListModule = (() => {
    function closeWindow() {
        function handleClick() {
            DOM.newListWndow.classList.remove('show');
        }

        DOM.closeBtn.addEventListener('click', handleClick);
    }

    function createNewList() {
        function clearInput() {
            DOM.newListNameText.value = '';
            DOM.newListWndow.classList.remove('show');
        }

        function handleClick() {
            if (DOM.newListNameText.value === '') {
                clearInput();
                return;
            }
            DataModule.createNewList(DOM.newListNameText.value);
            displayModule.taskListMain();
            displayModule.taskListWindow();
            clearInput();
        }
        DOM.readyBtn.addEventListener('click', handleClick);
    }

    return { closeWindow, createNewList };
})();

export default NewListModule;
