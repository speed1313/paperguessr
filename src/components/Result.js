import React from 'react';
import PropTypes from 'prop-types';
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
  TwitterIcon,
} from "react-share";

function Result(props) {
  const shareUrl = 'http://github.com';
  const title = "I got " + props.quizResult + " points on paperguerssr";
  return (
    <div>
      <h2>Result</h2>
      You got <strong>{props.quizResult}</strong> points!



      <div className="Demo__some-network">
          <TwitterShareButton url={shareUrl}
            title={title}
            className="Demo__some-network__share-button"
          >
            Let's share your results<TwitterIcon size={32} round />
          </TwitterShareButton>
        <div className="Demo__some-network__share-count">&nbsp;</div>
        <button onClick={props.onRestart}>Restart</button>
      </div>

    </div>

  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
