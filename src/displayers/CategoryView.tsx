import React from 'react';
import Link from 'next/link';
import { CategoryResponse } from '../interfaces/InterfaceCollection';

const CategoryView: React.FC<{ kategorien: CategoryResponse[] }> = ({ kategorien }) => {
  return (
    <div className="reihe">
      {kategorien.map((kategorie) => (
        <div className="beitragskasten" key={kategorie.id}>
          <h3>{kategorie.title}</h3>
          <ul key={kategorie.id}>
            {kategorie.categoryitems.map((name, index) => (
              <li key={index}>
                <Link href={`/rezept/${name}`}>
                  <p className="beitragsname">{name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CategoryView;

