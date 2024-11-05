import React, { useEffect } from "react";
import Option from "../components/Option";
import "./feedFilter.css";

type Props = {};

function FeedFilterPage({}: Props) {
  const [feedFilter, setFeedFilter] = React.useState<boolean>(false);
  const [shortsFilter, setShortsFilter] = React.useState<boolean>(false);
  const [topicFeedFilter, setTopicFeedFilter] = React.useState<boolean>(false);
  const [videoHidden, setVideoHidden] = React.useState<boolean>(false);
  const [videoGrey, setVideoGrey] = React.useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const result: any = await chrome.storage.local.get([
        "feedFilter",
        "shortsFilter",
        "topicFeedFilter",
        "videoHidden",
        "videoGrey",
      ]);
      setFeedFilter(result.feedFilter);
      setShortsFilter(result.shortsFilter);
      setTopicFeedFilter(result.topicFeedFilter);
      setVideoHidden(result.videoHidden);
      setVideoGrey(result.videoGrey);
    })();
  }, []);
  return (
    <main>
      <div className="container">
        <Option
          title="Feed Filter"
          state={feedFilter}
          head={true}
          setState={() => {
            setFeedFilter(!feedFilter);
            chrome.storage.local.set({ feedFilter: !feedFilter });
          }}
        />
        <div className={feedFilter ? "" : "disabled"}>
          <Option
            title="Shorts Filter"
            discription="Hide shorts"
            state={shortsFilter}
            setState={() => {
              setShortsFilter(!shortsFilter);
              chrome.storage.local.set({ shortsFilter: !shortsFilter });
            }}
          />

          <Option
            title="Topic Feed Filter"
            discription="Hide topic feed"
            state={topicFeedFilter}
            setState={() => {
              setTopicFeedFilter(!topicFeedFilter);
              chrome.storage.local.set({ topicFeedFilter: !topicFeedFilter });
            }}
          />
          <div className={feedFilter && !topicFeedFilter ? "disabled":"" }>
            <Option
              title="Video Hidden"
              discription="Hide video"
              state={videoHidden}
              setState={() => {
                setVideoHidden(!videoHidden);
                chrome.storage.local.set({ videoHidden: !videoHidden });
              }}
            />

            <Option
              title="Video Grey"
              discription="Hide video"
              state={videoGrey}
              setState={() => {
                setVideoGrey(!videoGrey);
                chrome.storage.local.set({ videoGrey: !videoGrey });
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default FeedFilterPage;
