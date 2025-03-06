import "./footerCadastro.css"
import React from 'react';
import { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email cadastrado: ${email}`);
        setEmail('');
    };

    return (
        <footer className='footer'>
            <div className='footer-section'>
                <div>
                    <p>Email: Sonora@email.com</p>
                </div>
                <div>
                    <p>Telefone: (11) 99509-5897</p>
                </div>
            </div>

            <div className='footer-section'>
                <ul>
                    <li><a href="/sobre-nos">Sobre Nós</a></li>
                    <li><a href="/politica-de-privacidade">Política de Privacidade</a></li>
                    <li><a href="/termos-de-servico">Termos de Serviço</a></li>
                </ul>
            </div>

            <div className='footer-section'>
                <div>
                    <a href="https://instagram.com/sonora" target="_blank" rel="noopener noreferrer">Nosso Instagram</a>
                </div>
                <div>
                    <a href="https://twitter.com/sonora" target="_blank" rel="noopener noreferrer">Nosso Twitter</a>
                </div>
            </div>
            
            <div className='footer-section footer-form'>
                <h3>Cadastre-se para novidades</h3>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        placeholder="Digite seu e-mail" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <button type="submit">Cadastrar</button>
                </form>
            </div>

            <div className='footer-section footer-copyright'>
                <p>&copy; 2025 Sonora. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
