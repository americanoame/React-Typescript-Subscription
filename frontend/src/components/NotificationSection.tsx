import NotificationToggle from "../components/NotificationToggle";


interface NotificationSectionProps {
    title: string;
    description: React.ReactNode; // Accept React nodes
    label: string;
    checked: boolean;
    onChange: () => void;
    text: string;
  }

  const NotificationSection: React.FC<NotificationSectionProps> = ({
    title,
    description,
    label,
    checked,
    onChange,
    text,
  }) => {
    return (
      <div className="notification-section" style={{ marginBottom: '30px' }}>
        <h2>{title}</h2>
        <p>{description}</p>
        <NotificationToggle
          label={label}
          checked={checked}
          onChange={onChange}
          text={text}
        />
      </div>
    );
  };

export default NotificationSection