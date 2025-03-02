import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ListaContatos = () => {
  const [filtro, setFiltro] = useState("");
  const [contatos, setContatos] = useState([
    { id: 1, nome: "Matheus Teixeira", telefone: "99999-1111" },
    { id: 2, nome: "Rogger Martins", telefone: "99999-2222" },
    { id: 3, nome: "Carla Mendes", telefone: "99999-3333" },
    { id: 4, nome: "Daniel Santos", telefone: "99999-4444" },
    { id: 5, nome: "Gabriel Pavan", telefone: "99999-5555"}
  ]);

  const contatosFiltrados = contatos.filter((contato) =>
    contato.nome.toLowerCase().includes(filtro.toLowerCase()) ||
    contato.telefone.includes(filtro)
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Lista de Contatos</h2>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Filtrar por nome ou telefone..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
      </div>

      <ul className="list-group">
        {contatosFiltrados.length > 0 ? (
          contatosFiltrados.map((contato) => (
            <li key={contato.id} className="list-group-item d-flex justify-content-between">
              <span>{contato.nome}</span>
              <span>{contato.telefone}</span>
            </li>
          ))
        ) : (
          <li className="list-group-item text-center text-muted">Nenhum contato encontrado</li>
        )}
      </ul>
    </div>
  );
};

export default ListaContatos;
