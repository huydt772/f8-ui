import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarStyle = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: var(--sidebar-width);
    padding-top: 8px;
`;

export const CreateButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 100rem;
    margin: 8px 0 2px;
    width: 44px;
    height: 44px;
    color: #fff;
    background-color: #1473e6;
    user-select: none;
    cursor: pointer;

    svg {
        transition: transform 0.3s ease, -webkit-transform 0.3s ease;
    }

    &:hover svg {
        transform: scale(1.4);
    }
`;

export const SidebarList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
`;

export const ItemLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 16px;
    color: #404040;
    height: 72px;
    width: 72px;
    margin-top: 4px;

    span:first-child {
        display: flex;
    }

    &:hover {
        color: #1a1a1a;
        background-color: #f5f5f5;
    }

    &.active {
        color: #1a1a1a;
        background-color: #e8ebed;
    }
`;

export const Title = styled.span`
    margin-top: 6px;
    font-size: 1.1rem;
    font-weight: 600;
`;
