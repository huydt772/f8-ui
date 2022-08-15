import { ItemLink, Title } from './Sidebar.style';

function Item({ to, icon, children }) {
    return (
        <ItemLink to={to}>
            <span>{icon}</span>
            <Title>{children}</Title>
        </ItemLink>
    );
}

export default Item;
