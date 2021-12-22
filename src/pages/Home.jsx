import React from 'react';
import Brands from '../components/Brands';
import Clients from '../components/Clients';
import Community from '../components/Community';
import Connect from '../components/Connect';
import Customers from '../components/Customers';
import Integrations from '../components/Integrations';
import People from '../components/People';
import WorldWide from '../components/WorldWide';

function Home() {
  return (
    <div>
      <Brands />
      <Clients />
      <Connect />
      <WorldWide />
      <Integrations />
      <Customers />
      <People />
      <Community />
    </div>
  );
}

export default Home;
