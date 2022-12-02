import React from 'react'
import Detail from './Detail'
import Menu from './Menu'

const Noticia = (props) => {
  return (
    <div style={{marginTop: '10px',padding: '18px 12px',background: '#D9D9D9',borderRadius: '25px',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',display: 'flex',alignItems:'center',gap: '35px'}}>
    <p style={{width: '195px',textAlign: 'left',fontSize: '16px'}}>{props.desc}</p>
    <img src={props.src} style={{width: '80px',height: '80px',borderRadius: '25px'}}/>
  </div>
  )
}


const News = () => {
  return (
    <div style={{display: 'flex',placeItems: 'center',flexDirection: 'column',gap: '12px',paddingTop: '40px',paddingBottom: '120px'}}>
        <Menu tipo='news' />
        <h1>Wekker News</h1>
        <Detail />
        <br />
        <br />
        <h1 style={{fontWeight: '400',fontSize: '45px'}}>Notícia do dia</h1>
        <div style={{width: '320px',height: '215px',borderRadius: '25px',backgroundColor: '#d9d9d9'}}></div>
        <h1>Titulo da Notícia</h1>
        <a href='News' style={{fontSize: '24px'}}>Link da notícia aqui</a>
        <Detail />
        <Noticia desc='Tomate é o fruto mais versátil,diz Nutricionista.' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Pomodoro_di_Pachino.jpg/800px-Pomodoro_di_Pachino.jpg'/>
        <Noticia desc='Beterraba é uma fonte de vitamina C,veja mais sobre o vegetal.' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Beetroot_jm26647.jpg/120px-Beetroot_jm26647.jpg'/>
    </div>
  )
}

export default News