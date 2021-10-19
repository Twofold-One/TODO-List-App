const DOM = (() => {
    const backBtn = document.getElementById('go-back');
    const taskTitle = document.querySelector('[data-task-title]');
    const taskDescription = document.querySelector('[data-task-descritption]');
    const taskStatus = document.querySelector('[data-task-status]');
    const taskDate = document.querySelector('[data-task-date]');
    const deleteBtn = document.getElementById('this-task-delete');

    return {
        backBtn,
        taskTitle,
        taskDescription,
        taskStatus,
        taskDate,
        deleteBtn,
    };
})();
