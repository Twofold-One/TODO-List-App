// import _ from 'lodash';
import './style.css';
import { addNewTaskBtnClick, tasksListBtnClick } from './main_window';
import DataModule from './task_data';
import displayModule from './display_data';
// import { formatDistance, subDays } from 'date-fns';

addNewTaskBtnClick();
tasksListBtnClick();

DataModule.createNewList('list1');
DataModule.createNewList('list2');
DataModule.createNewList('list3');
DataModule.createNewList('list4');

console.log(DataModule.tasksList);

displayModule.taskListMain();
displayModule.taskListWindow();
