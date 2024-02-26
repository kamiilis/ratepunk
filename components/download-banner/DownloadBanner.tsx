import Image from 'next/image';
import styles from './download-banner.module.scss';
import chrome from '@/public/images/chrome.svg';
import apple from '@/public/images/apple.svg';
import star from '@/public/images/star.svg';

const DownloadBanner = () => {
    return(
        <section className={styles.downloadBanner}>
            <div className={styles.downloadBanner__innerWrapper}>
                <a className={styles.downloadBanner__chromeStore} href="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklk hgcbomfdck?utm_source=ratepunk">
                    <Image src={chrome} alt="Chrome web store image"/>
                    <span>available in the</span>
                    <span>chrome web store</span>
                </a>
                <a className={styles.downloadBanner__appleStore} href="https://apps.apple.com/app/ratepunk/id1607823726%5D">
                    <Image src={apple} alt="Apple app store image"/>
                    <span>available in the</span>
                    <span>apple app store</span>
                </a>
                <div className={styles.downloadBanner__rating}>
                    <div className={styles.downloadBanner__starContainer}>
                        <Image src={star} alt="Star"/>
                        <Image src={star} alt="Star"/>
                        <Image src={star} alt="Star"/>
                        <Image src={star} alt="Star"/>
                        <Image src={star} alt="Star"/>
                    </div>
                    <span className={styles.downloadBanner__downloads}>Chrome Store reviews</span>
                </div>
            </div>
        </section>
    );
}

export default DownloadBanner;