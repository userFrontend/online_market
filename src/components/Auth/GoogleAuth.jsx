import { useGoogleLogin } from '@react-oauth/google';
import { useEffect, useState } from 'react';
import { addReq } from '../../api/addRequest';
import { FcGoogle } from 'react-icons/fc';
const GoogleAuth = () => {
    const [userData, setUserData] = useState(null)
    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: {
                        Authorization: `Bearer ${tokenResponse.access_token}`,
                    },
                });
                const profile = await res.json();
                console.log(profile);
                setUserData(profile)
            } catch (error) {
                console.error('API Error:', error);
            }
        },
        onError: (error) => console.error('Login Error:', error),
        scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
    });

    useEffect(()=>{
        const sign = async() => {
            try {
                const data = {
                    fullname: `${userData.given_name} ${userData.family_name}`,
                    email: userData.email,
                };
                const respond = await addReq(data, 'auth/googleAuth');

                localStorage.setItem('user_id', respond.data.user._id);
                localStorage.setItem('verification_tokenauthuser', respond.data.token);
                window.location.replace('/');
            } catch (error) {
                console.log(error);
                
            }
        }
        if(userData){
            sign()
        }
    },[userData])

    return <button className='google_btn' onClick={() => login()}><FcGoogle className='icon'/> Войти через Google</button>;
};

export default GoogleAuth;
