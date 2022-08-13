import "./main.css";
import { Section } from "../Section/Section";
import { uuidv4 } from "../../utils/NewID";
import produtos from '../../components/produtos.json'

const secoes = ["Entradas", "Pratos Principais", "Bebidas"];

// console.log(produtos);
export const Main = () => {
  return (
    <main className="main">
      <Section nome={"Entradas"} produtos={produtos.entradas}/>
    </main>
  );
};
