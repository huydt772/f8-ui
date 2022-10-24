import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { CheckIcon, EllipsisIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Notification.module.scss';
import NotiItem from './NotiItem';

const cx = classNames.bind(styles);

function Notification({ children }) {
    return (
        <Tippy
            trigger="click"
            interactive
            placement="bottom-end"
            offset={[8, 19]}
            render={(attrs) => (
                <div className={cx('wrapper')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <header className={cx('header')}>
                            <h6>Thông báo</h6>

                            <Tippy
                                trigger="click"
                                interactive
                                placement="bottom-end"
                                offset={[10, 14]}
                                render={(attrs) => (
                                    <ul className={cx('wrapper-option')} tabIndex="-1" {...attrs}>
                                        <li className={cx('item-option')}>
                                            <CheckIcon />
                                            <p>Đánh dấu tất cả đã đọc</p>
                                        </li>
                                    </ul>
                                )}
                            >
                                <span className={cx('mark-read-all')}>
                                    <EllipsisIcon />
                                </span>
                            </Tippy>
                        </header>
                        <div className={cx('content')}>
                            <NotiItem />
                            <NotiItem />
                            <NotiItem />
                            <NotiItem />
                            <NotiItem />
                            <NotiItem />
                            <NotiItem />

                            <Link to="/notifications" className={cx('see-all')}>
                                <p>Xem tất cả thông báo</p>
                            </Link>
                        </div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

Notification.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Notification;
