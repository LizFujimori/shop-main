"use client"
import { useEffect, useState } from "react";
import styles from "./main.module.css";
import Spinner from "./Spinner";

export default function Main() {
  const [ listProduct, setProduct ] = useState([]);

  useEffect(()=> {
    const getProduct = async() => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProduct(data);
    }
    getProduct();
  }, []);

  const orderAz = () => {
    const listAux = [...listProduct].sort((a, b) => a.title.localeCompare(b.title));
    setProduct(listAux)
  }
  const orderZa = () => {
    let listAux = [...listProduct].sort((a, b) => a.title.localeCompare(b.title));
  }

  const orderC = () => {
    const listAuxC = [...listProduct].sort((a, b) => a.price - b.price );
    setProduct(listAuxC)
  }
  const orderD = () => {
    let listAuxC = [...listProduct].sort((a, b) => a.price - b.price );

  listAuxC = listAuxC.reverse();
  setProduct(listAuxC);
}

  if( listProduct[0] == null){
    return <Spinner/>
  }
  
  return (
    <>
    <div>
      <div>
        <button onClick={ orderAz }> A - Z </button>
        <button onClick={ orderZa }> Z - A </button>
        <button onClick={ orderC }> Decrescente </button>
        <button onClick={ orderD }> Crescente </button>
      </div>
    </div>
    <main>
      <div className={styles.grid}>
        {listProduct.map((produto) => (
          <div key={produto.id} className={styles.cereja1}>
            <h3>{produto.title}</h3>
            <img src={produto.image} alt={produto.title} className={styles.imagem} />
            <p>Price: R${produto.price}</p>
            <p>{produto.description}</p>
            <p>Category: {produto.category}</p>
            <p>Rating: {produto.rating.count}</p>
          </div>
        ))}
      </div>
    </main>
    </>
  );
}