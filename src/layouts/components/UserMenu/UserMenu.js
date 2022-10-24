import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import Image from '~/components/Image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './UserMenu.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function UserMenu({ children }) {
    return (
        <Tippy
            trigger="click"
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <PopperWrapper>
                    <ul className={cx('wrapper')} tabIndex="-1" {...attrs}>
                        <div className={cx('user')}>
                            <Image
                                className={cx('avatar')}
                                src="https://files.fullstack.edu.vn/f8-prod/user_avatars/22972/62f8aceb34557.jpg"
                                alt="Huy"
                            />
                            <div className={cx('info')}>
                                <h4 className={cx('name')}>Nguyễn Văn Huy</h4>
                                <span className={cx('username')}>@huy-nguyen-van-6</span>
                            </div>
                        </div>
                        <hr />
                        <ul className={cx('list')}>
                            <li>
                                <Link to="/@huy-nguyen-van-6">Trang cá nhân</Link>
                            </li>
                        </ul>
                        <hr />
                        <ul className={cx('list')}>
                            <li>
                                <Link to="/new-post">Viết blog</Link>
                            </li>
                        </ul>
                        <ul className={cx('list')}>
                            <li>
                                <Link to="/me/posts/drafts">Bài viết của tôi</Link>
                            </li>
                        </ul>
                    </ul>
                </PopperWrapper>
            )}
        >
            {children}
        </Tippy>
    );
}

UserMenu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default UserMenu;
