import React from "react"

import iconeWifi from "../../assets/icone-wifi.svg"
import iconeNow from "../../assets/icone-now.svg"
import iconeAssist from "../../assets/icone-claroassist.svg"
import iconeNetClaro from "../../assets/icone-netclarowifi.svg"

// import { Container } from './styles';

const Sobre = () => {
  return (
    <section className="sobre">
      <div className="sobre-content">
        <div className="sobre-item">
          <figure>
            <img src={iconeWifi} alt="Wi-Fi plus" />
          </figure>
          <h2>Wi-Fi Plus</h2>
          <p>
            Com o Wi-Fi Plus você tem duas redes de Wi-Fi que proporcionam maior
            alcance e um sinal mais potente na sua casa.
          </p>
        </div>

        <div className="sobre-item">
          <figure>
            <img src={iconeNow} alt="NOW" />
          </figure>
          <h2>Filmes Online</h2>
          <p>
            Assista agora os seus programas, séries de TV preferidas e os
            lançamentoss recém saídos do cinema pra curtir pela TV, pela web ou
            pelo celular.
          </p>
        </div>

        <div className="sobre-item">
          <figure>
            <img src={iconeAssist} alt="Claro assist" />
          </figure>
          <h2>Claro assist</h2>
          <p>
            Com o suporte técnico Claro assist você resolve problemas técnicos
            do seu computador, Tv e smartphone sem sair de casa e ainda pode
            contar com inseções de visitas técnicas.
          </p>
        </div>

        <div className="sobre-item">
          <figure>
            <img src={iconeNetClaro} alt="Net Claro WIFI" />
          </figure>
          <h2>#NET-CLARO-WIFI</h2>
          <p>
            Cliente Claro pode navegar grátis e ilimitado na maior rede Wi-Fi
            Pública do páis, com milhões de pontos de acesso espalhados nas
            ruas, aeroprtos e estádios.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Sobre
