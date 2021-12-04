import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import classes from "../styles/post.module.scss";

const Post = ({ username, image, description, id }) => {
  const onLikeButtonClickHandler = (e) => {
    e.preventDefault();
    console.log(e.target.id);

    fetch("/api/favourites", {
      method: "POST",
      body: JSON.stringify({
        postid: e.target.id,
        username: username,
        image: image,
        description: description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className={classes.post}>
      <div className={classes.post__header}>
        <div className={classes.post__user}>
          <Image
            src={image}
            alt='Picture of the author'
            width={32}
            height={32}
          />
          <span className={classes.post__profile_username}>{username}</span>
        </div>
      </div>

      <div className={classes.post__body}>
        <Image src={image} width={500} height={500} />
      </div>

      <div className={classes.post__footer}>
        <div className={classes.footer__actions}>
          <button
            id={id}
            onClick={onLikeButtonClickHandler}
            className={classes.footer__actions_like}>
            <FontAwesomeIcon icon={faHeart} id={id} />{" "}
            <span id={id} className={classes.footer__actions_likes}>
              Mark as Favourite
            </span>
          </button>
        </div>
        <div className={classes.footer__description}>
          <span>{description}</span>
          {/* <span className={classes.footer__description_comments}>
            #Lorem #ipsum #dolor #sit #amet
          </span> */}
        </div>
        <div className={classes.footer__comments}>View 12 comments</div>
      </div>
    </div>
  );
};

export default Post;
