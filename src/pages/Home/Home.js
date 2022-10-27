import classNames from 'classnames/bind';
import ScrollList from './ScrollList';
import Slideshow from './Slideshow';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div>
            <div className={cx('slideshow')}>
                <Slideshow />
            </div>

            <div className={cx('wrapper')}>
                <ScrollList />
                <ScrollList />
                <ScrollList />
                <ScrollList />
            </div>
        </div>
    );
}

export default Home;
