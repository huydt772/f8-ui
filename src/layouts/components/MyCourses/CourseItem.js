import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';

import 'tippy.js/dist/tippy.css';
import Image from '~/components/Image';
import styles from './MyCourses.module.scss';

const cx = classNames.bind(styles);

function CourseItem({ thumb, title, lastCompleted }) {
    return (
        <div className={cx('course-item')}>
            <Link className={cx('course-thumb-link')} to="/learning/reactjs">
                <Image className={cx('course-thumb')} src={thumb} alt={title} />
            </Link>
            <div className={cx('course-info')}>
                <h3 className={cx('course-title')}>
                    <Link to="/learning/reactjs">{title}</Link>
                </h3>
                <p className={cx('last-completed')}>{lastCompleted}</p>

                <Tippy content="60%" placement="bottom">
                    <div className={cx('progress')} style={{ '--progress': '60%' }}></div>
                </Tippy>
            </div>
        </div>
    );
}

CourseItem.propTypes = {
    thumb: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    lastCompleted: PropTypes.string.isRequired,
};

export default CourseItem;
