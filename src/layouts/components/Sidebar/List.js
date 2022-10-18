import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function List({ children }) {
    return <div className={cx('list')}>{children}</div>;
}

List.propTypes = {
    children: PropTypes.node.isRequired,
};

export default List;
