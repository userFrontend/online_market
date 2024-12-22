import { useState } from 'react';
import { Modal } from 'antd';
import { FaRegUser } from 'react-icons/fa';
import './Auth.scss';
import GoogleAuth from './GoogleAuth';
import { Icons } from '../../utils/icons';
import { Link } from 'react-router-dom';
import { useInfoContext } from '../../context/infoContext';

const AuthModal = () => {
  const {userId, modalOpen, setModalOpen} = useInfoContext()
  const [isRegister, setIsRegister] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [isPhone, setIsPhone] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const showModal = () => {
    setModalOpen(!modalOpen);
    setIsRegister(false);
    setEmailOrPhone('');
    setIsPhone(false);
    setPassword('');
    setConfirmPassword('');
    setName('');
    setError('');
  };

  const handleEmailOrPhoneChange = (e) => {
    const value = e.target.value;
    setEmailOrPhone(value);
    if (value.startsWith('+') || value.startsWith('9')) {
      setIsPhone(true);
    } else {
      setIsPhone(false);
    }
  };

  const handleSubmit = () => {
    if (isRegister) {
      if (!name || !emailOrPhone || !password || !confirmPassword) {
        setError('All fields are required!');
        return;
      }
      if (password !== confirmPassword) {
        setError('Passwords do not match!');
        return;
      }
      console.log('Registering:', { name, emailOrPhone, password });
    } else {
      if (!emailOrPhone || !password) {
        setError('Email/Phone and Password are required!');
        return;
      }
      console.log('Logging in:', { emailOrPhone, password });
    }
    setError('');
    setOpen(false);
  };

  return (
    <>
      <Link to={userId ? '/profile' : ''} className="option_items" onClick={!userId && showModal}>
        <FaRegUser className="icon" /> АККАУНТ
      </Link>
      <Modal
        centered
        footer={null}
        open={modalOpen}
        onCancel={showModal}
      >
        <div className="auth_modal">
          <div className="auth_tabs">
            <span
              className={!isRegister ? 'active' : ''}
              onClick={() => setIsRegister(false)}
            >
              Войти
            </span>
            <span
              className={isRegister ? 'active' : ''}
              onClick={() => setIsRegister(true)}
            >
              Зарегистрироваться
            </span>
          </div>
          <form className="auth_form">
            {isRegister && (
              <input
                type="text"
                placeholder="Имя / Фамилия"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}
            <input
              type="text"
              placeholder="E-mail или Телефон"
              value={emailOrPhone}
              onChange={handleEmailOrPhoneChange}
            />
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isRegister && (
              <input
                type="password"
                placeholder="Повторите пароль"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            )}
            {isRegister && (
              <label>
                <input type="checkbox" /> Получать уведомления о скидках, новинках, акциях и новостях
              </label>
            )}
            {error && <div className="auth_error">{error}</div>}
            <button type="button" className="auth_btn" onClick={handleSubmit}>
              {isRegister ? 'Зарегистрироваться' : 'Вход'}
            </button>
          </form>
          <div className="google">
            <div className="auth_bottom">
              <Icons.roseLeft/>
              <span>ИЛИ</span>
              <Icons.roseRight/>
            </div>
            <GoogleAuth/>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AuthModal;
