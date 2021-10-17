import displayModule from './display_data';
import DataModule from './task_data';

const DOM = (() => {
    // I have to reassing dynamically created nodes, beacuse
    // of initial value in the DOM element is evaluated upon
    // first expanding
    const newTaskName = document.getElementById('new-task-name');
    const newTaskDescription = document.getElementById('new-task-description');
    const saveBtn = document.getElementById('save-button');

    return {
        newTaskName,
        newTaskDescription,
        saveBtn,
    };
})();

const NewTaskModule = (() => {
    function newTask() {
        function listActivityCheck(list) {
            return list.activeList === true;
        }
        const currentActiveList = DataModule.tasksList.find(listActivityCheck);
        console.log(DOM.newTaskName.value);
        console.log(DOM.newTaskDescription.value);
        console.log(currentActiveList);
    }
    DOM.saveBtn.addEventListener('click', newTask);

    return { newTask };
})();
export default NewTaskModule;
