import React, { useRef } from "react";
import classes from "../styles/newposts.module.scss";

const newPost = () => {
  const usernameInputRef = useRef();
  const descriptionInputRef = useRef();
  const imageInputRef = useRef();

  const createPostHandler = (e) => {
    e.preventDefault();

    const enterdusename = usernameInputRef.current.value;
    const enterddescription = descriptionInputRef.current.value;
    const enterdimage = imageInputRef.current.files[0];

    console.log(enterdimage);

    const formData = new FormData();
    formData.append("file", enterdimage);
    formData.append("upload_preset", "noongram");

    fetch("https://api.cloudinary.com/v1_1/anushkapersonal/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        const postData = {
          username: enterdusename,
          description: enterddescription,
          image: data.secure_url,
        };

        console.log(postData);

        fetch("/api/post", {
          method: "POST",
          body: JSON.stringify(postData),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            usernameInputRef.current.value = "";
            descriptionInputRef.current.value = "";
            imageInputRef.current.value = "";
          });
      });
  };

  return (
    <section className={classes.newpost__container}>
      <h1 className={classes.newpost__container_title}>Add New Post</h1>

      <form onSubmit={createPostHandler} encType='multipart/form-data'>
        <div className={classes.newpost__form_group}>
          <label htmlFor='username'>Username</label>
          <input
            className={classes.newpost__form_input}
            type='text'
            id='username'
            ref={usernameInputRef}
          />
        </div>
        <div className={classes.newpost__form_group}>
          <label htmlFor='description'>Description</label>
          <textarea
            cols='30'
            rows='10'
            className={classes.newpost__form_input}
            id='description'
            ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.newpost__form_group}>
          <label htmlFor='image'>Upload your image</label>
          <input
            className={classes.newpost__form_input}
            type='file'
            name='image'
            id='image'
            ref={imageInputRef}
          />
        </div>
        <div className={classes.newpost__form_group}>
          <button className={classes.newpost__form_button}>
            Create new post
          </button>
        </div>
      </form>
    </section>
  );
};

export default newPost;
