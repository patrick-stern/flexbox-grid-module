import React from 'react';
import classNames from 'classnames/bind';

import styles from '../styles.module.css';

const cx = classNames.bind(styles);

export type Range = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface Props {
    sm?: Range,
    md?: Range,
    lg?: Range,
    className?: string,
    children: React.ReactNode,
}

const Col = ({ sm, md, lg, className, children }: Props) => {
	const classes = cx(
		styles.column,
		sm && styles[`sm-${sm}`],
		md && styles[`md-${md}`],
		lg && styles[`lg-${lg}`],
        className
	);
	return <div className={classes}>{children}</div>;
};

export default Col;
