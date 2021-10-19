// import _ from 'lodash';
import './style.css';
import {
    addNewTaskBtnClick,
    tasksListBtnClick,
    createNewListBtnClick,
    createNewListMenuBtnClick,
} from './main_window_btn_clicks';
import NewListModule from './create_new_list_window';
import DataModule from './task_data';
import displayModule from './display_data';
import TaskFieldModule from './tasks_field';
// import NewTaskModule from './add_new_task';
// import { formatDistance, subDays } from 'date-fns';

addNewTaskBtnClick();
tasksListBtnClick();
createNewListBtnClick();
createNewListMenuBtnClick();
NewListModule.closeWindow();
NewListModule.createNewList();

DataModule.defaultTasksList();
DataModule.defaultTasks();
DataModule.defaultTasksListActiveStatus();
DataModule.createNewTaskInTheList(
    0,
    'My new task',
    'my new task description',
    true,
    'any'
);
// DataModule.createNewList('list1');
// DataModule.createNewList('list2');
// DataModule.createNewList('list3');
// DataModule.createNewList('list4');

// console.log(DataModule.tasksList);

displayModule.taskListMain();
displayModule.taskListWindow();
displayModule.displayActiveList();
TaskFieldModule.changeTaskStatus();
displayModule.displayChosenTaskWindow(DataModule.tasksList[0], 0);
