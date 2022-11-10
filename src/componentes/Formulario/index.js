import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  const times = ["Gamelanders", "Furia", "VivoKeyd", "Team Vikings", "LOUD", "Liberty"];

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("Form foi Submetido");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do jogador.</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
        <CampoTexto
          obrigatorio={true}
          label="Personagem Principal"
          placeholder="Digite seu(a) personagem principal"
        />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
        <ListaSuspensa required={true} label="Time" itens={times} />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
