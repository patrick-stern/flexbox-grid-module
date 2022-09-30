import React from 'react';
import classNames from 'classnames/bind';

import styles from '../styles.module.css';

const cx = classNames.bind(styles)

export interface Props {
    className?: string,
    children: React.ReactNode,
}

const Container = ({ className, children }: Props) => (
	<div className={cx(styles.container, className)}>
		{children}
	</div>
);

export default Container;