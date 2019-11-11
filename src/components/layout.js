/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Cart from "./Cart"
import Navigation from "../components/Navigation"
import Footer from "./Footer"
//import "./layout.css"
import "../assets/icons/style.css"
import "../scss/style.scss"

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
