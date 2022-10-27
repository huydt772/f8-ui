import classNames from 'classnames/bind';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import { UsersIcon } from '../Icons';
import styles from './CommonItem.module.scss';

const cx = classNames.bind(styles);

function CommonItem() {
    return (
        <div className={cx('wrapper')}>
            <Link to="/learning/lessons-for-newbie" className={cx('thumb')}>
                <button className={cx('btn')}>Tiếp tục học</button>
            </Link>
            <h3 className={cx('title')}>
                <Link to="/learning/lessons-for-newbie">Kiến Thức Nhập Môn IT</Link>
            </h3>

            <div className={cx('students-count')}>
                <UsersIcon />
                <span>86.231</span>
            </div>

            <div className={cx('price')}>
                <span className={cx('old-price')}>2.499.000đ</span>
                <span className={cx('main-price')}>1.299.000đ</span>
            </div>

            <div className={cx('author')}>
                <Link to="/@huydt772">
                    <Image src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png" alt="F8" />
                </Link>

                <Link to="@huydt772">
                    <strong>Sơn Đặng</strong>
                    <span className={cx('dot')}>·</span>
                    <span>6 phút đọc</span>
                </Link>
            </div>
        </div>
    );
}

export default CommonItem;
