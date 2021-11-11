import styles from './CardsContainer.module.scss';

import ImageRioShowGastronomia from './images/img-exemple.png';

import Card from './Card/Card';

const works = [
  {
    image: ImageRioShowGastronomia,
    title: 'RioShow Gastronomia',
    description:
      'Os melhores restaurantes eleitos pela crítica reunidos em um guia',
    client: 'RioShow • 2019',
  },
  {
    image: ImageRioShowGastronomia,
    title: 'RioShow Gastronomia 2',
    description:
      'Os melhores restaurantes eleitos pela crítica reunidos em um guia',
    client: 'RioShow • 2019',
  },
  {
    image: ImageRioShowGastronomia,
    title: 'RioShow Gastronomia 3',
    description:
      'Os melhores restaurantes eleitos pela crítica reunidos em um guia',
    client: 'RioShow • 2019',
  },
  {
    image: ImageRioShowGastronomia,
    title: 'RioShow Gastronomia 4',
    description:
      'Os melhores restaurantes eleitos pela crítica reunidos em um guia',
    client: 'RioShow • 2019',
  },
  {
    image: ImageRioShowGastronomia,
    title: 'RioShow Gastronomia 5',
    description:
      'Os melhores restaurantes eleitos pela crítica reunidos em um guia',
    client: 'RioShow • 2019',
  },
];

function CardsContainer() {
  return (
    <div className={styles.container}>
      {works.map((work) => (
        <Card
          image={work.image}
          title={work.title}
          description={work.description}
          client={work.client}
        />
      ))}
    </div>
  );
}

export default CardsContainer;
