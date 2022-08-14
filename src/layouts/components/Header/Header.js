import { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import { BellIcon, ClearIcon } from '~/components/Icons';
import {
    HeaderStyle,
    Logo,
    Heading,
    Search,
    SearchIcon,
    Input,
    Actions,
    MyLearn,
    ActionBtn,
    Avatar,
    ClearBtn,
} from './Header.style';

function Header() {
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    return (
        <HeaderStyle>
            <Logo>
                <Link to="/">
                    <img src={images.logo} alt="F8" />
                </Link>
                <Heading>Học Lập Trình Để Đi Làm</Heading>
            </Logo>

            <Search>
                <SearchIcon />
                <Input
                    value={searchValue}
                    type="text"
                    placeholder="Tìm kiếm khóa học, bài viết, video, ..."
                    spellCheck="false"
                    onChange={handleChange}
                />
                <ClearBtn>
                    <ClearIcon />
                </ClearBtn>
            </Search>

            <Actions>
                <MyLearn>Khóa học của tôi</MyLearn>
                <ActionBtn>
                    <BellIcon />
                </ActionBtn>
                <Avatar src={images.avatar} alt="Avatar" />
            </Actions>
        </HeaderStyle>
    );
}

export default Header;
