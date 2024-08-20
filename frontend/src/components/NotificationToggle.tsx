import { Form } from 'react-bootstrap';

const NotificationToggle = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      
      <Form.Check
        type="switch"
        
      />
    </div>
  );
};

export default NotificationToggle;
