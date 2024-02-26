import styles from './step-content.module.scss';
import Step from './step/Step';
import invite from '@/public/images/invite.svg';
import collectCoins from '@/public/images/collect-coins.svg';
import voucher from '@/public/images/voucher.svg';

const StepContent = () => {
    const stepArray = [
        {
            stepNumber: 'Step 1',
            stepHeading: 'Invite friends',
            stepText: 'refer friends with your unique referral link',
            stepImage: invite,
            isStepImageInLeft: true
        },
        {
            stepNumber: 'Step 2',
            stepHeading: 'COLLECT COINS',
            stepText: 'Get 1 coin for each friend that installs our extension using your referral link.',
            stepImage: collectCoins,
            isStepImageInLeft: false
        },
        {
            stepNumber: 'Step 3',
            stepHeading: 'GET VOUCHER',
            stepText: 'Redeem for a $20 hotel booking voucher once you collect 20 coins.',
            stepImage: voucher,
            isStepImageInLeft: true
        },
    ];
    return(
        <section className={styles.stepContent}>
            {   stepArray.map((step, index) => {
                    return (
                        <Step key={index} step={step}/>
                    );
                })
            }
        </section>
 
    );
}

export default StepContent;