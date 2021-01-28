import React from "react"
import banner from "../assets/banner.jpg"

import CardClaro from "../components/CardClaro"
import Sobre from "../components/Sobre"
import "./banner.css"
// import Layout from "../components/Layout"
// import Card from "../components/Card"

export default function IndexPage() {
  return (
    <section className="wrapper">
      <picture>
        <img src={banner} alt="banner" className="banner_img" />
      </picture>
      <main className="main">
        <CardClaro />
        <CardClaro />
        <CardClaro />

        <Sobre />
      </main>
    </section>
  )
}
