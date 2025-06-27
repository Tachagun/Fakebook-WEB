import React from 'react';
import SidebarMenu from '../components/SidebarMenu';
import PostContainer from '../components/PostContainer';
import SidebarContact from '../components/SidebarContact';

function Home() {
  return (
    <>
      <SidebarMenu />
      <PostContainer />
      <SidebarContact />
      {/* <div>Post Container</div>
      <div>Sidebar Contact</div> */}
    </>
  );
}

export default Home;