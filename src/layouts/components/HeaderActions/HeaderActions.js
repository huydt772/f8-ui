import classNames from 'classnames/bind';

import images from '~/assets/images';
import { BellIcon } from '~/components/Icons';
import MyCourses from '../MyCourses';
import styles from './HeaderActions.module.scss';

const cx = classNames.bind(styles);

function HeaderActions() {
    return (
        <div className={cx('wrapper')}>
            <MyCourses>
                <div className={cx('heading')}>Khóa học của tôi</div>
            </MyCourses>
            <div className={cx('action-btn')}>
                <BellIcon />
            </div>
            <img className={cx('avatar')} src={images.avatar} alt="Avatar" />
        </div>
    );
}

export default HeaderActions;
