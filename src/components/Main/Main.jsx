import styles from"./main.module.css";
import { Section } from "../Section/Section";
import produtos from '../../components/produtos.json'

import { useState } from "react";

const getCategoria = item => item.categoria

const tipoEntradas = produtos.entradas.map(getCategoria)
const tipoEntradasSemRepeticao = [...new Set(tipoEntradas)]

const tipoSaladas = produtos.saladas.map(getCategoria)
const tipoSaladasSemRepeticao = [...new Set(tipoSaladas)]

const tipoPratosPrincipais = produtos.pratosPrincipais.map(getCategoria)
const tipoPratosPrincipaisSemRepeticao = [...new Set(tipoPratosPrincipais)]

const tipoSobremesas = produtos.sobremesas.map(getCategoria)
const tipoSobremesasSemRepeticao = [...new Set(tipoSobremesas)]

const tipoBebidas = produtos.bebidas.map(getCategoria)
const tipoBebidasSemRepeticao = [...new Set(tipoBebidas)]

export const Main = () => {
  return (
    <main className={styles.main}>
      <Section nome={"Entradas"} produtos={produtos.entradas} categoria={tipoEntradasSemRepeticao}/>
      <Section nome={"Saladas"} produtos={produtos.saladas} categoria={tipoSaladasSemRepeticao}/>
      <Section nome={"Pratos Principais"} produtos={produtos.pratosPrincipais} categoria={tipoPratosPrincipaisSemRepeticao}/>
      <Section nome={"Sobremesas"} produtos={produtos.sobremesas} categoria={tipoSobremesasSemRepeticao}/>
      <Section nome={"Bebidas"} produtos={produtos.bebidas} categoria={tipoBebidasSemRepeticao}/>
    </main>
  );
};
