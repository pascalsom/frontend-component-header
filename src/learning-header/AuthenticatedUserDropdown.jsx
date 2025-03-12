import React from 'react';
import PropTypes from 'prop-types';

import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { Dropdown } from '@openedx/paragon';

import messages from './messages';

const AuthenticatedUserDropdown = ({ intl, username }) => {
  const dashboardMenuItem = (
    <Dropdown.Item href={`${getConfig().LMS_BASE_URL}/dashboard`}>
      {intl.formatMessage(messages.dashboard)}
    </Dropdown.Item>
  );

  return (
    <Dropdown className="user-dropdown ml-3">
      <Dropdown.Toggle variant="outline-primary">
        <div className="hamburger-menu">
          <span className="line" />
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </div>
        <span data-hj-suppress className="d-none d-md-inline">
          {username}
        </span>
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu-right">
        <a href={`${getConfig().LMS_BASE_URL}/dashboard`} className="pgn__dropdown-item dropdown-item h-desktop">My Courses</a>
        <a href={`${getConfig().LMS_BASE_URL}/courses`} className="pgn__dropdown-item dropdown-item h-desktop">Discover</a>
        {dashboardMenuItem}
        <Dropdown.Item href={'https://neontoservices.ciamlogin.com/neontoservices.onmicrosoft.com/oauth2/v2.0/logout?post_logout_redirect_uri=https://academy2.neonto.de/logout\''}>
          {intl.formatMessage(messages.signOut)}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

AuthenticatedUserDropdown.propTypes = {
  intl: intlShape.isRequired,
  username: PropTypes.string.isRequired,
};

export default injectIntl(AuthenticatedUserDropdown);
