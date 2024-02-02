import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/index';
import PostList from './components/PostList/index';
import Modal from './components/Modal/index';
function App() {

  let [showModal, setShowModal] = useState(false);

  let [posts,setPosts] = useState([
    {
      id : 1,
      title:'first post'
    },
    {
      id : 2,
      title:'Second post'
    },
    {
      id:3,
      title:'third post'
    },
    {
      id:4,
      title:'Fourth post'
    }
   ]);

  return (
    <>
    <Navbar setShowModal={setShowModal}/>
    <PostList posts={posts}/>
    {showModal && <Modal showModal={setShowModal}/>

    }
    
    
    </>
  );
}

export default App;
