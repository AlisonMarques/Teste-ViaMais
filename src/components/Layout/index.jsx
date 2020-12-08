import React from "react"
import PropTypes from "prop-types"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      Header
      <main>{children}</main>
      Footer
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
