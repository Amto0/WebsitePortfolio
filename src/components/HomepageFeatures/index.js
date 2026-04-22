import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Why This Site?',
    description: (      
      <>
        I built this site to honestly document my path in game development —
        reflecting on past projects, analyzing mistakes, and tracking my growth over time.
      </>
    ),
  },
  {
    title: 'My Journey in Game Dev',
    description: (
      <>
        Chronological retrospectives on my projects: architectural decisions, design
        mistakes, and lessons learned.{' '}
        <Link to="/journey/intro">Read →</Link>
      </>
    ),
  },
  {
    title: 'Osh Game Lab',
    description: (
      <>
        A blog about building a local game dev community in the city of Osh —
        events, meetups, people, and projects.{' '}
        <Link to="/osh-game-lab">Read →</Link>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      {Svg && (
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      )}
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
