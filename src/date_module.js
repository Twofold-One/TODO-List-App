import isPast from 'date-fns/isPast';
import parseISO from 'date-fns/parseISO';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const DateModule = (() => {
    function displayDateAlertText(taskNumber) {
        return formatDistanceToNow(parseISO(taskNumber.date));
    }

    function displayDateAlertTextStatus(taskNumber, DOMElement) {
        if (isPast(parseISO(taskNumber.date))) {
            DOMElement.classList.add('past');
        }
    }

    return {
        displayDateAlertText,
        displayDateAlertTextStatus,
    };
})();
export default DateModule;
