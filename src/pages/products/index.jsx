// es 1
import { useRouter } from "next/router";
import styles from "./products.module.scss";
export default function products({ data }) {
  const router = useRouter();

  const onHandleClick = (id) => router.push(`/products/${id}`);
  return (
    <>
      {data.products.map((product) => (
        <div
          className={styles.products}
          onClick={() => onHandleClick(product.id)}
        >
          <img src={product.thumbnail} />
          <div className="details">
            <h2>{product.title}</h2>
            <h3>${product.price}</h3>
            <h3>{product.stock}</h3>
          </div>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/products");
  const data = res.status === 200 ? await res.json() : {};

  return {
    props: {
      data: data,
    },
  };
}

// avanzato (non completato)
// import React, { useState, useEffect } from "react";
// import styles from "./products.module.scss";

// export default function products() {
//   const [products, setProducts] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("https://dummyjson.com/products");
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const result = await response.json();
//       setProducts(result);
//     };

//     fetchData().catch((e) => {
//       // handle the error as needed
//       console.error("An error occurred while fetching the products: ", e);
//     });
//   }, []);

//   return (
//     <>
//       {products ? (
//         <>
//           {products.products.map((product) => (
//             <div className={styles.products}>
//               <img src={product.thumbnail} />
//               <div className="details">
//                 <h2>{product.title}</h2>
//                 <h3>${product.price}</h3>
//                 <h3>{product.stock}</h3>
//               </div>
//             </div>
//           ))
//           }
//           )
//           </>
//       ) : (
//         <p>loading...</p>
//         )
//         </>

// }}}
