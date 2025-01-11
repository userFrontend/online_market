import { useGoogleLogin } from '@react-oauth/google';
import { useEffect, useState } from 'react';
import { addReq } from '../../api/addRequest';
import { FcGoogle } from 'react-icons/fc';
import { useInfoContext } from '../../context/infoContext';

const GoogleAuth = () => {
    const { setModalOpen, setUserId } = useInfoContext();
    const [userData, setUserData] = useState(null);

    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: {
                        Authorization: `Bearer ${tokenResponse.access_token}`,
                    },
                });

                if (!res.ok) {
                    throw new Error('Failed to fetch user info from Google API');
                }

                const profile = await res.json();
                setUserData(profile);
            } catch (error) {
                console.error('API Error:', error.message || error);
            }
        },
        onError: (error) => console.error('Login Error:', error),
        scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
    });

    useEffect(() => {
        const signIn = async () => {
            try {
                if (!userData) return;
                const data = {
                    fullname: `${userData.given_name || ''} ${userData.family_name || ''}`.trim(),
                    email: userData.email,
                };

                const response = await addReq(data, 'auth/googleAuth');

                // Ma'lumotlarni localStorage ga saqlash
                localStorage.setItem('user_id', response.data.user._id);
                localStorage.setItem('verification_tokenauthuser', response.data.token);

                // Modalni yopish
                setModalOpen(false);
                setUserId(response.data.user._id);
            } catch (error) {
                console.error('Authentication Error:', error.message || error);
            }
        };

        signIn();
    }, [userData, setModalOpen, setUserId]);

    return (
        <button className="google_btn" onClick={login}>
            <FcGoogle className="icon" /> Войти через Google
        </button>
    );
};

export default GoogleAuth;
