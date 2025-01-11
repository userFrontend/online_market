import { useState, useRef } from 'react';
import { Modal } from 'antd';
import { FaRegUser } from 'react-icons/fa';
import './Auth.scss';
import GoogleAuth from './GoogleAuth';
import { Icons } from '../../utils/icons';
import { Link } from 'react-router-dom';
import { useInfoContext } from '../../context/infoContext';
import { login, signUp } from '../../api/authRequest';
import PhoneInput from '../Input/Input';

const AuthModal = () => {
  const { userId, modalOpen, setModalOpen, setCurrentUser } = useInfoContext();
  const [isRegister, setIsRegister] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [isPhone, setIsPhone] = useState(false);
  const [phone, setPhone] = useState('+998 (__) ___-__-__');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const emailInputRef = useRef(null);
  const phoneInputRef = useRef(null);

  const showModal = () => {
    setModalOpen(!modalOpen);
    setIsRegister(false);
    setEmailOrPhone('');
    setIsPhone(false);
    setPhone('+998 (__) ___-__-__');
    setPassword('');
    setConfirmPassword('');
    setName('');
    setError('');
  };

  const handleEmailOrPhoneChange = (e) => {
    const value = e.target.value;
    setEmailOrPhone(value);

    if (value.length === 1 && (value === '+' || value === '9')) {
      setIsPhone(true);
      setPhone('+998 (__) ___-__-__');
      setTimeout(() => phoneInputRef.current?.focus(), 0);
    } else if (!/^[\d+]*$/.test(value)) {
      setIsPhone(false);
      setTimeout(() => emailInputRef.current?.focus(), 0);
    }
  };

  const validatePassword = (password) => {
    return (
      password.length >= 6 &&
      /[a-zA-Z]/.test(password) &&
      /\d/.test(password)
    );
  };

  const handleSubmit = async () => {
    try {
      if (isRegister) {
        if (!name || (!emailOrPhone && !isPhone) || !password || !confirmPassword) {
          setError("Все поля обязательны для заполнения!");
          return;
        }
        if (password !== confirmPassword) {
          setError("Пароли не совпадают!");
          return;
        }
        if (!validatePassword(password)) {
          setError("Пароль должен содержать минимум 6 символов, включая буквы и цифры!");
          return;
        }
        const data = isPhone
          ? { fullname: name, phoneNumber: phone.replace(/[^\d]/g, ""), password }
          : { fullname: name, email: emailOrPhone, password };
        const res = await signUp(data);
        localStorage.setItem('user_id', res.data.user._id);
        localStorage.setItem('verification_tokenauthuser', res.data.token);
        setCurrentUser(res?.data?.user);
      } else {
        if ((!emailOrPhone && !isPhone) || !password) {
          setError("Email/Телефон и пароль обязательны!");
          return;
        }
        const data = isPhone
          ? { phoneNumber: phone.replace(/[^\d]/g, ""), password }
          : { email: emailOrPhone, password };
        const res = await login(data);
        localStorage.setItem('user_id', res.data.user._id);
        localStorage.setItem('verification_tokenauthuser', res.data.token);
        setCurrentUser(res?.data?.user);
      }
      setError("");
      setModalOpen(false);
    } catch (error) {
      console.error(error);
      setError(error?.response?.data?.message || "Ошибка сервера");
    }
  };

  return (
    <>
      <Link
        to={userId ? '/profile' : ''}
        className="option_items"
        onClick={!userId && showModal}
      >
        <FaRegUser className="icon" /> АККАУНТ
      </Link>
      <Modal centered footer={null} open={modalOpen} onCancel={showModal}>
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
                name='fullname'
                type="text"
                placeholder="Имя / Фамилия"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}
            {isPhone ? (
              <PhoneInput phone={phone} setPhone={setPhone} ref={phoneInputRef} />
            ) : (
              <input
                type="text"
                name=''
                placeholder="E-mail или Телефон"
                value={emailOrPhone}
                onChange={handleEmailOrPhoneChange}
                ref={emailInputRef}
              />
            )}
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
            {error && <div className="auth_error">{error}</div>}
            <button type="button" className="auth_btn" onClick={handleSubmit}>
              {isRegister ? 'Зарегистрироваться' : 'Вход'}
            </button>
          </form>
          <div className="google">
            <div className="auth_bottom">
              <Icons.roseLeft />
              <span>ИЛИ</span>
              <Icons.roseRight />
            </div>
            <GoogleAuth />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AuthModal;
