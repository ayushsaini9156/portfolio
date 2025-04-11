import React from "react";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";

export const Experience = () => {
    
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        {/* Skills Section */}
        <div className={styles.skills}>
          {(skills || []).length > 0 ? (
            skills.map((skill, id) => (
              <div className={styles.skill} key={id}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            ))
          ) : (
            <p>No skills data available.</p>
          )}
        </div>

        {/* Experience History Section */}
        <ul className={styles.history}>
          {(history || []).length > 0 ? (
            history.map((historyItem, id) => (
              <li key={id} className={styles.historyItem}>
                <img
                  src={historyItem.imageSrc}
                  alt={`${historyItem.organisation} logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {(historyItem.experience || []).map((experience, id) => (
                      <li key={id}>{experience}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))
          ) : (
            <p>No work experience available.</p>
          )}
        </ul>
      </div>
    </section>
  );
};
