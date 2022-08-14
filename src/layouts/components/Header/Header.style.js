import styled from 'styled-components';
import images from '~/assets/images';

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
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
    width: 420px;
    height: 40px;
    border: 2px solid #e8e8e8;
    border-radius: 20px;
    padding: 0 16px 0 8px;
    transition: border-color 0.2s ease-in-out;

    &:focus-within {
        border-color: #444;
    }
`;

export const SearchIcon = styled.div`
    background-image: url(${images.searchIcon});
    background-repeat: no-repeat;
    background-size: 18px;
    background-position: 50%;

    width: 30px;
    height: 100%;
    opacity: 0.7;
`;

export const Input = styled.input`
    flex: 1;
    border: none;
    outline: none;
    caret-color: #444;
    height: 100%;
    padding: 0 4px;

    &::placeholder {
        color: var(--black-color);
        opacity: 0.7;
    }
`;

export const ClearBtn = styled.button`
    display: flex;
    align-items: center;
    padding: 4px 0 4px 4px;
    background-color: transparent;
    border: none;
    height: 100%;
    color: #7c7c7c;
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
`;

export const MyLearn = styled.button`
    border: none;
    padding: 8px;
    margin-right: 16px;
    font-weight: 600;
    font-size: 1.4rem;

    color: #333;
    background-color: transparent;
`;

export const ActionBtn = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    padding: 8px;
    color: #707070;

    &:hover {
        color: #333;
    }
`;

export const Avatar = styled.img`
    border-radius: 100rem;
    width: 28px;
    height: 28px;
    margin-left: 12px;
    object-fit: cover;
    cursor: pointer;
`;
