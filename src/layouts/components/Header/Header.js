import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import images from '~/assets/images';
import { ClearIcon, SearchIcon } from '~/components/Icons';
import HeaderActions from '../HeaderActions';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const [searchValue, setSearchValue] = useState('');

    const inputRef = useRef();

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <Link to="/">
                    <img src={images.logo} alt="F8" />
                </Link>
                <h4 className={cx('heading')}>Học Lập Trình Để Đi Làm</h4>
            </div>

            <div className={cx('search')}>
                <span className={cx('search-icon')}>
                    <SearchIcon />
                </span>

                <input
                    className={cx('input')}
                    ref={inputRef}
                    value={searchValue}
                    type="text"
                    placeholder="Tìm kiếm khóa học, bài viết, video, ..."
                    spellCheck="false"
                    onChange={handleChange}
                />
                {searchValue && (
                    <button className={cx('clear-btn')} onClick={handleClear}>
                        <ClearIcon />
                    </button>
                )}
            </div>

            <HeaderActions />
        </header>
    );
}

export default Header;
