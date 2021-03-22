import Image from 'next/image'
import React from 'react'
import MainLogo from '../MainLogo'

function MainHeader() {
  return (
    <header className="header">
      <div className="header__content">
        <MainLogo />
        <h1 className="header__title heading-1">Tecla SAP</h1>
        <p className="header__description text">
          Artigos em inglês traduzidos para pt-BR.
        </p>
      </div>
    </header>
  )
}

export default MainHeader
