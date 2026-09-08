import { useNotification } from "../notificationStore";

const Notification = () => {
  const { show, message } = useNotification();

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
  };

  if (!show) return null;
  return (
    <div style={style} data-testid="notification">
      {message}
    </div>
  );
};

export default Notification;
