import { useRouter } from "next/router";
import styles from "./singleProducts.module.scss";
export default function ({ data }) {
  const router = useRouter();
  const onHandleClick = () => router.back();

  return (
    <div className={styles.singleProduct}>
      <img src={data.thumbnail} />
      <div className={styles.details}>
        <h1 className={styles.title}>{data.title}</h1>
        <h2 className={styles.price}>${data.price}</h2>
        <h3 className={styles.stock}>{data.stock}</h3>
        <button className={styles.button} onClick={onHandleClick}>
          Go back
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const queryId = context.query.id;

  const res = await fetch(`https://dummyjson.com/products/${queryId}`);
  const data = res.status === 200 ? await res.json() : {};

  return {
    props: {
      data: data,
    },
  };
}
