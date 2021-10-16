// import _ from 'lodash';
import './style.css';
import {
    addNewTaskBtnClick,
    tasksListBtnClick,
    createNewListBtnClick,
} from './main_window';
import newListModule from './create_new_list_window';
import DataModule from './task_data';
import displayModule from './display_data';
// import { formatDistance, subDays } from 'date-fns';

addNewTaskBtnClick();
tasksListBtnClick();
createNewListBtnClick();
newListModule.closeWindow();
newListModule.createNewList();

DataModule.defaultTasksList();
DataModule.defaultTasks();
DataModule.createNewTaskInTheList(
    0,
    'My new task',
    'my new task description',
    'finished',
    'any'
);
// DataModule.createNewList('list1');
// DataModule.createNewList('list2');
// DataModule.createNewList('list3');
// DataModule.createNewList('list4');

console.log(DataModule.tasksList);

displayModule.taskListMain();
displayModule.taskListWindow();
displayModule.defaultTasks();
