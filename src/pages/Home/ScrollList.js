import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import CommonItem from '~/components/CommonItem';
import { ChevronRight } from '~/components/Icons';
import config from '~/config';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function ScrollList() {
    return (
        <div className={cx('vertical')}>
            <div className={cx('head')}>
                <p className={cx('sub-heading')}>
                    <strong>252.452+</strong> người khác đã học
                </p>

                <div className={cx('heading-wrap')}>
                    <h2 className={cx('heading')}>
                        <Link to={config.routes.learningPaths}>Khóa học miễn phí</Link>
                    </h2>
                    <Link to={config.routes.learningPaths} className={cx('view-all')}>
                        Xem lộ trình
                        <ChevronRight />
                    </Link>
                </div>
            </div>

            <div className={cx('body')}>
                <div className={cx('grid')}>
                    <section className={cx('row')}>
                        <section className={cx('col', 'l-3')}>
                            <CommonItem />
                        </section>
                        <section className={cx('col', 'l-3')}>
                            <CommonItem />
                        </section>
                        <section className={cx('col', 'l-3')}>
                            <CommonItem />
                        </section>
                        <section className={cx('col', 'l-3')}>
                            <CommonItem />
                        </section>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default ScrollList;
