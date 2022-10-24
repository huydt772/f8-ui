import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Image from '~/components/Image';
import images from '~/assets/images';
import HeaderActions from '../HeaderActions';
import Search from '../Search';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <Link to="/">
                    <Image src={images.logo} alt="F8" />
                </Link>
                <h4 className={cx('heading')}>Học Lập Trình Để Đi Làm</h4>
            </div>

            <Search />

            <HeaderActions />
        </header>
    );
}

export default Header;
