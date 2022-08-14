import { Link } from 'react-router-dom';
import images from '~/assets/images';
import { HeaderStyle, Logo, Heading, Search, SearchIcon, Input } from './Header.style';

function Header() {
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
                <Input type="text" placeholder="Tìm kiếm khóa học, bài viết, video, ..." />
            </Search>
        </HeaderStyle>
    );
}

export default Header;
