import React, { useState, useEffect } from 'react';
import HeaderCadastrado from '../components/HeaderCadastrado/headercadastrado';
import FooterCadastro from '../components/Footer/footerCadastro';
import Footer from '../components/Footer/footer';
import './css/global.css';
import { Link } from 'react-router-dom';

function MeusConvites() {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        // Simulação de chamada à API para buscar os eventos do usuário
        fetch('/api/meus-convites')
            .then(response => response.json())
            .then(data => setEventos(data))
            .catch(error => console.error('Erro ao carregar eventos:', error));
    }, []);

    return (
        <>
            <HeaderCadastrado />
            <main className="meus-convites">
                <h2>Meus Convites</h2>
                <div className="convites-grid">
                    {eventos.length > 0 ? (
                        eventos.map(evento => (
                            <div key={evento.id} className="evento-card">
                                <Link to={`/evento/${evento.id}`} className="evento-link">
                                    <h3>{evento.nome}</h3>
                                    <p>{evento.local} - {evento.hora}</p>
                                    <div className="evento-imagem"></div>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p>Você ainda não está inscrito em nenhum evento.</p>
                    )}
                </div>
            </main>
            <FooterCadastro />
            <Footer />
        </>
    );
}

export default MeusConvites;