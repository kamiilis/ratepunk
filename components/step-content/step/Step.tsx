import styles from './step.module.scss';
import Image from 'next/image';

interface StepProps {
    step: {
        stepNumber: string;
        stepHeading: string;
        stepText: string;
        stepImage: string;
        isStepImageInLeft: boolean;
    };
}

const Step: React.FC<StepProps> = ({step}) => {
    return(
        <section className={`${styles.step} ${step.isStepImageInLeft ? '' : styles['step--right'] } }`}>
            <div className={`${styles.step__imageContainer} ${step.isStepImageInLeft ? '' : styles['step__imageContainer--right'] }`}>
                <Image src={step.stepImage} alt="Step 1: invite" priority/>
            </div>
            <div  className={`${styles.step__content} ${step.isStepImageInLeft ? '' : styles['step__content--right'] }`}>
                <h2 className={styles.step__stepNumber}>{step.stepNumber}</h2>
                <h3 className={styles.step__heading}>{step.stepHeading}</h3>
                <p className={styles.step__description}>{step.stepText}</p>
            </div>
        </section>
    );
}

export default Step;