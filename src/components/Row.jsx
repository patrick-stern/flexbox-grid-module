import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from '../styles.module.css';

const cx = classNames.bind(styles);

const Row = ({ justifyContent, alignItems, className, children }) => {
	const classes = cx(
		styles.row,
		justifyContent && styles[justifyContent],
		alignItems && styles[`align-${alignItems}`],
        className,
	);

	return <div className={classes}>{children}</div>;
};

Row.propTypes = {
	alignItems: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),
	justifyContent: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']),
    className: PropTypes.string,
	children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Row;
