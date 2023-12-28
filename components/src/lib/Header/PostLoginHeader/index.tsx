import styles from './PostLoginHeader.module.scss';

/* eslint-disable-next-line */
export interface PostLoginHeaderProps {}

export function PostLoginHeader(props: PostLoginHeaderProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PostLoginHeader!</h1>
    </div>
  );
}

export default PostLoginHeader;
