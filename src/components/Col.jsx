import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from '../styles.module.css';

const cx = classNames.bind(styles);

const Col = ({ sm, md, lg, className, children }) => {
	const classes = cx(
		styles.column,
		sm && styles[`sm-${sm}`],
		md && styles[`md-${md}`],
		lg && styles[`lg-${lg}`],
        className
	);
	return <div className={classes}>{children}</div>;
};

Col.propTypes = {
	sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    className: PropTypes.string,
	children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Col;
