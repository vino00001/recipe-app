import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeDisplay = () => {
  const recipies = [
    {
      id: 1,
      title: 'Lasagne de luxe',
      image: 'https://img.koket.se/mobile/lasagne-de-luxe.jpg',
      instruction: [
        'Sätt ugnen på 200 grader. Hetta upp en stekpanna med smör och stek färs, lök och vitlök. Finfördela färsen och se till att den blir genomstekt.',
        'Blanda ner konserverade tomater, chilisås, salt och peppar. Låt alltsammans sjuda, medan du gör béchamelsåsen.',
        'Smält smöret i en kastrull. Vispa ner mjölet, och tillsätt mjölk och grädde under fortsatt vispning så att det inte blir klumpar. Krydda med muskot, salt och peppar. Låt koka upp och sjuda i ett par minuter.',
        'Ringla lite olivolja i en ugnsform. Täck bottnen med béchamelsås och sedan med lasagneplattor. Varva sedan sås, köttfärsröra, riven ost och lasagneplattor ungefär tre gånger. Avsluta med sås och riven ost på toppen.',
        'Grädda lasagnen i 20 minuter, eller tills osten fått vacker färg.',
        'Servera tillsammans med en god och krispig sallad och toppa gärna med lite oregano.'
      ],
      ingredients: [
        {
          name: 'färska lasagneplattor',
          amount: 12,
          unit: 'unit'
        },
        {
          name: 'blandfärs',
          amount: 600,
          unit: 'gram'
        },
        {
          name: 'gul lök',
          amount: 1,
          unit: 'unit'
        },
        {
          name: 'klyfta vitlök',
          amount: 2,
          unit: 'unit'
        },
        {
          name: 'krossade tomater',
          amount: 400,
          unit: 'gram'
        },
        {
          name: 'chilisås',
          amount: 50,
          unit: 'mL'
        },
        {
          name: 'salt',
          amount: 0,
          unit: 'unit'
        },
        {
          name: 'peppar',
          amount: 0,
          unit: 'unit'
        },
        {
          name: 'olivolja',
          amount: 0,
          unit: 'unit'
        },
        {
          name: 'mozzarellaost',
          amount: 300,
          unit: 'mL'
        },
        {
          name: 'oregano',
          amount: 0,
          unit: 'unit'
        },
        {
          name: 'smör',
          amount: 100,
          unit: 'g'
        },
        {
          name: 'vetemjöl',
          amount: 100,
          unit: 'mL'
        },
        {
          name: 'mjölk',
          amount: 400,
          unit: 'mL'
        },
        {
          name: 'vispgrädde',
          amount: 500,
          unit: 'mL'
        },
        {
          name: 'muskot',
          amount: 0.25,
          unit: 'gram'
        }
      ],
      categories: ['Lasagne', 'Pasta']
    },
    {
      id: 2,
      title: 'Lasagne de luxe',
      image: 'https://img.koket.se/mobile/lasagne-de-luxe.jpg',
      instruction: [
        'Sätt ugnen på 200 grader. Hetta upp en stekpanna med smör och stek färs, lök och vitlök. Finfördela färsen och se till att den blir genomstekt.',
        'Blanda ner konserverade tomater, chilisås, salt och peppar. Låt alltsammans sjuda, medan du gör béchamelsåsen.',
        'Smält smöret i en kastrull. Vispa ner mjölet, och tillsätt mjölk och grädde under fortsatt vispning så att det inte blir klumpar. Krydda med muskot, salt och peppar. Låt koka upp och sjuda i ett par minuter.',
        'Ringla lite olivolja i en ugnsform. Täck bottnen med béchamelsås och sedan med lasagneplattor. Varva sedan sås, köttfärsröra, riven ost och lasagneplattor ungefär tre gånger. Avsluta med sås och riven ost på toppen.',
        'Grädda lasagnen i 20 minuter, eller tills osten fått vacker färg.',
        'Servera tillsammans med en god och krispig sallad och toppa gärna med lite oregano.'
      ],
      ingredients: [
        {
          name: 'färska lasagneplattor',
          amount: 12,
          unit: 'unit'
        },
        {
          name: 'blandfärs',
          amount: 600,
          unit: 'gram'
        },
        {
          name: 'gul lök',
          amount: 1,
          unit: 'unit'
        },
        {
          name: 'klyfta vitlök',
          amount: 2,
          unit: 'unit'
        },
        {
          name: 'krossade tomater',
          amount: 400,
          unit: 'gram'
        },
        {
          name: 'chilisås',
          amount: 50,
          unit: 'mL'
        },
        {
          name: 'salt',
          amount: 0,
          unit: 'unit'
        },
        {
          name: 'peppar',
          amount: 0,
          unit: 'unit'
        },
        {
          name: 'olivolja',
          amount: 0,
          unit: 'unit'
        },
        {
          name: 'mozzarellaost',
          amount: 300,
          unit: 'mL'
        },
        {
          name: 'oregano',
          amount: 0,
          unit: 'unit'
        },
        {
          name: 'smör',
          amount: 100,
          unit: 'g'
        },
        {
          name: 'vetemjöl',
          amount: 100,
          unit: 'mL'
        },
        {
          name: 'mjölk',
          amount: 400,
          unit: 'mL'
        },
        {
          name: 'vispgrädde',
          amount: 500,
          unit: 'mL'
        },
        {
          name: 'muskot',
          amount: 0.25,
          unit: 'gram'
        }
      ],
      categories: ['Lasagne', 'Pasta']
    },
    {
      id: 3,
      title: 'Lasagne de luxe',
      image: 'https://img.koket.se/mobile/lasagne-de-luxe.jpg',
      instruction: [
        'Sätt ugnen på 200 grader. Hetta upp en stekpanna med smör och stek färs, lök och vitlök. Finfördela färsen och se till att den blir genomstekt.',
        'Blanda ner konserverade tomater, chilisås, salt och peppar. Låt alltsammans sjuda, medan du gör béchamelsåsen.',
        'Smält smöret i en kastrull. Vispa ner mjölet, och tillsätt mjölk och grädde under fortsatt vispning så att det inte blir klumpar. Krydda med muskot, salt och peppar. Låt koka upp och sjuda i ett par minuter.',
        'Ringla lite olivolja i en ugnsform. Täck bottnen med béchamelsås och sedan med lasagneplattor. Varva sedan sås, köttfärsröra, riven ost och lasagneplattor ungefär tre gånger. Avsluta med sås och riven ost på toppen.',
        'Grädda lasagnen i 20 minuter, eller tills osten fått vacker färg.',
        'Servera tillsammans med en god och krispig sallad och toppa gärna med lite oregano.'
      ],
      ingredients: [
        {
          name: 'färska lasagneplattor',
          amount: 12,
          unit: 'unit'
        },
        {
          name: 'blandfärs',
          amount: 600,
          unit: 'gram'
        },
        {
          name: 'gul lök',
          amount: 1,
          unit: 'unit'
        },
        {
          name: 'klyfta vitlök',
          amount: 2,
          unit: 'unit'
        },
        {
          name: 'krossade tomater',
          amount: 400,
          unit: 'gram'
        },
        {
          name: 'chilisås',
          amount: 50,
          unit: 'mL'
        },
        {
          name: 'salt',
          amount: 0,
          unit: 'unit'
        },
        {
          name: 'peppar',
          amount: 0,
          unit: 'unit'
        },
        {
          name: 'olivolja',
          amount: 0,
          unit: 'unit'
        },
        {
          name: 'mozzarellaost',
          amount: 300,
          unit: 'mL'
        },
        {
          name: 'oregano',
          amount: 0,
          unit: 'unit'
        },
        {
          name: 'smör',
          amount: 100,
          unit: 'g'
        },
        {
          name: 'vetemjöl',
          amount: 100,
          unit: 'mL'
        },
        {
          name: 'mjölk',
          amount: 400,
          unit: 'mL'
        },
        {
          name: 'vispgrädde',
          amount: 500,
          unit: 'mL'
        },
        {
          name: 'muskot',
          amount: 0.25,
          unit: 'gram'
        }
      ],
      categories: ['Lasagne', 'Pasta']
    },
    {
      id: 4,
      title: 'Lasagne de luxe',
      image: 'https://img.koket.se/mobile/lasagne-de-luxe.jpg',
      instruction: [
        'Sätt ugnen på 200 grader. Hetta upp en stekpanna med smör och stek färs, lök och vitlök. Finfördela färsen och se till att den blir genomstekt.',
        'Blanda ner konserverade tomater, chilisås, salt och peppar. Låt alltsammans sjuda, medan du gör béchamelsåsen.',
        'Smält smöret i en kastrull. Vispa ner mjölet, och tillsätt mjölk och grädde under fortsatt vispning så att det inte blir klumpar. Krydda med muskot, salt och peppar. Låt koka upp och sjuda i ett par minuter.',
        'Ringla lite olivolja i en ugnsform. Täck bottnen med béchamelsås och sedan med lasagneplattor. Varva sedan sås, köttfärsröra, riven ost och lasagneplattor ungefär tre gånger. Avsluta med sås och riven ost på toppen.',
        'Grädda lasagnen i 20 minuter, eller tills osten fått vacker färg.',
        'Servera tillsammans med en god och krispig sallad och toppa gärna med lite oregano.'
      ],
      ingredients: [
        {
          name: 'färska lasagneplattor',
          amount: 12,
          unit: 'unit'
        },
        {
          name: 'blandfärs',
          amount: 600,
          unit: 'gram'
        },
        {
          name: 'gul lök',
          amount: 1,
          unit: 'unit'
        },
        {
          name: 'klyfta vitlök',
          amount: 2,
          unit: 'unit'
        },
        {
          name: 'krossade tomater',
          amount: 400,
          unit: 'gram'
        },
        {
          name: 'chilisås',
          amount: 50,
          unit: 'mL'
        },
        {
          name: 'salt',
          amount: 0,
          unit: 'unit'
        },
        {
          name: 'peppar',
          amount: 0,
          unit: 'unit'
        },
        {
          name: 'olivolja',
          amount: 0,
          unit: 'unit'
        },
        {
          name: 'mozzarellaost',
          amount: 300,
          unit: 'mL'
        },
        {
          name: 'oregano',
          amount: 0,
          unit: 'unit'
        },
        {
          name: 'smör',
          amount: 100,
          unit: 'g'
        },
        {
          name: 'vetemjöl',
          amount: 100,
          unit: 'mL'
        },
        {
          name: 'mjölk',
          amount: 400,
          unit: 'mL'
        },
        {
          name: 'vispgrädde',
          amount: 500,
          unit: 'mL'
        },
        {
          name: 'muskot',
          amount: 0.25,
          unit: 'gram'
        }
      ],
      categories: ['Lasagne', 'Pasta']
    }
  ];
  return (
    <div className="columns">
      <div className="column is-three-fifths is-offset-one-fifth">
        <div className="columns is-multiline">
          {recipies.map((recipe, index) => {
            return <RecipeCard key={index} recipe={recipe} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RecipeDisplay;
