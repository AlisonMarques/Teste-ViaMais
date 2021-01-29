import React from "react"

import logoWifi from "../../assets/logo-wifiplus.svg"
import logoNow from "../../assets/logo-now.svg"
import logoClaroMsc from "../../assets/logo-claromusica.svg"

const CardClaro = () => {
  return (
    <section className="pacotes">
      <div className="pacotes-slick">
        <div className="pacotes-item">
          <div className="pacotes-item-inner1">
            <h1 className="pacotes-item-titulo"> 120 MEGA</h1>
          </div>

          <div className="pacotes-item-inner2">
            <div className="pacotes-item-desc">
              <img src={logoWifi} alt="Wifi Plus" />
              <p>Mais alcance e potência no seu Wi-Fi</p>
            </div>

            <div className="pacotes-item-desc">
              <img src={logoNow} alt="NOW" />
              <p>Filmes e séries pra assistir online </p>
            </div>

            <div className="pacotes-item-desc">
              <img src={logoClaroMsc} alt="Claro Música" />
              <p>Milhões de músicas disponíveis online</p>
            </div>
          </div>
          <div className="pacotes-item-inner3">
            <div className="pacotes-item-preco">
              <p>R$</p>
              <h2>
                99 <sup>, 99</sup>
              </h2>
              <p>
                /mês<sup>*</sup>
              </p>
            </div>
            <div className="pacotes-item-assine">
              <a href="/assine" className="button button-lg">
                ASSINE ONLINE
              </a>
            </div>
          </div>
        </div>

        <div className="pacotes-item">
          <div className="pacotes-item-inner1">
            <h1 className="pacotes-item-titulo"> 120 MEGA</h1>
          </div>

          <div className="pacotes-item-inner2">
            <div className="pacotes-item-desc">
              <img src={logoWifi} alt="Wifi Plus" />
              <p>Mais alcance e potência no seu Wi-Fi</p>
            </div>

            <div className="pacotes-item-desc">
              <img src={logoNow} alt="NOW" />
              <p>Filmes e séries pra assistir online </p>
            </div>

            <div className="pacotes-item-desc">
              <img src={logoClaroMsc} alt="Claro Música" />
              <p>Milhões de músicas disponíveis online</p>
            </div>
          </div>
          <div className="pacotes-item-inner3">
            <div className="pacotes-item-preco">
              <p>R$</p>
              <h2>
                99 <sup>, 99</sup>
              </h2>
              <p>
                /mês<sup>*</sup>
              </p>
            </div>
            <div className="pacotes-item-assine">
              <a href="/assine" className="button button-lg">
                ASSINE ONLINE
              </a>
            </div>
          </div>
        </div>

        <div className="pacotes-item">
          <div className="pacotes-item-inner1">
            <h1 className="pacotes-item-titulo"> 120 MEGA</h1>
          </div>

          <div className="pacotes-item-inner2">
            <div className="pacotes-item-desc">
              <img src={logoWifi} alt="Wifi Plus" />
              <p>Mais alcance e potência no seu Wi-Fi</p>
            </div>

            <div className="pacotes-item-desc">
              <img src={logoNow} alt="NOW" />
              <p>Filmes e séries pra assistir online </p>
            </div>

            <div className="pacotes-item-desc">
              <img src={logoClaroMsc} alt="Claro Música" />
              <p>Milhões de músicas disponíveis online</p>
            </div>
          </div>
          <div className="pacotes-item-inner3">
            <div className="pacotes-item-preco">
              <p>R$</p>
              <h2>
                99 <sup>, 99</sup>
              </h2>
              <p>
                /mês<sup>*</sup>
              </p>
            </div>
            <div className="pacotes-item-assine">
              <a href="/assine" className="button button-lg">
                ASSINE ONLINE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardClaro
