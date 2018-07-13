import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => {
    const styles = {
        svg: {
            display: 'inline-block',
            verticalAlign: 'middle',
        },
        path: {
            fill: props.color,
        },
    };

    return (
        <svg
            style={styles.svg}
            width={`${props.width}`}
            height={`${props.height}`}
            viewBox={`${props.viewBox}`}
            preserveAspectRatio="xMinYMin meet">
            <path
                style={styles.path}
                d={props.icon}
            ></path>
        </svg>
    );
};

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
    viewBox: PropTypes.string,
};

Icon.defaultProps = {
    width: 16,
    height: 16
};

export default Icon;