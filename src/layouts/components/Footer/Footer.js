import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import images from '~/assets/images';
import { FacebookIcon, TiktokIcon, YoutubeIcon } from '~/components/Icons';
import Image from '~/components/Image';
import config from '~/config';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <section className={cx('grid', 'wide')}>
                <section className={cx('row')}>
                    <section className={cx('col', 'l-3', 'm-12', 'c-12')}>
                        <div className={cx('column')}>
                            <div>
                                <div className={cx('column-top')}>
                                    <Link to={config.routes.home}>
                                        <Image className={cx('top-logo')} src={images.logo} alt="F8" />
                                    </Link>
                                    <h2 className={cx('top-slogan')}>Học Lập Trình Để Đi Làm</h2>
                                </div>

                                <p className={cx('contact-list')}>
                                    Điện thoại: <a href="tel:0246.329.1102">0246.329.1102</a>
                                    <br />
                                    Email: <a href="mailto:contact@fullstack.edu.vn">contact@fullstack.edu.vn</a>
                                    <br />
                                    Địa chỉ: Nhà D9, lô A10, Nam Trung Yên, Trung Hòa, Cầu Giấy, Hà Nội
                                </p>

                                <div>
                                    <a
                                        href="https://www.dmca.com/Protection/Status.aspx?id=1b325c69-aeb7-4e32-8784-a0009613323a&refurl=https%3a%2f%2ffullstack.edu.vn%2f&rlo=true"
                                        target="_blank"
                                        rel="noreferrer"
                                        title="DMCA Protected"
                                    >
                                        <Image
                                            className={cx('dmca')}
                                            src="https://fullstack.edu.vn/static/media/dmca.2593d9ecf1c982e3c3a2.png"
                                            alt="DMCA"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={cx('col', 'l-2', ',m-4', 'c-12')}>
                        <div className={cx('column')}>
                            <div>
                                <h2 className={cx('heading')}>Về F8</h2>
                                <ul className={cx('list')}>
                                    <li>
                                        <Link to="/about-us">Giới thiệu</Link>
                                    </li>
                                    <li>
                                        <Link to="/careers">Cơ hội việc làm</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className={cx('col', 'l-2', ',m-4', 'c-12')}>
                        <div className={cx('column')}>
                            <div>
                                <h2 className={cx('heading')}>Công cụ</h2>
                                <ul className={cx('list')}>
                                    <li>
                                        <Link to="/shorten-urls">Shortener URL</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className={cx('col', 'l-2', ',m-4', 'c-12')}>
                        <div className={cx('column')}>
                            <div>
                                <h2 className={cx('heading')}>Hỗ trợ</h2>
                                <ul className={cx('list')}>
                                    <li>
                                        <Link to="/contact-us">Liên hệ</Link>
                                    </li>
                                    <li>
                                        <Link to="/privacy">Bảo mật</Link>
                                    </li>
                                    <li>
                                        <Link to="/terms">Điều khoản</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className={cx('col', 'l-3', 'm-6', 'c-12')}>
                        <div className={cx('column')}>
                            <div>
                                <h2 className={cx('heading')}>CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC F8</h2>
                                <ul className={cx('list')}>
                                    <li>Mã số thuế: 0109922901</li>
                                    <li>Ngày thành lập: 04/03/2022</li>

                                    <li>
                                        Lĩnh vực: Công nghệ, giáo dục, lập trình. F8 xây dựng và phát triển những sản
                                        phẩm mang lại giá trị cho cộng đồng.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>

                <section className={cx('row')}>
                    <section className={cx('col', 'l-12', 'm-12', 'c-12')}>
                        <div className={cx('bottom')}>
                            <p className={cx('copyright')}>
                                © 2018 - 2022 F8. Nền tảng học lập trình hàng đầu Việt Nam
                            </p>
                            <div className={cx('social-list')}>
                                <a
                                    className={cx('social-item', 'youtube')}
                                    href="https://www.youtube.com/c/F8VNOfficial"
                                    target="_blank"
                                    title="F8 trên Youtube"
                                    rel="noreferrer"
                                >
                                    <YoutubeIcon />
                                </a>
                                <a
                                    className={cx('social-item', 'facebook')}
                                    href="https://www.facebook.com/groups/f8official"
                                    target="_blank"
                                    title="F8 trên Facebook"
                                    rel="noreferrer"
                                >
                                    <FacebookIcon />
                                </a>
                                <a
                                    className={cx('social-item', 'tiktok')}
                                    href="https://www.tiktok.com/@f8official"
                                    target="_blank"
                                    title="F8 trên Tiktok"
                                    rel="noreferrer"
                                >
                                    <TiktokIcon />
                                </a>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        </footer>
    );
}

export default Footer;
