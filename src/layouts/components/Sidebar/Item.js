import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Item({ to, icon, children }) {
    return (
        <NavLink className={({ isActive }) => cx('item-link', { active: isActive })} to={to}>
            <span>{icon}</span>
            <span className={cx('title')}>{children}</span>
        </NavLink>
    );
}

Item.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
};

export default Item;
