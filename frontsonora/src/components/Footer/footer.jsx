
import './footer.css';
import './footer.css'
const Footer = () => {
    return (
        <footer className='footer'>
 HEAD
            <div className='footer-section'>
                <div>
                    <p>Email: Sonora@email.com</p>
                </div>
                <div>
                    <p>Telefone: (11) 99509-5897</p>
                </div>
            </div>

            <div className='footer-section'>

            <div className='footer-contato'>
                <p>Email: Sonora@email.com</p>
                <p>Telefone: (11) 99509-5897</p>
            </div>

            <div className='footer-links'>

                <ul>
                    <li><a href="/sobre-nos">Sobre Nós</a></li>
                    <li><a href="/politica-de-privacidade">Política de Privacidade</a></li>
                    <li><a href="/termos-de-servico">Termos de Serviço</a></li>
                </ul>
            </div>
            
            </div>

            <div className='footer-section'>
                <div>
                    <a href="https://instagram.com/sonora" target="_blank" rel="noopener noreferrer">Nosso Instagram</a>
                </div>
                <div>
                    <a href="https://twitter.com/sonora" target="_blank" rel="noopener noreferrer">Nosso Twitter</a>
                </div>
            </div>
            
            <div className='footer-section footer-copyright'>

            <div className='footer-social'>
                <a href="https://instagram.com/empresa" target="_blank" rel="noopener noreferrer">Nosso Instagram</a>
                <a href="https://twitter.com/empresa" target="_blank" rel="noopener noreferrer">Nosso Twitter</a>
            </div>
            <div className='footer-copyright'>
                <p>&copy; 2025 Sonora. Todos os direitos reservados.</p>
            </div>
            </div>
        </footer>
    );
};


export default Footer;
