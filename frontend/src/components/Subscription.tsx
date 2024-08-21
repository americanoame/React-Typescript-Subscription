import { Toaster } from 'react-hot-toast';
import useNotifications from '../useNotifications';
import NotificationSection from '../components/NotificationSection';

const Subscription: React.FC = () => {
  const { notifications, handleToggle } = useNotifications();

  return (
    <div className="subscription-container">
      <div className="subscription-content">
        {/* Login Notifications Section */}
        <div style={{ marginLeft: '10px' }}>
          <NotificationSection
            title="Login Notifications"
            description={
              <>
                For added security, receive a notification every time you log in to
                <br />
                your account
              </>
            }
            label="login"
            checked={notifications.login}
            onChange={() => handleToggle('login')}
            text="Email Notifications"
          />
        </div>

        {/* Marketing Communications Section */}
        <NotificationSection
          title="Marketing Communications"
          description={
            <>
              Receive notifications for all special offers, promotions, and product
              <br />
              updates via email.
            </>
          }
          label="marketing"
          checked={notifications.marketing}
          onChange={() => handleToggle('marketing')}
          text="Email Notifications"
        />

        {/* Post Email Notifications Section */}
        <div className="line"></div>

        <NotificationSection title={''} description="Receive notifications via postal mail." label="postEmail" checked={notifications.postEmail} onChange={() => handleToggle('postEmail')} text="Postal Mail" />

        <Toaster />
      </div>
    </div>
  );
};

export default Subscription;
