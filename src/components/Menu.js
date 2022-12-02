import React from 'react'
import Search from './/imgs/search.svg'
import Plant from './/imgs/plant.svg'
import Person from './/imgs/person.svg'
import Rotina from './/imgs/checklist.svg'
import { Link } from 'react-router-dom'
const Button = (props) => {
  const ativo = props.display !== 'news'
    return (
      <div>
        {ativo && <div style={{borderRadius: '50%',backgroundColor: '#5285D1',border: '1px solid rgba(0,0,0,0.2)',position: 'relative',width: '80px',height: '80px',bottom: '34px'}}>
            <div style={{width: '2.5px',height: '25px',backgroundColor: '#fff',borderRadius: '25px',position: 'absolute',left:'37.5px',top:'25px'}}></div>
            <div style={{width: '2.5px',height: '25px',backgroundColor: '#fff',borderRadius: '25px',position: 'absolute',left:'37.5px',top:'25px',transform: 'rotate(90deg)'}}></div>
        </div>}
    </div>
    )
}
const Menu = (props) => {
  const ativo = props.tipo === 'news'
  console.log(ativo,props.tipo)
  return (
    <div style={{position: 'fixed',bottom: '0px',width: '100%',backgroundColor: '#D9D9D9',borderTop: '1px solid rgba(0,0,0,0.2)',display: 'grid',padding: '3px 6px 3px 18px',gridTemplateColumns:   !ativo ? '1fr 1fr 1.4fr 1fr 1fr' : '1fr 1fr 0px 1fr 1fr',gap: ativo ? '10px' : '12px',placeItems:'center'}}>
        <div style={{fontSize: '14px',position: 'relative',right: '4px'}}>
        <svg  viewBox="32 0 64 128" width={40} height={40} style={{fill: props.tipo === 'dieta' ? '#000' : 'rgba(0,0,0,0.6)',textDecoration: 'normal'}}><g><path d="M53.4,91.75c-1.96,0-3.54-1.59-3.54-3.54s1.59-3.54,3.54-3.54h19.85c1.96,0,3.54,1.59,3.54,3.54s-1.59,3.54-3.54,3.54H53.4 L53.4,91.75z M23.23,88.24c-0.8-1.2-0.48-2.82,0.72-3.63c1.2-0.8,2.82-0.48,3.63,0.72L29,87.45l5.65-6.88 c0.92-1.11,2.56-1.27,3.68-0.36c1.11,0.92,1.27,2.56,0.36,3.68l-7.82,9.51c-0.17,0.22-0.38,0.42-0.62,0.58 c-1.2,0.8-2.82,0.48-3.63-0.72L23.23,88.24L23.23,88.24z M23.23,63.34c-0.8-1.2-0.48-2.82,0.72-3.63c1.2-0.8,2.82-0.48,3.63,0.72 L29,62.55l5.65-6.88c0.92-1.11,2.56-1.27,3.68-0.36c1.11,0.92,1.27,2.56,0.36,3.68l-7.82,9.51c-0.17,0.22-0.38,0.42-0.62,0.58 c-1.2,0.8-2.82,0.48-3.63-0.72L23.23,63.34L23.23,63.34z M23.23,38.43c-0.8-1.2-0.48-2.82,0.72-3.63c1.2-0.8,2.82-0.48,3.63,0.72 L29,37.64l5.65-6.88c0.92-1.11,2.56-1.27,3.68-0.36c1.11,0.92,1.27,2.56,0.36,3.68l-7.82,9.51c-0.17,0.22-0.38,0.42-0.62,0.58 c-1.2,0.8-2.82,0.48-3.63-0.72L23.23,38.43L23.23,38.43z M53.4,39.03c-1.96,0-3.54-1.59-3.54-3.54s1.59-3.54,3.54-3.54h36.29 c1.96,0,3.54,1.59,3.54,3.54s-1.59,3.54-3.54,3.54H53.4L53.4,39.03z M8.22,0h101.02c2.27,0,4.33,0.92,5.81,2.4 c1.48,1.48,2.4,3.54,2.4,5.81v106.44c0,2.27-0.92,4.33-2.4,5.81c-1.48,1.48-3.54,2.4-5.81,2.4H8.22c-2.27,0-4.33-0.92-5.81-2.4 C0.92,119,0,116.93,0,114.66V8.22C0,5.95,0.92,3.88,2.4,2.4C3.88,0.92,5.95,0,8.22,0L8.22,0z M109.24,7.08H8.22 c-0.32,0-0.61,0.13-0.82,0.34c-0.21,0.21-0.34,0.5-0.34,0.82v106.44c0,0.32,0.13,0.61,0.34,0.82c0.21,0.21,0.5,0.34,0.82,0.34 h101.02c0.32,0,0.61-0.13,0.82-0.34c0.21-0.21,0.34-0.5,0.34-0.82V8.24c0-0.32-0.13-0.61-0.34-0.82 C109.84,7.21,109.55,7.08,109.24,7.08L109.24,7.08z M53.4,65.39c-1.96,0-3.54-1.59-3.54-3.54s1.59-3.54,3.54-3.54h36.29 c1.96,0,3.54,1.59,3.54,3.54s-1.59,3.54-3.54,3.54H53.4L53.4,65.39z"/></g></svg>
        <p style={{position: 'relative',top:'2.7px',color: props.tipo === 'dieta' ? '#000' : 'rgba(0,0,0,0.6)',textDecoration: 'normal'}}>Dieta</p>
        </div>
        <Link to="/Horta" style={{fontSize: '14px',textDecoration: 'none'}}>
        <svg width='32' height='32'style={{fill: props.tipo === 'horta' ? '#000' : 'rgba(0,0,0,0.6)',textDecoration: 'normal',position:'relative',left:'8px',scale: '1.9',top: '5px'}}>
        <path d="M 6.59375 2.03125 C 5.2746875 2.1077656 3.731 2.54725 2 3.5 C 2 3.5 3.011 6.821 4.75 8.75 C 6.538 10.733 9.52975 9.8365 9.59375 9.1875 C 8.35175 6.5905 5.5 5.125 5.5 5.125 C 6.1147395 5.3169281 6.9888723 5.6284376 8.03125 6.21875 C 9.6314916 7.1249882 11 8.38247 11 10.1875 L 11 11.4375 L 11 13 L 13 13 L 13 11.4375 C 13 10.486389 13.324033 9.7977962 13.875 9.1875 C 14.425967 8.5772038 15.234965 8.0576774 16.0625 7.6875 C 17.05943 7.2415481 17.917582 7.033654 18.5625 6.90625 C 17.890364 7.1178513 15.553599 7.9606228 14.59375 9.96875 C 15.13275 10.85175 17.9535 11.75375 19.5625 9.96875 C 21.1275 8.23175 22 5.34375 22 5.34375 C 16.742661 2.4498097 13.482812 4.811258 13.0625 7.21875 C 13.060536 7.23 13.033089 7.238749 13.03125 7.25 C 12.82713 7.4248417 12.622774 7.6101455 12.4375 7.8125 C 12.282773 7.5011677 12.108736 7.2134811 11.90625 6.9375 C 12.463532 4.7341021 10.480528 1.8057874 6.59375 2.03125 z M 6 14 L 6 16 L 18 16 L 18 14 L 6 14 z M 7 17 L 8.25 22 L 15.75 22 L 17 17 L 7 17 z"/>
        </svg>
        <p style={{position: 'relative',top:'6.87px',color: props.tipo === 'horta' ? '#000' : 'rgba(0,0,0,0.6)',textDecoration: 'normal'}}>Horta</p>
        </Link>
        <Button display={props.tipo}/>
        <Link to='/News' style={{fontSize: '16px',textDecoration: 'none'}}>
        <svg width='48' height='48' style={{fill: props.tipo === 'news' ? '#000' : 'rgba(0,0,0,0.6)',textDecoration: 'normal',position:'relative',left:'-4px'}}>
       <path d="M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z"/>
        </svg>
        <p style={{position: 'relative',bottom: '3px',fontSize: '15.2px',color: props.tipo === 'news' ? '#000' : 'rgba(0,0,0,0.6)',textDecoration: 'normal'}}>News</p>
        </Link>
        <div style={{fontSize: '14px'}}>
        <svg width='48' height='48' path={Person} style={{fill: props.tipo === 'perfil' ? '#000' : 'rgba(0,0,0,0.6)',textDecoration: 'normal',position:'relative',left:'-5.5px'}}>
        <path d="M24 23.95q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM8 40v-4.7q0-1.9.95-3.25T11.4 30q3.35-1.5 6.425-2.25Q20.9 27 24 27q3.1 0 6.15.775 3.05.775 6.4 2.225 1.55.7 2.5 2.05.95 1.35.95 3.25V40Zm3-3h26v-1.7q0-.8-.475-1.525-.475-.725-1.175-1.075-3.2-1.55-5.85-2.125Q26.85 30 24 30t-5.55.575q-2.7.575-5.85 2.125-.7.35-1.15 1.075Q11 34.5 11 35.3Zm13-16.05q1.95 0 3.225-1.275Q28.5 18.4 28.5 16.45q0-1.95-1.275-3.225Q25.95 11.95 24 11.95q-1.95 0-3.225 1.275Q19.5 14.5 19.5 16.45q0 1.95 1.275 3.225Q22.05 20.95 24 20.95Zm0-4.5ZM24 37Z"/>        {/* pegar os paths no google,talvez seja melhor msm */}
        </svg>
        <p style={{color:props.tipo === 'perfil' ? '#000' : 'rgba(0,0,0,0.6)',textDecoration: 'normal',position: 'relative',left: '2px',bottom: '2px'}}>Perfil</p>
        </div>
    </div>
  )
}

export default Menu