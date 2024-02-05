import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/index';
import PostList from './components/PostList/index';
import Modal from './components/Modal/index';
import PostForm from './components/PostForm/index';
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
  
   ]);

   let addPost = (post) =>{
    setPosts((prevState =>[...prevState,post]))
    setShowModal(false)

   }

  return (
    <>
    <Navbar setShowModal={setShowModal}/>
    <PostList posts={posts}/>
    {showModal && <Modal showModal={setShowModal}>
   
    <div  class="cookiesContent"  id="cookiesPopup">
    <button class="close" onClick={()=>setShowModal(false)}>✖</button>
      <PostForm addPost={addPost}></PostForm>
    
    
    
    
  </div>
    </Modal>}
    
    
    </>
  );
}

export default App;
