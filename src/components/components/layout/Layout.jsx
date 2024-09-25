import { NavLink, Outlet } from 'react-router-dom';
import TotalIcons from '../../logo.svg';
// import Vector from './Vector.png';
import {
  HEADER_SECTION,
  FIXED_DIV,
  MENU_NAV,
  IMG,
  A_DIV,
  PHONE_DIV,
} from './Layout.styled.jsx';
import Footer from '../footer/Footer';

export const Layout = () => {
  return (
    <>
      <FIXED_DIV>
        <HEADER_SECTION>
          <IMG src={TotalIcons} alt="totalLogo" />
          <MENU_NAV>
            <A_DIV>
              <NavLink to="/">Меню</NavLink>
            </A_DIV>
            <A_DIV>
              <NavLink to="/about_me">Обо мне</NavLink>
            </A_DIV>
            <A_DIV>
              <NavLink to="/reviews">Отзывы</NavLink>
            </A_DIV>
            <A_DIV>
              <NavLink to="/services">Услуги</NavLink>
            </A_DIV>
            <A_DIV>
              <NavLink to="/information">Информация</NavLink>
              {/* <img src={Vector} alt="Vector" width /> */}
            </A_DIV>
            <A_DIV>
              <NavLink to="/articles">Статьи</NavLink>
            </A_DIV>
          </MENU_NAV>
          <PHONE_DIV>
            <p>8(905) 495-95-28</p>
            <p>8(918) 042-76-87</p>
          </PHONE_DIV>
        </HEADER_SECTION>
      </FIXED_DIV>
      <Outlet />
      <Footer />
    </>
  );
};
