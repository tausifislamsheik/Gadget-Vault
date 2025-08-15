import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';

const SidebarSec = () => {
    return (
        <div className=''>
             <Sidebar>
                <Menu
                    menuItemStyles={{
                    button: {
                        // the active class will be added automatically by react router
                        // so we can use it to style the active menu item
                        [`&.active`]: {
                        backgroundColor: '#9538E2',
                        color: '#FFFFFF',
                        },
                    },
                    }}
                >
                    <MenuItem component={<NavLink to="/allProducts" />}> All Product</MenuItem>
                    <MenuItem component={<NavLink to="/laptops" />}> Laptops</MenuItem>
                    <MenuItem component={<NavLink to="/smartWatches" />}> Smart Watches</MenuItem>
                    <MenuItem component={<NavLink to="/phones" />}> Phones</MenuItem>
                    <MenuItem component={<NavLink to="/macBooks" />}> MacBooks</MenuItem>
                    <MenuItem component={<NavLink to="/accessories" />}> Accessories</MenuItem>
                </Menu>
             </Sidebar>
        </div>
    );
};

export default SidebarSec;