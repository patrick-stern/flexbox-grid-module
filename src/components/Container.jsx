import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from '../styles.module.css';

const cx = classNames.bind(styles)

const Container = ({ className, children }) => (
	<div className={cx(styles.container, className)}>
		{children}
	</div>
);

Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Container;