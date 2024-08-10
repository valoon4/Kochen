import React from 'react';
import { NavResponse } from '../interfaces/InterfaceCollection';

const NavigationView: React.FC<{ navigation: NavResponse[] }> = ({ navigation }) => {
  return (
    <nav className="reihe">
      {navigation.map((item, i) => (
        <ul className="navul" key={i}>
          {item.url && (
            <li className="navbar" key={i}>
              <a href={item.url}>{item.title}</a>
            </li>
          )}
          {item.content && (
            <div className="reihe" dangerouslySetInnerHTML={{ __html: item.content }} />
          )}
        </ul>
      ))}
    </nav>
  );
};

export default NavigationView;