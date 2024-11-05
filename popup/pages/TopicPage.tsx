import { useState } from "react";

import Styles from "./topic.module.css"
import { XIcon } from "lucide-react";

/**
 * A component for managing a list of topics.
 *
 * @param {{}} props An empty object, required for React component syntax.
 * @returns {JSX.Element} A JSX element representing the component.
 */
export default function TopicPage(props: {}): JSX.Element {
  const [topics, setTopics] = useState<Topic[]>(initialTopics);
  const [newTopic, setNewTopic] = useState<string>("");

  /**
   * Toggles the active state of a topic.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e A React event.
   */
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

  /**
   * Adds a new topic to the list.
   */
  function addTopic() {
    setTopics((prevTopics) => {
      return [...prevTopics, { title: newTopic, active: true }];
    });
    setNewTopic("");
  }

  /**
   * Removes a topic from the list.
   *
   * @param {string} title The title of the topic to remove.
   */
  function removeTopic(title: string) {
    setTopics((prevTopics) => {
      return prevTopics.filter((topic) => topic.title !== title);
    });
  }

  /**
   * Saves the list of topics to local storage.
   *
   * @returns {Promise<void>}
   */
  async function saveTopics(): Promise<void> {
    setTopics(initialTopics);
    await chrome.storage.sync.set({ topics: initialTopics });
  }
  return (
    <main>
      <div className={Styles.container}>
        <div className={Styles.TopicTitle}>
          <p className={Styles.TopicText}>Add Topics</p>
        </div>
        <textarea
          name="add"
          id="add"
          value={newTopic}
          onChange={(e) => setNewTopic(e.target.value)}
          className={Styles.Input}
          placeholder="Add here..."
        />
        <div className={Styles.TopicButton}>
          <button className={Styles.TopicAddButton} onClick={addTopic}>
            Add
          </button>
        </div>
      </div>
      <div className={Styles.TopicContainer}>
        <div className={Styles.TopicTitle}>
          <p className={Styles.TopicText}>Your Topics</p>
        </div>
        <div className={Styles.TopicList}>
          {topics.map((item) => (
            <div key={item.title} className={Styles.TopicItem}>
              <label htmlFor={item.title}>
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
              <XIcon
                size={16}
                color="red"
                strokeWidth={4}
                className={Styles.TopicDelete}
                onClick={() => removeTopic(item.title)}
              />
            </div>
          ))}
        </div>
        <div className={Styles.TopicButton}>
          <button className={Styles.TopicAddButton}>update</button>
        </div>
      </div>
    </main>
  );
}

/**
 * The initial list of topics.
 */
const initialTopics: Topic[] = [
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

/**
 * A topic object.
 */
interface Topic {
  title: string;
  active: boolean;
}

