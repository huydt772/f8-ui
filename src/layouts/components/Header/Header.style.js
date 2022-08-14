import styled from 'styled-components';
import images from '~/assets/images';

export const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
    height: var(--header-height);
    border-bottom: 1px solid #e8ebed;
    padding: 0 28px;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;

    img {
        border-radius: 8px;
        flex-shrink: 0;
        height: 38px;
        object-fit: contain;
        width: 38px;
    }
`;

export const Heading = styled.h4`
    color: var(--black-color);
    font-size: 1.4rem;
    font-weight: 700;
    margin-left: 16px;
`;

export const Search = styled.div`
    display: flex;
`;

export const SearchIcon = styled.div`
    background-image: url(${images.searchIcon});
    background-repeat: no-repeat;
    background-size: 18px;
    background-position: 50%;

    width: 30px;
    height: 32px;
    opacity: 0.8;
`;

export const Input = styled.input``;
