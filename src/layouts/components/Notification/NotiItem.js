import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './Notification.module.scss';

const cx = classNames.bind(styles);

function NotiItem({ avatar, name, content, createdTime }) {
    return (
        <Link to="/" className={cx('item')}>
            <div className={cx('avatar')}>
                <Image src={avatar} alt={name} />
            </div>
            <div className={cx('message-wrapper')}>
                <p>
                    <span className={cx('name')}>{name}</span> {content}
                </p>
                <span className={cx('created-time')}>{createdTime}</span>
            </div>
        </Link>
    );
}

NotiItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    createdTime: PropTypes.string.isRequired,
};

export default NotiItem;
