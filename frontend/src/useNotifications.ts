import { useState } from 'react';
import { toast } from 'react-hot-toast';

export const useNotifications = () => {
  const [notifications, setNotifications] = useState({
    login: false,
    marketing: false,
    Email: false,
  });

  const handleToggle = (type: keyof typeof notifications) => {
    setNotifications((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));

    if (notifications[type]) {
      toast.error(`You've been unsubscribed from ${type} notifications`, {
        position: 'top-center',
      });
    } else {
      toast.success(`You are subscribed to ${type} notifications`, {
        position: 'top-center',
      });
    }
  };

  return {
    notifications,
    handleToggle,
  };
};

export default useNotifications;