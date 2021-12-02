import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import ProfileImage from "../public/images/profile.jpg";
import classes from "../styles/post.module.scss";
const Post = () => {
  return (
    <div className={classes.post}>
      <div className={classes.post__header}>
        <div className={classes.post__user}>
          <Image
            src={ProfileImage}
            alt='Picture of the author'
            width={32}
            height={32}
          />
          <span className={classes.post__profile_username}>@username</span>
        </div>
      </div>

      <div className={classes.post__body}>
        <Image src={ProfileImage} alt='Picture of the author' />
      </div>

      <div className={classes.post__footer}>
        <div className={classes.footer__actions}>
          <FontAwesomeIcon icon={faHeart} />{" "}
          <span className={classes.footer__actions_likes}>30</span>
        </div>
        <div className={classes.footer__description}>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
            natus...
          </span>
          <span className={classes.footer__description_comments}>
            #Lorem #ipsum #dolor #sit #amet
          </span>
        </div>
        <div className={classes.footer__comments}>View 12 comments</div>
      </div>
    </div>
  );
};

export default Post;
