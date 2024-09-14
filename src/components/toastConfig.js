// toastConfig.js
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const successToast = (name, time, services) => {
  toast.success(
    <div>
      <strong>{name}</strong> successfully booked at <strong>{time}</strong> for: <strong>{services}</strong>
    </div>,
    {
      position: "top-right",
      autoClose: 15000, // 15 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        backgroundColor: '#4CAF50', // Green color
        color: '#fff',
        padding: '20px',
        borderRadius: '8px',
        fontSize: '16px'
      },
      icon: false // Optional: Disable default icon if you prefer custom styling
    }
  );
};
