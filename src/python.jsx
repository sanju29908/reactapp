import React from 'react';
import './Python.css'; // make sure the file name and path match

const Python = () => {
  return (
    <div className="python-container">
      <h1>Learn Python Programming</h1>

      <p>Python is one of the top programming languages in the world...</p>

      <section>
        <h2>Is Python for You?</h2>
        <p>Whether Python is the right choice depends on what you want to accomplish...</p>
      </section>

      <section>
        <h2>Python as a Career Choice</h2>
        <p>Python is widely used in data science, AI, automation, and more...</p>
      </section>

      <section>
        <h2>Best Way to Learn Python</h2>
        <ul>
          <li>Text-based Tutorial</li>
          <li>Interactive Course</li>
          <li>Online Video</li>
          <li>Mobile App</li>
        </ul>
      </section>

      <section>
        <h2>How to Run Python?</h2>
        <p>You can run Python code directly in your browser using online editors...</p>
      </section>

      <section>
        <h2>Python if...else Statement</h2>
        <p>
          The <code>if</code> statement is used to execute code based on conditions.
          Example:
        </p>
        <code>
          {`x = 5\ny = 10\nprint(x + y)`}
        </code>
      </section>
    </div>
  );
};

export default Python;
