"use client"
import { useEffect, useState } from "react";
import styles from "./main.module.css";
import Spinner from "./Spinner";
import ErrorFetch from "./ErrorFetch";

export default function Main() {
  const [ listProduct, setProduct ] = useState([]);
  const [ listComplete, setComplete ] = useState([]);
  const [ textSearch, setTextSearch ] =  useState("");
  const [ isError, setIsError ] = useState(false);

  useEffect(()=> {
    const getProduct = async() => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProduct(data);
        setComplete(data)
      }
      catch{
        setIsError(true);
      }
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

  const orderC = () => {
    const listAuxC = [...listProduct].sort((a, b) => a.price - b.price );
    setProduct(listAuxC)
  }
  const orderD = () => {
    let listAuxC = [...listProduct].sort((a, b) => a.price - b.price );

  listAuxC = listAuxC.reverse();
  setProduct(listAuxC);
}

  const search = (text) =>{
      setTextSearch(text);

      if(text.trim() == ""){
        setProduct(listComplete);
        return
      }
      const newList = listProduct.filter((product) =>
        product.title.toUpperCase().trim().includes(textSearch.toUpperCase()) 
      );
      setProduct(newList);
    }

  if(isError == true){
    return <ErrorFetch/>
  }

  if( listComplete[0] == null){
    return ( 
      <main className={styles.main}>
        <Spinner/>
      </main>
    )
  }
  
  return (
    <>
    <div>
      <div>
        <input type="text" value={textSearch} placeholder="Pesquise um produto" onChange={(event) => search(event.target.value)}/>
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