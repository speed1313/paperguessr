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
  FacebookIcon,
  LinkedinIcon,
  LineIcon,

} from "react-share";

function renderResultTable(key) {
  if (key){
    return (
      <li>
        o
      </li>
    );
  } else {
    return (
      <li>
        x
      </li>
    );
  }
}

function Result(props) {
  const shareUrl = 'https://paperguessr.vercel.app/';
  const title = "I got " + props.quizResult + " points on paperguerssr";
  return (
    <div>
      <h2>Results</h2>
      You got <strong>{props.quizResult}</strong> points!
      <div className="ResultTable">
        <ol>
          {props.resultTable.map(renderResultTable)}
        </ol>

      </div>


      <div className="Demo__some-network">
          <TwitterShareButton url={shareUrl}
            title={title}
            className="Demo__some-network__share-button"
          >
            <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LineShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button"
          >
            <LineIcon size={32} round />
          </LineShareButton>
        <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round />
        </FacebookShareButton>
        <LinkedinShareButton url={shareUrl} className="Demo__some-network__share-button">
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        <div className="Demo__some-network__share-count">&nbsp;</div>

        <button onClick={props.onRestart}>Retry</button>
      </div>
      <div className="ContactMe">
        <h5>If you have any comments or questions, please contact <a href="https://twitter.com/strayer_13">@strayer_13</a></h5>
         <small>Source: <a href="https://github.com/speed1313/paperguessr">https://github.com/speed1313/paperguessr</a></small>
      </div>


    </div>

  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
