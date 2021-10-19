import displayModule from './display_data';
import DataModule from './task_data';

const DOM = (() => {
    // I have to reassing dynamically created nodes, beacuse
    // of initial value in the DOM element is evaluated upon
    // first expanding
    const tasksElInput = document.querySelectorAll('[data-task-tag]');
    const thisTask = document.querySelectorAll('[data-this-task]');
    const thisTaskWindow = document.getElementById('this-task-window');

    return {
        tasksElInput,
        thisTask,
        thisTaskWindow,
    };
})();

const TaskFieldModule = (() => {
    function changeTaskStatus() {
        DOM.tasksElInput = document.querySelectorAll('[data-task-tag]');

        function listActivityCheck(list) {
            return list.activeList === true;
        }
        const currentActiveList = DataModule.tasksList.find(listActivityCheck);

        DOM.tasksElInput.forEach((element) => {
            element.addEventListener('input', (e) => {
                const { taskNumber } = e.target.dataset;
                console.log(taskNumber);
                console.log(currentActiveList.tasks[taskNumber].on);
                if (e.target.checked === true) {
                    currentActiveList.tasks[taskNumber].on = false;
                    displayModule.displayActiveList();
                    changeTaskStatus();
                    console.log(currentActiveList);
                } else if (!e.target.checked === true) {
                    currentActiveList.tasks[taskNumber].on = true;
                    displayModule.displayActiveList();
                    changeTaskStatus();
                    console.log(currentActiveList);
                }
            });
        });
    }

    // TODO

    // function openThisTaskWindow() {
    //     DOM.thisTask = document.querySelectorAll('[data-this-task]');

    //     DOM.thisTask.forEach((element) => {
    //         element.addEventListener('click', (e) => {
    //             console.log(e.target);
    //         });
    //     }
    // }

    return {
        changeTaskStatus,
    };
})();

export default TaskFieldModule;
