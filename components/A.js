import React from 'react';
import styles from '../styles/A.module.scss';
import Link from "next/link";

function A({href, text, navLink}) {
    return (
        <Link  href={href}>
            <a  className={ navLink ? styles.link   :   styles.linkNav }>{text}</a>
        </Link>
    );
}

export default A;
