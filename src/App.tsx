import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://images.tcdn.com.br/img/img_prod/1201392/miniatura_carro_batmovel_2022_com_boneco_the_batman_eamp_batmobile_dc_1_32_jada_toys_113_2_e3fb5ea493ab8da986dfaf8fea7beca2.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
