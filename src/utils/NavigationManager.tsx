import React from 'react';
import NavigationView from '../displayers/NavigationView';
import { loadNavigation } from './Controller';
import { NavResponse } from '../interfaces/InterfaceCollection';
import createResource from './Controller';

const navResource = createResource<NavResponse[]>(loadNavigation);

export function NavigationManager() {
  const navData = navResource.read();
  if (!navData) {
    return null;
  }
  return (
    <div>
      <NavigationView navigation={navData} />
    </div>
  );
}

