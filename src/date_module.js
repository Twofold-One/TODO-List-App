import set from 'date-fns/set';

const DateModule = (() => {
    const todayDate = new Date();

    return {
        todayDate,
    };
})();

// use input type date to choos the date
// use date-fns to display distance from current date.
console.log(DateModule.todayDate);
console.log('2');
