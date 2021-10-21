const DOM = (() => {
    const backBtn = document.getElementById('this-task-go-back-btn');
    const taskTitle = document.querySelector('[data-task-title]');
    const taskDescription = document.querySelector('[data-task-descritption]');
    const taskStatus = document.querySelector('[data-task-status]');
    const taskDate = document.querySelector('[data-task-date]');
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
    // function closeTaskWindow() {
    //     return DOM.thisTaskWidnow.classList.remove('show');
    // }
    function backBtnClick() {
        // const backBtn = document.getElementById('this-task-go-back-btn');
        // console.log(backBtn);
        // DOM.backBtn.addEventListener('click', (e) => {
        //     console.log(e.target);
        // });
    }
    return {
        backBtnClick,
    };
})();

export default taskWindowModule;
