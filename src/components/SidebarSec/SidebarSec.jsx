import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';

const SidebarSec = () => {
    return (
        <div>
             <Sidebar>
                <Menu
                    menuItemStyles={{
                    button: {
                        // the active class will be added automatically by react router
                        // so we can use it to style the active menu item
                        backgroundColor:'#09080F0D',
                        borderRadius: '50px',
                        [`&.active`]: {
                        backgroundColor: '#9538E2',
                        color: '#FFFFFF',
                        borderRadius:'50px',
                        fontWeight:'bold'
                        },
                    },
                    }}
                >
                    <MenuItem className='px-5 py-3' component={<NavLink to="/allProducts" />}> All Product</MenuItem>
                    <MenuItem className='px-5 py-3' component={<NavLink to="/laptops" />}> Laptops</MenuItem>
                    <MenuItem className='px-5 py-3' component={<NavLink to="/smartWatches" />}> Smart Watches</MenuItem>
                    <MenuItem className='px-5 py-3' component={<NavLink to="/phones" />}> Phones</MenuItem>
                    <MenuItem className='px-5 py-3' component={<NavLink to="/macBooks" />}> MacBooks</MenuItem>
                    <MenuItem className='px-5 py-3' component={<NavLink to="/accessories" />}> Accessories</MenuItem>
                </Menu>
             </Sidebar>
        </div>
    );
};

export default SidebarSec;