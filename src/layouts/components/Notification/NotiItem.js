import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './Notification.module.scss';

const cx = classNames.bind(styles);

function NotiItem() {
    return (
        <Link to="/" className={cx('item')}>
            <div className={cx('avatar')}>
                <Image src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png" alt="F8" />
            </div>
            <div className={cx('message-wrapper')}>
                <p>
                    <span className={cx('name')}>Sơn Đặng</span> đã nhắc tới bạn trong một bình luận.
                </p>
                <span className={cx('created-time')}>17 ngày trước</span>
            </div>
        </Link>
    );
}

export default NotiItem;
