'use client';
import styles from './form.module.scss';
import mail from '@/public/images/email.svg';
import success from '@/public/images/success.svg';
import Image from 'next/image';
import { useState } from 'react';
import {sendEmail} from '@/lib/api';

const Form = () => {
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const [showReferral, setShowReferral] = useState<boolean>(false);
    const [popup, setPopup] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(email.length > 1  && email.includes('@')){
            setError(false);
            setShowReferral(true);
        }
        else{
            setError(true);
            return;
        } 

        sendEmail(email);
    };

    const handleCopyStateValue = () => {
        navigator.clipboard.writeText('https://ratepunk.com/referral');
    };

    const handlePopup = () => {
        setPopup(true);
        setTimeout(() => {
            setPopup(false);
        }, 2000);
    };

    return(
        <form onSubmit={(e) => handleSubmit(e)} className={styles.formContent}>
            {!showReferral &&             
                <div className={styles.form__emailBox}>
                    <div className={styles.form__emailError}>{error ? 'Error State' : ''}</div>
                    <div className={styles.form__emailInputBox}>
                        <Image src={mail} alt="Mail icon" priority/>
                        <input onChange={(e) => {setEmail(e.target.value);
                            
                        }} className={styles.form__emailInput} type="text" placeholder='Enter your email address'/>
                    </div>
                </div>
            }
            {showReferral &&    
                <div className={styles.form__successBox}>
                    <div className={styles.form__popup} style={{ opacity: popup ? 1 : 0 }}>Copied!</div>
                    <div className={styles.form__successMessage}>
                        <Image src={success} alt="Mail icon" priority/>
                        <span>Your email is confirmed!</span>
                    </div>
                    <div className={styles.form__referralBox}>
                        <input type="text" className={styles.form__referralInput} value='https://ratepunk.com/referral' disabled/>
                        <button className={styles.form__copyBtn} type='button' onClick={() => {handleCopyStateValue(); handlePopup();}}>Copy</button>
                    </div>
                    <button className={`${styles.form__copyBtn} ${styles['form__copyBtn--alt']}`}
                    onClick={() => {handleCopyStateValue(); handlePopup();}} type='button'>Copy URL</button>
                </div>
            }
            {!showReferral && <button type="submit" className={styles.form__submitBtn}>Get referral Link</button>}
        </form>
    );
}

export default Form;
