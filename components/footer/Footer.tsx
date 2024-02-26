'use client';
import styles from './footer.module.scss';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import Image from 'next/image';
import logoRatepunk from '@/public/images/logo.svg';
import instagram from '@/public/images/instagram.svg';
import facebook from '@/public/images/facebook.svg';
import linkedIn from '@/public/images/linkedin.svg';
import twitter from '@/public/images/twitter.svg';
import tiktok from '@/public/images/tiktok.svg';
import email from '@/public/images/email-footer.svg';

const Footer = () => {
    const getYear = new Date().getFullYear();
    const pathname = usePathname();
    
    return (
        <footer className={styles.footer}>
            <article className={styles.footer__innerWrapper}>
                <section className={styles.footer__logoBlock}>
                    <Image src={logoRatepunk} alt="Ratepunk logo"/>
                    <p className={styles.footer__logoBlockText}>Ratepunk compares hotel room prices across the major online travel agencies. When you search for a room, Ratepunk extension scans the top booking sites and runs a price comparison, so you can be confident in knowing you’re getting the best deal!</p>
                    <p className={styles.footer__logoBlockYearDesktop}>© {getYear} Ratepunk. All Rights Reserved.</p>
                </section>
                <section className={styles.footer__linkBlock}>
                    <section className={styles.footer__quickLinks}>
                        <h3>QUICK LINKS</h3>
                        <ul>
                            <li><Link href="/price-comparison" style={pathname === "/price-comparison" ? {color:'#4EB3E3'} : {}}>price comparison</Link></li>
                            <li><Link href="/chrome-extension" style={pathname === "/chrome-extension" ? {color:'#4EB3E3'} : {}}>chrome extension</Link></li>
                            <li><Link href="/how-it-works" style={pathname === "/how-it-works" ? {color:'#4EB3E3'} : {}}>how it works</Link></li>
                            <li><Link href="/blog" style={pathname === "/blog" ? {color:'#4EB3E3'} : {}}>Ratepunk blog</Link></li>
                            <li><Link href="/privacy-policy" style={pathname === "/privacy-policy" ? {color:'#4EB3E3'} : {}}>privacy policy</Link></li>
                        </ul>
                    </section>
                    <section className={styles.footer__contact}>
                        <h3>CONTACT</h3>
                        <div>
                            <Image src={email} alt="Ratepunk logo"/>
                            <a href="mailto:hi@ratepunk.com">hi@ratepunk.com</a>
                        </div>
                    </section>
                    <section className={styles.footer__social}>
                        <h3>SOCIAL</h3>
                        <ul>
                            <li>
                                <a href="#">
                                    <Image src={instagram} alt="Ratepunk logo"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Image src={facebook} alt="Ratepunk logo"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Image src={linkedIn} alt="Ratepunk logo"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Image src={twitter} alt="Ratepunk logo"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Image src={tiktok} alt="Ratepunk logo"/>
                                </a>
                            </li>
                        </ul>
                    </section>
                </section>
                <p className={styles.footer__logoBlockYearMobile}>© {getYear} Ratepunk. All Rights Reserved.</p>
            </article>
        </footer>
    );
}

export default Footer;