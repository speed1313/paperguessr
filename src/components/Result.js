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
import axios from 'axios';

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
  const hashtags = ["paperguessr"];
  // fetch ranking data
  const pointsUrl = 'https://paperguessr-backend.onrender.com/points';
  // fetch only once
  const [scoreTable, setScoreTable] = React.useState([0, 0, 0, 0, 0, 0]);

    // post result
  const postResultUrl = 'https://paperguessr-backend.onrender.com/points/';
  React.useEffect(() => {
    const postResult = async () => {
      try {
        const response = await axios.get(postResultUrl + props.quizResult, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    postResult();
  }, []);

  // fetch ranking data
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(pointsUrl);
        response.data.map((point, score) => {
          scoreTable[point] = score;
        });
        setScoreTable(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);






  return (
    <div>
      <h2>Results</h2>
      You got <strong>{props.quizResult}</strong> points!
      <div className="ResultTable">
        <ol>
          {props.resultTable.map(renderResultTable)}
        </ol>
      </div>
      <div className="ResultTable">
        <h3>Ranking</h3>
        <table>
          <tr>
            <th>Points</th>
            <th>People</th>
          </tr>
          {scoreTable.map((score, index) => {
            if (props.quizResult == index)
              return (
                <tr>
                  <td><strong>{index}</strong></td>
                  <td><strong>{score.count}</strong></td>
                </tr>
              )

            return (
              <tr>
                <td>{index}</td>
                <td>{score.count}</td>
              </tr>
            );
          })}
        </table>

      </div>
      <h3>Share</h3>




      <div className="Demo__some-network">
          <TwitterShareButton url={shareUrl}
          title={title}
          hashtags={hashtags}
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
