// src/components/HerbalPlants.js

import React from 'react';
import '../styles/herbal.css'; // Make sure this path matches your project structure

const plants = [
  {
    name: 'Neem',
    url: 'https://en.wikipedia.org/wiki/Azadirachta_indica',
    description:
      'Neem has anti-bacterial, anti-fungal, and anti-inflammatory properties, and it is used to treat various skin conditions, dental issues, and as a natural insect repellent.',
  },
  {
    name: 'Tulsi (Holy Basil)',
    url: 'https://en.wikipedia.org/wiki/Ocimum_tenuiflorum',
    description:
      'Tulsi is known for its antioxidant and adaptogenic properties. It is used to treat respiratory disorders, fever, and various skin conditions.',
  },
  {
    name: 'Ashwagandha',
    url: 'https://en.wikipedia.org/wiki/Withania_somnifera',
    description:
      'Ashwagandha is used as an adaptogen to help the body cope with stress. It is also used to improve cognitive function and overall vitality.',
  },
  {
    name: 'Triphala',
    url: 'https://en.wikipedia.org/wiki/Triphala',
    description:
      'Triphala is a combination of three fruits used in Ayurveda to support digestion, improve circulation, and promote overall well-being.',
  },
  {
    name: 'Brahmi',
    url: 'https://en.wikipedia.org/wiki/Bacopa_monnieri',
    description:
      'Brahmi is known for its cognitive-enhancing properties. It is used to improve memory, promote relaxation, and reduce stress and anxiety.',
  },
  {
    name: 'Amalaki (Indian Gooseberry)',
    url: 'https://en.wikipedia.org/wiki/Phyllanthus_emblica',
    description:
      'Amalaki is rich in vitamin C and antioxidants. It is used to boost the immune system, promote hair and skin health, and improve digestion.',
  },
  {
    name: 'Guduchi (Giloy)',
    url: 'https://en.wikipedia.org/wiki/Tinospora_cordifolia',
    description:
      'Guduchi is known for its immune-boosting and detoxifying properties. It is used to treat fever, improve digestion, and promote overall health.',
  },
  {
    name: 'Haritaki',
    url: 'https://en.wikipedia.org/wiki/Terminalia_chebula',
    description:
      'Haritaki is used to support digestive health, improve bowel movements, and promote detoxification and overall wellness.',
  },
  {
    name: 'Shatavari',
    url: 'https://en.wikipedia.org/wiki/Asparagus_racemosus',
    description:
      'Shatavari is known for its hormone-balancing and rejuvenating properties. It is used to support women\'s health, improve fertility, and promote vitality.',
  },
  {
    name: 'Amla (Indian Gooseberry)',
    url: 'https://en.wikipedia.org/wiki/Phyllanthus_emblica',
    description:
      'Amla is rich in vitamin C and antioxidants. It is used to boost the immune system, improve digestion, and promote hair and skin health.',
  },
];

const HerbalPlants = () => {
  return (
    <div className="plant-container">
      <h2>Herbal Plants in Ayurveda</h2>
      {plants.map((plant, index) => (
        <div key={index} className="plant">
          <a href={plant.url} target="_blank" rel="noopener noreferrer">
            <h3>{plant.name}</h3>
          </a>
          <p>{plant.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HerbalPlants;
