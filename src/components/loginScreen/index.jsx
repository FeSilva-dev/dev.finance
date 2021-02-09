import React from 'react'
import './styles.css'
import LogoDev from '../../assets/logo.svg'

const LoginScreen = () => {
    return(
        <div className="loginContent">
            <div className="loginForm">
                <div className="logoForm">
                    {/* <img src={LogoDev} alt=""/> */}
                    <p>dev<span>.</span>finance<span>$</span></p>
                </div>
                <div className="form">
                    <form>
                        <div className="input-field">
                            <span>Email:</span>
                            <input type="email" name="email" id="email" placeholder="Digite seu email"/>
                        </div>
                        <div className="input-field">
                            <span>Password:</span>
                            <input type="password" name="password" id="password" placeholder="Digite sua senha"/>
                        </div>
                        <div className="buttons">
                            <a href="/register">Registrar</a>
                            <button>Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen