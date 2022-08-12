import "./main.css";
import { Card } from "../Card/Card";
import { uuidv4 } from "../../utils/NewID";

const produtos = [
  {
    id: uuidv4(),
    nome: "Muzzarella",
    descricao: "Pizza de Mussarella",
    valor: 12,
    tempoPreparo: "12 minutos",
  },
];

export const Main = () => {
  return (
    <main className="main">
      <Card key={produtos[0].id}
        produto={{
          nome: produtos[0].nome,
          descricao: produtos[0].descricao,
          valor: produtos[0].valor,
          tempoPreparo: produtos[0].tempoPreparo,
        }}
      />
    </main>
  );
};
