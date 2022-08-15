import { HomeIcon, LightBulbIcon, NewsPaperIcon, RoadIcon, PlusIcon } from '~/components/Icons';
import SidebarList from './List';
import SidebarItem from './Item';
import { SidebarStyle, CreateButton } from './Sidebar.style';

function Sidebar() {
    return (
        <SidebarStyle>
            <CreateButton>
                <PlusIcon />
            </CreateButton>

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
        </SidebarStyle>
    );
}

export default Sidebar;
