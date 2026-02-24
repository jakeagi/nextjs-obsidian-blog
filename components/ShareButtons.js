import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  PinterestShareButton,
} from 'react-share';
import { SocialIcon } from 'react-social-icons';
import styles from './share.module.css';

const size = 32;

export default function ShareButtons({ url, title }) {
  // 从 URL 中提取描述（取标题前50个字符）
  const description = title.slice(0, 50);

  return (
    <div className={styles.shareContainer}>
      <h3 className={styles.shareTitle}>Share this article</h3>
      <div className={styles.shareButtons}>
        <TwitterShareButton url={url} title={title} via={url}>
          <SocialIcon network="twitter" style={{ height: size, width: size }} />
        </TwitterShareButton>

        <FacebookShareButton url={url} quote={title}>
          <SocialIcon network="facebook" style={{ height: size, width: size }} />
        </FacebookShareButton>

        <LinkedinShareButton url={url} title={title} summary={description}>
          <SocialIcon network="linkedin" style={{ height: size, width: size }} />
        </LinkedinShareButton>

        <RedditShareButton url={url} title={title}>
          <SocialIcon network="reddit" style={{ height: size, width: size }} />
        </RedditShareButton>

        <TelegramShareButton url={url} title={title}>
          <SocialIcon network="telegram" style={{ height: size, width: size }} />
        </TelegramShareButton>

        <PinterestShareButton url={url} media={url} description={title}>
          <SocialIcon network="pinterest" style={{ height: size, width: size }} />
        </PinterestShareButton>
      </div>
    </div>
  );
}
