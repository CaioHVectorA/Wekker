import React from 'react'
import Detail from './Detail'
import Menu from './Menu'
const Plants = (props) => {
    const [infos,useInfos] = React.useState('Mostrar')
    return (
        <div style={{background: '#e7e7e7', borderRadius: '25px',padding: '12px 28px',paddingLeft: '18px',display: 'flex'}}>
            <div style={{borderRadius:'50%',background: 'rgba(122, 176, 146, 0.6)',width: '72px',height: '72px'}}>

            </div>
            <div style={{display: 'flex',flexDirection: 'column'}}>
            <div style={{display: 'flex',gap: '2px',alignItems: 'center',maxHeight: '30px',paddingLeft: '6px'}}>
                <h3 style={{fontWeight: 'normal'}}>{props.planta}</h3>
                <p> - Colheita em <span style={{color: 'green'}}>2 dias</span></p>
            </div>
            <div style={{paddingLeft: '6px'}}>
            <p>Última Irrigação - <span style={{color: 'green'}}>2 dias</span></p>
            </div>
            <button style={{margin: '0 auto',marginTop: '8px   ',background: '#FF9B63',borderRadius: '25px',padding: '6px 50px',border: '1px solid rgba(0, 0, 0, 0.2)',fontFamily: 'Poppins'}} onClick={() => { if (infos === 'Mostrar'){useInfos('Ocultar')} else {useInfos('Mostrar')}}}>{infos} informações</button>

            </div>
        </div>
    )
}
const Horta = () => {
  return (
    <div style={{display: 'flex',placeItems: 'center',flexDirection: 'column',gap: '12px',paddingTop: '40px',paddingBottom: '120px'}}>
    <Menu tipo='horta' />
    <h1>Fazenda-se</h1>
    <Detail />
    <br />
    <h1 style={{fontWeight: 'normal'}}>Suas Plantações</h1>
    <Plants planta='Cenoura' />
    </div>
  )
}

export default Horta