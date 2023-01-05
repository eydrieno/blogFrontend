import * as React from "react";
import "./App.css";
import Homepage from "./components/homepage";
import Footer from "./components/footer";
import Header from "./components/header";
import AllPosts from "./components/allPosts";
import CategoryPosts from "./components/category-posts";
import SinglePost from "./components/single-post";
import ContactForm from "./components/contactForm";
import AddPost from "./components/addPost";
import AdminPanel from "./components/adminPanel";
import EditPost from "./components/edit-post";
import PostsList from "./components/postsList";
import LogIn from "./components/logIn";
// import Post from './components/post';
// import CreatePost from './components/new-post-form';
// import axios from './axios-setup';
// import { useEffect, useState } from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCaretDown, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Routes, Route } from "react-router-dom";
import axios from "./axios-setup";
import { useEffect, useState } from "react";
import authContext from "./authContext";

//let showFunction;
function App() {
  library.add(fab, faCaretDown, faArrowRightFromBracket);
  // const [allPosts, setAllPosts] = useState([]);

  // useEffect(() => {
  //   showPosts();
  // }, [])

  // const showPosts = async () => {
  //   try {
  //     const {data: {posts}} = await axios.get('/api/v1/posts')
  //     setAllPosts(posts)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // //showFunction = showPosts;
  // const deletePost = async (id) => {
  //   try {
  //     await axios.delete(`/api/v1/posts/${id}`)
  //     showPosts()
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const addPost = async (post) => {
  //   try {
  //     await axios.post('/api/v1/posts', {
  //       title: post.title,
  //       content: post.content
  //     })
  //     showPosts();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  useEffect(() => {
    showPosts();
  }, []);
  const [allPosts, setAllPosts] = useState([]);
  const [isAuth, setIsAuth] = useState(false);

  const showPosts = async () => {
    try {
      const {
        data: { posts },
      } = await axios.get("/api/v1/posts");
      setAllPosts(posts);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
    <authContext.Provider value={{ isAuth, setIsAuth }}>
      <Header />
      
        <Routes>
          <Route path="/" exact element={<Homepage allPosts={allPosts} />} />

          <Route path="/adminPanel" element={<LogIn />} />
          <Route path="/adminPanel/logged" element={<AdminPanel />} />
          <Route path="/adminPanel/logged/addPost" element={<AddPost />} />
          <Route
            path="/adminPanel/logged/editPost"
            element={<PostsList allPosts={allPosts} />}
          />
          <Route
            path="/adminPanel/logged/editPost/:id"
            element={<EditPost allPosts={allPosts} />}
          />

          <Route
            path="allPosts"
            exact
            element={<AllPosts allPosts={allPosts} />}
          />
          <Route
            path="allPosts/:category"
            exact
            element={<CategoryPosts allPosts={allPosts} />}
          />
          <Route
            path="allPosts/:category/:id"
            element={<SinglePost allPosts={allPosts} />}
          />
          <Route path=":id" element={<SinglePost allPosts={allPosts} />} />
          <Route path="contact" element={<ContactForm />} />
          {/* <h1>Latest posts</h1>
      <div className="posts-container">
      {allPosts.map(post => {
        const {title, content, _id, date} = post
        return (
        <Post
          key = {_id}
          id = {_id}
          date = {date}
          title = {title}
          content = {content}
          onDelete = {deletePost}
        />
        )
      })}
      </div>
      <div className="about">
      <h1>Who we are</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div> */}

          {/* <CreatePost onAdd = {addPost}/> */}
        </Routes>
      
      <Footer />
      </authContext.Provider>
    </div>
  );
}

export default App;
//export { showFunction}
