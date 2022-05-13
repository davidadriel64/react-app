import React, { useEffect, useState } from "react";
import { DaB } from '../DB/DaB';
import { useParams } from "react-router-dom";
import ItemList from '../Item/ItemList';

function ItemListCat() {
    const [product, setProduct] = useState(null);
    const { categoria } = useParams();

    const eventos = DaB.filter((evento) => evento.categoria.toLowerCase() === categoria.toLowerCase());

    useEffect(() => {
        getItem();
        return () => { };
    }, [categoria]);

    const getItem = () => {
        const getItemPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(eventos);
            }, 2000);
        });
        getItemPromise.then((res) => setProduct(res));
    };

    return (
        <>

            {product ? (
                <>
                    <h1 className='m-2 display-4 text-center'><strong>{categoria.toLocaleUpperCase()} </strong>  </h1>
                    <ItemList productos={product} />
                </>
            ) : (
                <h1 className="text-center">Cargando</h1>
            )}
        </>
    );
}

export default ItemListCat;