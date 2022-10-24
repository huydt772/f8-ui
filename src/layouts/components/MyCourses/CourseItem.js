import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './MyCourses.module.scss';

const cx = classNames.bind(styles);

function CourseItem() {
    return (
        <div className={cx('course-item')}>
            <Link className={cx('course-thumb-link')} to="/learning/reactjs">
                <Image
                    className={cx('course-thumb')}
                    src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png"
                    alt="ReactJS"
                />
            </Link>
            <div className={cx('course-info')}>
                <h3 className={cx('course-title')}>
                    <Link to="/learning/reactjs">Xây Dựng Website với ReactJS</Link>
                </h3>
                <p className={cx('last-completed')}>Học cách đây 3 ngày trước</p>

                <Tippy content="60%" placement="bottom">
                    <div className={cx('progress')} style={{ '--progress': '60%' }}></div>
                </Tippy>
            </div>
        </div>
    );
}

export default CourseItem;
