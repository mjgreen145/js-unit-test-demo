var NAP = {};

function triggerEvent(element, eventType) {
    var event; // The custom event that will be created
    if (document.createEvent) {
        event = document.createEvent('HTMLEvents');
        event.initEvent(eventType, true, true);
    } else {
        event = document.createEventObject();
        event.eventType = eventType;
    }
    event.eventName = eventType;
    if (document.createEvent) {
        element.dispatchEvent(event);
    } else {
        element.fireEvent('on' + event.eventType, event);
    }
}