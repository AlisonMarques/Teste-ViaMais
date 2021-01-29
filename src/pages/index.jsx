import React from "react"

import Layout from "../components/Layout"
import CardClaro from "../components/CardClaro"
import Sobre from "../components/Sobre"

import "../components/Sobre/style.css"
import "../components/CardClaro/style.css"
import "../components/Layout/style.css"

export default function IndexPage() {
  return (
    <div>
      <Layout />
      <CardClaro />

      <Sobre />
    </div>
  )
}
