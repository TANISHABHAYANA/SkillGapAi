import { useEffect, useState } from "react";

function Recommendations() {

  const [data, setData] = useState(null);

  useEffect(() => {

    const storedData = localStorage.getItem("recommendations");

    if (storedData) {
      setData(JSON.parse(storedData));
    }

  }, []);

  if (!data) {
    return <h2>No recommendations found</h2>;
  }

  return (

    <div>

      <h2>Skill Analysis Result</h2>

      <h3>Weak Topics</h3>

      <ul>
        {data.weakTopics && data.weakTopics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>

      <h3>Recommended Courses</h3>

      {data.recommendedCourses && data.recommendedCourses.map((course) => (

        <div key={course._id}>

          <h4>{course.title}</h4>

          <p><b>Platform:</b> {course.platform}</p>

          <p><b>Level:</b> {course.level}</p>

          <a
            href={course.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Course
          </a>

          <hr/>

        </div>

      ))}

    </div>

  );

}

export default Recommendations;