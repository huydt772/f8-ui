import classNames from 'classnames/bind';

import images from '~/assets/images';
import { BellIcon } from '~/components/Icons';
import MyCourses from '../MyCourses';
import Notification from '../Notification';
import UserMenu from '../UserMenu';
import styles from './HeaderActions.module.scss';

const cx = classNames.bind(styles);

function HeaderActions() {
    return (
        <div className={cx('wrapper')}>
            <MyCourses>
                <div className={cx('my-courses-btn')}>Khóa học của tôi</div>
            </MyCourses>
            <div className={cx('notify-btn')}>
                <Notification>
                    <BellIcon />
                </Notification>
            </div>
            <UserMenu>
                <img className={cx('avatar')} src={images.avatar} alt="Avatar" />
            </UserMenu>
        </div>
    );
}

export default HeaderActions;
