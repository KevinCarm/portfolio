import 'bulma/css/bulma.css';
const Notification = (props) => {
    const closeNotificationClickEvent = () => {
        props.closeNotification();
    };
    
    
    return <div className={props.message.style}>
        <button onClick={closeNotificationClickEvent} className="delete"></button>
        {props.message.message}
    </div>
};

export default Notification;