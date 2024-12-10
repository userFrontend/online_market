import { useState } from 'react';
import { DatePicker, Space, Modal } from 'antd';
import { FaRegUser } from 'react-icons/fa';
import PhoneInput from '../Input/Input';
import './Auth.scss';
import { sendVerication } from '../../api/authRequest';

const AuthModal = () => {
  const [open, setOpen] = useState(false);
  const [sendSMS, setSendSMS] = useState(false);
  const [phone, setPhone] = useState('+998 (__) ___-__-__');
  const [verificationCode, setVerificationCode] = useState('');
  const [expectedCode, setExpectedCode] = useState(null);
  const [error, setError] = useState('');
  
  const showModal = () => {
    setOpen(!open);
    setSendSMS(false);
    setVerificationCode('');
    setError('');
    setExpectedCode(null);
  };

  const cleanPhoneNumber = (formattedPhone) => {
    return formattedPhone.replace(/[^\d]/g, '').slice(3); // "+998" ni olib tashlaymiz
  };

  const handleSendSMS = async () => {
    // const cleanedPhone = cleanPhoneNumber(phone); // Toza telefon raqamini olamiz
    try {
      const { data } = await sendVerication({ phoneNumber: phone });
      console.log('Server response:', data);
      setExpectedCode(data.verificationCode);
      setSendSMS(true);
    } catch (error) {
      console.log(error);
      setError('Failed to send SMS. Please try again.');
    }
  };

  const handleSubmit = () => {
    if (!error && verificationCode === expectedCode) {
      const cleanedPhone = cleanPhoneNumber(phone);
      console.log('Cleaned phone:', cleanedPhone);
      
    } else {
      setError('Please verify the code first.');
    }
  };

  return (
    <>
      <div className="option_items" onClick={showModal}>
        <FaRegUser className="icon" /> ACCOUNT
      </div>
      <Modal
        centered
        footer={
          <div className='auth_footer'>
            {sendSMS ? (
            <button className="auth_btn" onClick={handleSubmit}>
              Submit
            </button>
          ) : (
            <button className="auth_btn" onClick={handleSendSMS}>
              Send SMS
            </button>
          )}
          </div>
        }
        open={open}
        onCancel={showModal}>
        <div className="form">
          <img src="/images/logo.png" alt="logo" />
          <form>
            {!sendSMS && (
              <PhoneInput
                phone={phone}
                setPhone={setPhone}
              />
            )}
            {sendSMS && (
              <>
                <input required type="text" placeholder="Full Name" name='fullname'/>
                <PhoneInput
                  phone={phone}
                  setPhone={setPhone}
                />
                <input required type="date" name='birthday'/>
                <input required
                  type="number"
                  placeholder="Enter verification code"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                />
                {error && <span className="error">{error}</span>}
              </>
            )}
          </form>
        </div>
      </Modal>
    </>
  );
};

export default AuthModal;
