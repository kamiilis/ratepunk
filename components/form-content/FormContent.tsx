
'use client';
import styles from './form-content.module.scss';
import Form from './form/Form';

const FormContent = () => {
    return(
        <section className={styles.formContent}>
            <h1 className={styles.formContent__header}>REFER FRIENDS AND GET REWARDS</h1>
            <p className={styles.formContent__text}>Refer your friends to us and earn hotel booking vouchers. We&apos;ll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.</p>
            <Form/>
            <span className={styles.formContent__sideNote}>Limits on max rewards apply.</span>
        </section>
    );
}

export default FormContent;