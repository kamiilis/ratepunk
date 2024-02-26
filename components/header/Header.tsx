'use client';
import React, {useState, useEffect, useRef} from 'react';
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from './header.module.scss';
import logoRatepunk from '@/public/images/logo.svg';
import menu from '@/public/images/menu.svg';
import close from '@/public/images/close.svg';

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [mobileListHeight, setMobileListHeight] = useState<number>(0)
    const ref = useRef<HTMLUListElement>(null)
    const pathname = usePathname();
    const isBlogRoute = pathname.startsWith('/blog');
    
    useEffect(() => {
        if(ref.current?.clientHeight){
            setMobileListHeight(ref?.current?.clientHeight); 
        }
    },[mobileListHeight])

    return (
      <header className={styles.header}>
        <section className={styles.header__innerWrapper}>
            <Link className={styles.header__logoLink} href='/'>
                <Image src={logoRatepunk} alt="Ratepunk logo" priority/>
            </Link>
            {!isOpen ?
                <Image className={styles.header__burger} src={menu} alt="Menu burger logo" priority onClick={() => setIsOpen(!isOpen)}/>
                    :
                <Image className={styles.header__close} src={close} alt="Close logo" priority onClick={() => setIsOpen(!isOpen)}/>
            }
            <nav className={styles.header__desktopNav}>
                <ul className={styles.header__desktopList} ref={ref}>
                    <li><Link href="/chrome-extension" style={pathname === "/chrome-extension" ? {color:'#4EB3E3'} : {}}>chrome extension</Link></li>
                    <li><Link href="/price-comparison" style={pathname === "/price-comparison" ? {color:'#4EB3E3'} : {}}>price pomparison</Link></li>
                    <li><Link href="/blog" style={isBlogRoute ? {color:'#4EB3E3'} : {}}>blog</Link></li>
                </ul>
            </nav>
            <nav className={styles.header__mobileNav} style={isOpen ? {height:`${mobileListHeight}px`} : {}}>
                <ul className={styles.header__mobileList} ref={ref}>
                    <li><Link href="/chrome-extension" style={pathname === "/chrome-extension" ? {color:'#4EB3E3'} : {}}>chrome extension</Link></li>
                    <li><Link href="/price-comparison" style={pathname === "/price-comparison" ? {color:'#4EB3E3'} : {}}>price comparison</Link></li>
                    <li><Link href="/blog" style={isBlogRoute ? {color:'#4EB3E3'} : {}}>blog</Link></li>
                </ul>
            </nav>
        </section>
      </header>
    );
}

export default Header;