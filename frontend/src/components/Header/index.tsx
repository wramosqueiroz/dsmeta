import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>Programa de Controle de Vendas</h1>
        <p>
          Desenvolvido por:
          <a href="https://github.com/wramosqueiroz/dsmeta"> Wanderson Ramos Queiroz</a>
        </p>
      </div>
    </header>
  )
}

export default Header;