import React from 'react';
import classNames from 'classnames/bind';

import styles from '../styles.module.css';

const cx = classNames.bind(styles);

export type AlignItems = 'flex-start' | 'center' | 'flex-end';
export type JustifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';

export interface Props {
    alignItems?: AlignItems,
    justifyContent?: JustifyContent,
    className?: string,
    children: React.ReactNode,
}

const Row = ({ justifyContent, alignItems, className, children }: Props) => {
	const classes = cx(
		styles.row,
		justifyContent && styles[justifyContent],
		alignItems && styles[`align-${alignItems}`],
        className,
	);

	return <div className={classes}>{children}</div>;
};

export default Row;
