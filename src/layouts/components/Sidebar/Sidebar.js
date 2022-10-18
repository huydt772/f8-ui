import classNames from 'classnames/bind';
import { HomeIcon, LightBulbIcon, NewsPaperIcon, PlusIcon, RoadIcon } from '~/components/Icons';
import SidebarItem from './Item';
import SidebarList from './List';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('create-btn')}>
                <PlusIcon />
            </div>

            <SidebarList>
                <SidebarItem to="/" icon={<HomeIcon />}>
                    Home
                </SidebarItem>
                <SidebarItem to="/learning-paths" icon={<RoadIcon />}>
                    Lộ trình
                </SidebarItem>
                <SidebarItem to="/courses" icon={<LightBulbIcon />}>
                    Học
                </SidebarItem>
                <SidebarItem to="/blog" icon={<NewsPaperIcon />}>
                    Blog
                </SidebarItem>
            </SidebarList>
        </aside>
    );
}

export default Sidebar;
