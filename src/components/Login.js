import React from 'react'
import { Link } from 'react-router-dom';
const Division = () => {
  return (
    <div style={{marginTop: 'calc(4.12vh - 12px)',marginBottom: 'calc(3.92vh - 12px)'}}></div>
  )
}

const Login = () => {
    const [Mode,setMode] = React.useState(true)
  return (
    <div style={{display:'grid',placeItems:'center'}}>
        <Division />  
        <h1 style={{fontFamily: 'Poppins',fontWeight: '400',fontSize: '54px',color:'#237D4B'}}>Wekker</h1>
        <Division />
        <p style={{width: '275px',textAlign: 'center',fontSize: '20px',filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',fontWeight: '480'}}>Mude sua vida com uma alimentação saudável!</p>
        <Division />
        <Division />
        <h2 style={{fontWeight: '600',fontSize: '24px'}}>{Mode === false ? 'Entre com sua conta Wekker' : 'Registre sua conta'}</h2>
        <Division />
        <form style={{display:'flex',flexDirection: 'column',gap: '18px',width: '100%',placeItems: 'center'}}>
        <input type='email' style={{color: 'rgba(0,0,0,0.8)',fontSize:'20px',padding: ' 12px 8px 12px 18px',border: 'none',borderRadius: '25px',width: '80%',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}} placeholder='Email'></input>
        <input type='password' style={{color: 'rgba(0,0,0,1)',fontSize:'20px',padding: ' 12px 8px 12px 18px',border: 'none',borderRadius: '25px',width: '80%',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}} placeholder='Senha'></input>
        </form>
        <Division />
        <Link to="News" style={{backgroundColor: '#FF7C33',color: 'black',textDecoration: 'none', fontSize: '24px',padding: '5px 50px',borderRadius: '25px',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px -4px 1px rgba(0, 0, 0, 0.25)'}}>{Mode === false ? 'Login' : 'Registrar'}</Link>
        <Division />
        <Division />
        <p style={{fontSize: '22px'}}>{Mode === false ? 'Não tem uma conta?' : 'Já tem uma conta?'}</p>
        <a style={{fontSize: '22px',textDecoration: 'underline',color: 'blue'}} onClick={() => {setMode(!Mode)}}>{Mode === false ? 'Crie uma' : 'Entre com ela'}</a>
    </div>
  )
}

export default Login