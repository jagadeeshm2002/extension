import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "./topic.module.css";

function Topic() {
  const devTopics: { title: string; active: boolean }[] = [
    {
      title: "React.js",
      active: true,
    },
    {
      title: "MERN Stack",
      active: true,
    },
    {
      title: "Node.js",
      active: true,
    },
    {
      title: "Express.js",
      active: true,
    },
    {
      title: "MongoDB",
      active: true,
    },
    {
      title: "Next.js",
      active: false,
    },
    {
      title: "Tailwind CSS",
      active: true,
    },
    {
      title: "GraphQL",
      active: false,
    },
    {
      title: "Redux",
      active: true,
    },
    {
      title: "Framer Motion",
      active: true,
    },
  ];
  const [topics, setTopics] =
    useState<{ title: string; active: boolean }[]>(devTopics);
  function toggleTopic(e: React.ChangeEvent<HTMLInputElement>) {
    setTopics((prevTopics) => {
      return prevTopics.map((topic) => {
        if (topic.title === e.target.name) {
          return { ...topic, active: !topic.active };
        }
        return topic;
      });
    });
  }
  console.log(topics);

  return (
    <div className={Styles.TopicContainer}>
      <div className={Styles.TopicTitle}>
        <p className={Styles.TopicText}>Your Topics</p>
      </div>
      <div className={Styles.TopicList}>
        {topics.map((item) => (
          <div key={item.title} className={Styles.TopicItem}>
            <label htmlFor={item.title} >
              <input
                type="checkbox"
                id={item.title}
                name={item.title}
                value={item.title}
                checked={item.active}
                className={Styles.TopicCheckbox}
                onChange={(e) => toggleTopic(e)}
              />
              {item.title}
            </label>
          </div>
        ))}
      </div>
      <div className={Styles.TopicButton}>
        <Link to="/" className={Styles.TopicAddButton}>
          Add
        </Link>
      </div>
    </div>
  );
}

export default Topic;
