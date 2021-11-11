import styles from './App.scss';

import Card from './components/card/Card';

import ImageRioShowGastronomia from './components/card/img-exemplo.png';

function App() {
  return (
    <main className={styles.container}>
      <Card
        image={ImageRioShowGastronomia}
        title="Rio Show Gastronomia"
        description="Os melhores restaurantes eleitos pela crítica reunidos em um guia"
        client="RioShow • 2019"
      />
    </main>
  );
}

export default App;
