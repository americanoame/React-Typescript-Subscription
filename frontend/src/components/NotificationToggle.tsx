import { Form } from 'react-bootstrap';

interface NotificationToggleProps  {
    label: string;
    checked: boolean;
    onChange: () => void;
    text: string;
}

const NotificationToggle: React.FC<NotificationToggleProps> = ({ label, checked, onChange, text }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span>{text || 'Email Notifications:'}</span> {/* Use the text prop or default to 'Email Notifications:' */}
      <Form.Check
        type="switch"
        id={`${label.toLowerCase()}-switch`}
        label={checked ? 'On' : 'Off'}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};

export default NotificationToggle;
