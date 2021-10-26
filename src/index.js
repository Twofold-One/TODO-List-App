// import _ from 'lodash';
import './style.css';
import mainWindowBtn from './main_window_btn_clicks';
import NewListModule from './create_new_list_window';
import DataModule from './task_data';
import displayModule from './display_data';
import TaskFieldModule from './tasks_field';
import NewTaskModule from './add_new_task';
import taskWindowModule from './task_window';
import DateModule from './date_module';

DataModule.initDefaultDataModule();
displayModule.initDisplayModule();
TaskFieldModule.initTaskFieldModule();

mainWindowBtn.initMainWindowBtnModule();

NewListModule.closeWindow();
NewListModule.createNewList();
