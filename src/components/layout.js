import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

import './layout.scss'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="de" />
          <link href="https://fonts.googleapis.com/css?family=Oswald:700|Source+Sans+Pro:400,700" rel="stylesheet" async/>
        </Helmet>

        <Header siteTitle={data.site.siteMetadata.title} />

        <div className="dark-background padding-top-header">
          {children}
        </div>

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
