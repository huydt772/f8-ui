import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import CourseItem from './CourseItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './MyCourses.module.scss';

const cx = classNames.bind(styles);

function MyCourses({ children }) {
    return (
        <Tippy
            trigger="click"
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('wrapper')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <header className={cx('header')}>
                            <h6 className={cx('heading')}>Khóa học của tôi</h6>
                        </header>

                        <div className={cx('content')}>
                            <CourseItem
                                thumb="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png"
                                title="Xây Dựng Website với ReactJS"
                                lastCompleted="Học cách đây 10 ngày trước"
                            />
                            <CourseItem
                                thumb="https://files.fullstack.edu.vn/f8-prod/courses/12.png"
                                title="Lập Trình JavaScript Nâng Cao"
                                lastCompleted="Học cách đây 3 tháng trước"
                            />
                            <CourseItem
                                thumb="https://files.fullstack.edu.vn/f8-prod/courses/1.png"
                                title="Lập Trình JavaScript Cơ Bản"
                                lastCompleted="Học cách đây 4 tháng trước"
                            />
                        </div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

MyCourses.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MyCourses;
