import { useEffect, useState } from "react";
import axios from "axios";

function Test() {

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  const userId = localStorage.getItem("userId");

  useEffect(() => {

    const fetchQuestions = async () => {

      try {

        const res = await axios.get(
          "http://localhost:5000/api/test/questions"
        );

        setQuestions(res.data);

      } catch (error) {
        console.log(error);
      }

    };

    fetchQuestions();

  }, []);

  const handleChange = (questionId, option) => {

    setAnswers({
      ...answers,
      [questionId]: option
    });

  };

  const handleSubmit = async () => {

    try {

      const res = await axios.post(
        "http://localhost:5000/api/test/submit",
        {
          userId,
          answers
        }
      );

      alert("Test submitted successfully!");

      localStorage.setItem(
        "recommendations",
        JSON.stringify(res.data)
      );

      window.location.href = "/recommendations";

    } catch (error) {

      console.log(error);
      alert("Error submitting test");

    }

  };

  return (

    <div>

      <h2>Skill Test</h2>

      {questions.map((q) => (
        <div key={q._id}>

          <p>{q.question}</p>

          {q.options.map((opt) => (
            <div key={opt}>

              <input
                type="radio"
                name={q._id}
                value={opt}
                onChange={() => handleChange(q._id, opt)}
              />

              {opt}

            </div>
          ))}

        </div>
      ))}

      <br/>

      <button onClick={handleSubmit}>Submit Test</button>

    </div>

  );

}

export default Test;