import React from "react";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Navbar,
  Nav,
  Container,
  Media
} from "reactstrap";

import { withTranslation } from 'react-i18next';
import i18n from '../i18n.js';

const cookie = new Cookies();

class UVAdminNavbar extends React.Component {
  handlelogout = () => {
    cookie.remove('notCredentials', { path: '/' })
  }
  render() {
    const { t } = this.props
    return (
      <>
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container fluid>
            <Link
              className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
              to="/"
            >
            </Link>
            <Nav className="align-items-center d-none d-md-flex" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle className="pr-0" nav>
                  <Media className="align-items-center">
                    <span className="avatar avatar-sm rounded-circle">
                      <img
                        alt="..."
                        src={require("assets/img/theme/team-4-800x800.jpg")}
                      />
                    </span>
                    <Media className="ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm font-weight-bold">
                        {t("Sidebar.MyAccount.1")}
                      </span>
                    </Media>
                  </Media>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                  <DropdownItem className="noti-title" header tag="div">
                    <h6 className="text-overflow m-0">Welcome!</h6>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-single-02" />
                    <span>{t('Sidebar.MyProfile.1')}</span>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-settings-gear-65" />
                    <span>{t('Sidebar.Settings.1')}</span>
                  </DropdownItem> 
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-calendar-grid-58" />
                    <span>{t('Sidebar.Activity.1')}</span>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-support-16" />
                    <span>{t('Sidebar.Support.1')}</span>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem to="/login" tag={Link} onClick={this.handlelogout}>
                    <i className="ni ni-user-run" />
                    <span>{t('Sidebar.Logout.1')}</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default withTranslation()(UVAdminNavbar);