"use client"
import { useEffect, useState } from "react";
import styles from "./main.module.css";

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

    listAux = listAux.reverse();
    setProduct(listAux);
  }

  
  return (
    <>
    <div className={styles.filter}>
      <div>
        <button onClick={ orderAz }> Az </button>
        <button onClick={ orderZa }> Za </button>
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