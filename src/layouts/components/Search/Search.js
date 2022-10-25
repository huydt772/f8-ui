import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import Image from '~/components/Image';
import { ClearIcon, MagnifyingGlass, SearchIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
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

    const searchResult = (attrs) => (
        <PopperWrapper>
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <header className={cx('header')}>
                    <MagnifyingGlass />
                    <span>Kết quả cho 'reactjs'</span>
                </header>

                <div className={cx('heading')}>
                    <h5>KHÓA HỌC</h5>
                    <Link className={cx('see-more')} to="/search?q=reactjs">
                        Xem thêm
                    </Link>
                </div>

                <Link className={cx('search-item')} to="/courses/reactjs">
                    <Image src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png" alt="ReactJS" />
                    <span>Xây Dựng Website với ReactJS</span>
                </Link>

                <Link className={cx('search-item')} to="/courses/reactjs">
                    <Image src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png" alt="ReactJS" />
                    <span>Xây Dựng Website với ReactJS</span>
                </Link>
            </div>
        </PopperWrapper>
    );

    return (
        <Tippy visible={true} interactive render={searchResult}>
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
        </Tippy>
    );
}

export default Search;
