import React from 'react';
import './Javascript.css';

const Javascript = () => {
  return (
    <div className="js-container">
      <h1>Learn JavaScript</h1>

      <p>
        JavaScript is the most popular programming language used in the field of website development.
        The simple and easy-to-understand syntax makes JavaScript a good language to start programming.
        There is a high demand for JavaScript developers...
      </p>

      <section>
        <h2>Is JavaScript for You?</h2>
        <p>
          Choosing whether to learn JavaScript depends on your interests and career goals...
        </p>

        <code>
{`// JavaScript Example
let x = 10;
let y = 5;
console.log(x + y);`}
        </code>

        <code>
{`// C Example
#include <stdio.h>
int main() {
  int x = 5, y = 10;
  printf("%d", x + y);
  return 0;
}`}
        </code>
      </section>

      <section>
        <h2>JavaScript as Career Choice</h2>
        <ul>
          <li>Web Development</li>
          <li>Mobile Applications</li>
          <li>Game Development</li>
          <li>IoT (Internet of Things)</li>
        </ul>
      </section>

      <section>
        <h2>Best Way to Learn JavaScript</h2>
        <ul>
          <li>Text-based Tutorial</li>
          <li>Online Video</li>
          <li>Mobile App</li>
        </ul>
      </section>

      <section>
        <h2>How to Run JavaScript?</h2>
        <p>
          You can run JavaScript directly in your browser using an online code editor.
        </p>
      </section>
    </div>
  );
};

export default Javascript;
