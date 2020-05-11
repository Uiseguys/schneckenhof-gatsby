/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"

import Cart from "./cart"
import Navigation from "./navigation"
import Footer from "./footer"
import "../assets/icons/style.css"
import "../scss/style.scss"

const Layout = ({ children }) => (
  <>

    {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
    <Helmet>
      <script src={withPrefix('script.js')} type="text/javascript" />
    </Helmet>
    <Cart />
    <Navigation />
    {children}
    <Footer />

  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
