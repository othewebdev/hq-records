import styles from "@/styles/AboutInfo.module.css";

const AboutInfo = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.column}>
          <h1>Image goes here...</h1>
        </div>
        <div className={styles.column}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            corporis autem exercitationem harum consequatur, ab suscipit
            adipisci tempore quis nihil provident recusandae porro voluptatibus
            dicta repellat, tempora, perferendis consequuntur expedita? Illo
            temporibus, quis laboriosam cupiditate architecto, laborum
            asperiores iste deserunt debitis officia fuga sit alias! Tempora
            minima suscipit ipsum optio sapiente in error vitae, magni accusamus
            non cupiditate ea neque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
