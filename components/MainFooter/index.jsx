import React from 'react'

function MainFooter() {
  const getYears = () => {
    const creationYear = '2021'
    const actualYear = new Date().getFullYear()
    return actualYear > creationYear
      ? `${creationYear} - ${actualYear}`
      : `${creationYear}`
  }
  return <footer className="footer">Tecla SAP - {getYears()}</footer>
}

export default MainFooter
