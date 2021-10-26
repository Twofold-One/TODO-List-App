import DataModule from './task_data';

const localStorageModule = (() => {
    function set() {
        const myTaskListsJSON = JSON.stringify(DataModule.tasksList);
        localStorage.setItem('myTaskLists', myTaskListsJSON);
    }

    function get() {
        const myTaskLists = JSON.parse(localStorage.getItem('myTaskLists'));
        return myTaskLists;
    }
    function clear() {
        localStorage.clear();
    }

    return {
        set,
        get,
        clear,
    };
})();
export default localStorageModule;
