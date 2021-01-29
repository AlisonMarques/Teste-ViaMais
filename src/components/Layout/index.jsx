import React from "react"

import banner from "../../assets/banner.jpg"
import bannerMobile from "../../assets/banner-mobile.jpg"

export default function Layout() {
  return (
    <section className="wrapper">
      <header className="header">
        <picture>
          <source media="max-width: 667px" srcSet={bannerMobile} />
          <img src={banner} alt="banner" className="banner-img" />
        </picture>
      </header>
      <main className="main"></main>
    </section>
  )
}
