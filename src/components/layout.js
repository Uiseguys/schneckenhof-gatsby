/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"

import Cart from "./cart"
import Navigation from "./navigation"
import Footer from "./footer"
import "../scss/style.scss"
import "../assets/icons/style.css"

const Layout = ({ children }) => {
  //const data = useStaticQuery(graphql`
  //query SiteTitleQuery {
  //site {
  //siteMetadata {
  //title
  //}
  //}
  //}
  //`)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Cart />
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
