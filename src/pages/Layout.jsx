// Importamos o Link, Outlet e useLocation do react-router-dom
import { Link, Outlet, useLocation } from "react-router-dom";

// Função principal do layout de itens
export default function ItemsLayout() {
  // useLocation é usado para obter o caminho atual da URL e o pathname para obter apenas o caminho da URL atual vai ser usado mais abaixo para estilizar a aba ativa
  const { pathname } = useLocation();

  return (
    <main>
      {/* Título principal da página */}
      <h1>Stock Items</h1>
      
      {/* Div para os links de navegação em forma de abas */}
      <div className="tabs">
        {/* Link para todos os itens 
        Classe Dinâmica: A classe "active" é adicionada ao link quando o pathname atual é "/items". Isso é útil para estilizar a aba ativa, indicando visualmente ao usuário em qual seção ele está.
         */}
        <Link to="/items" className={`tab ${pathname === "/items" ? "active" : ""}`}>
          Todos os itens
        </Link>
        
        {/* Link para a criação de um novo item */}
        <Link to="/items/new" className={`tab ${pathname === "/items/new" ? "active" : ""}`}>
          Novo Item
        </Link>
      </div>
      
      {/* Outlet é onde os componentes filhos serão renderizados */}
      <Outlet />
    </main>
  );
}
