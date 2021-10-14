// import _ from 'lodash';
import './style.css';
import { addNewTaskBtnClick, tasksListBtnClick } from './main_window';
// import { formatDistance, subDays } from 'date-fns';

addNewTaskBtnClick();
tasksListBtnClick();
console.log('check connection');

const NewList = (title) => {
    const ongoingTaskList = {};
    const finishedTaskList = {};
    return { title, ongoingTaskList, finishedTaskList };
};

const NewTask = (title, description, status, date) => ({
    title,
    description,
    status,
    date,
});

const list1 = NewList('list1');

Object.assign(list1.ongoingTaskList, NewTask('my', 'new', 'ongoing'));
Object.assign(list1.ongoingTaskList, NewTask('1', '2', '3'));
console.log(list1.ongoingTaskList);
