import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import config from '~/config';
import { HomeIcon, LightBulbIcon, NewsPaperIcon, PenIcon, PlusIcon, RoadIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import SidebarItem from './Item';
import SidebarList from './List';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    const [rotate, seRotate] = useState(false);

    const handleRotate = () => {
        seRotate(!rotate);
    };

    const handleHide = () => {
        seRotate(false);
    };

    return (
        <aside className={cx('wrapper')}>
            <HeadlessTippy
                visible={rotate}
                interactive
                placement="bottom-start"
                onClickOutside={handleHide}
                render={() => (
                    <PopperWrapper>
                        <ul className={cx('write-blog')}>
                            <li>
                                <Link to="/new-post">
                                    <PenIcon />
                                    <span>Viết blog</span>
                                </Link>
                            </li>
                        </ul>
                    </PopperWrapper>
                )}
            >
                <div
                    className={cx('create-btn', {
                        rotate,
                    })}
                    onClick={handleRotate}
                >
                    <PlusIcon />
                </div>
            </HeadlessTippy>

            <SidebarList>
                <SidebarItem to={config.routes.home} icon={<HomeIcon />}>
                    Home
                </SidebarItem>
                <SidebarItem to={config.routes.learningPaths} icon={<RoadIcon />}>
                    Lộ trình
                </SidebarItem>
                <SidebarItem to={config.routes.courses} icon={<LightBulbIcon />}>
                    Học
                </SidebarItem>
                <SidebarItem to={config.routes.blog} icon={<NewsPaperIcon />}>
                    Blog
                </SidebarItem>
            </SidebarList>
        </aside>
    );
}

export default Sidebar;
