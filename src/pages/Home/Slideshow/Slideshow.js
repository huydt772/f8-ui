import classNames from 'classnames/bind';
import { ChevronLeft, ChevronRight } from '~/components/Icons';
import Image from '~/components/Image';
import styles from './Slideshow.module.scss';

const cx = classNames.bind(styles);

function Slideshow() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('arrow')}>
                <ChevronLeft />
            </div>

            <div className={cx('item')}>
                <div className={cx('left')}>
                    <h2 className={cx('heading')}>
                        <a
                            rel="noreferrer"
                            href="https://www.youtube.com/channel/UCNSCWwgW-rwmoE3Yc4WmJhw"
                            target="_blank"
                        >
                            F8 trên Youtube
                        </a>
                    </h2>
                    <p className={cx('desc')}>
                        F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích
                        lập trình F8 sẽ ở đó.
                    </p>
                    <div>
                        <a
                            className={cx('cta-btn')}
                            rel="noreferrer"
                            href="https://www.youtube.com/channel/UCNSCWwgW-rwmoE3Yc4WmJhw"
                            target="_blank"
                        >
                            Truy cập kênh
                        </a>
                    </div>
                </div>
                <div className={cx('right')}>
                    <a rel="noreferrer" href="https://www.youtube.com/channel/UCNSCWwgW-rwmoE3Yc4WmJhw" target="_blank">
                        <Image
                            src="https://files.fullstack.edu.vn/f8-prod/banners/Banner_03_youtube.png"
                            alt="F8 trên Youtube"
                        />
                    </a>
                </div>
            </div>

            <div className={cx('arrow')}>
                <ChevronRight />
            </div>
        </div>
    );
}

export default Slideshow;
