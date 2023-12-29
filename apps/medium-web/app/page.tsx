import React from 'react';
import PostLoginHomePage from './PostLoginHomePage';
import PreLoginHomePage from './PreLoginHomePage';
import { LoginModal } from '@medium/components';


export default async function App() {
  const res = await fetch('http://localhost:3000/api')
  const data = await res.json();
  return (
    <React.Fragment>
      {data.isAuthorized ? <PostLoginHomePage /> : <PreLoginHomePage />}
      {/* <LoginModal /> */}
    </React.Fragment>
  );
}
