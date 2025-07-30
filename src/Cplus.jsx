import React from 'react';
import "./Cplus.css"

const Cplus = () => {
  return (
    <div className="cplus-container">
      <h1>Learn C++ Programming</h1>

      <p className="intro">
        C++ is a leading programming language used in game development, virtual reality, real-time simulation and high-frequency trading, where efficiency and speed matter.
      </p>

      <section>
        <h2>Why Learn C++?</h2>
        <p>
          C++ works closely with hardware and provides great performance, making it ideal for speed-critical applications. It’s object-oriented, flexible, and offers great career opportunities with strong salary prospects.
        </p>
      </section>

      <section>
        <h2>In This Guide:</h2>
        <ul>
          <li>Beginner's Guide to C++</li>
          <li>Is C++ for you?</li>
          <li>Best Way to Learn C++</li>
          <li>How to Run C++?</li>
        </ul>
      </section>

      <section>
        <h2>C++ Keywords</h2>
        <p>
          Keywords are predefined words with special meanings in C++. For example: <code>int money;</code> — here, <code>int</code> is a keyword.
        </p>
        <div className="keyword-grid">
          <span>alignas</span><span>namespace</span><span>template</span><span>while</span>
          <span>auto</span><span>private</span><span>virtual</span><span>return</span>
          <span>int</span><span>float</span><span>bool</span><span>void</span>
          <span>const</span><span>new</span><span>throw</span><span>class</span>
          {/* Add more as needed */}
        </div>
      </section>

      <section>
        <h2>C++ Data Types</h2>
        <p>
          Data types define the kind of data a variable can store. Example: <code>int age = 13;</code>
        </p>
        <table>
          <thead>
            <tr>
              <th>Data Type</th>
              <th>Meaning</th>
              <th>Size (Bytes)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>int</td>
              <td>Integer</td>
              <td>2 or 4</td>
            </tr>
            <tr>
              <td>float</td>
              <td>Floating-point</td>
              <td>4</td>
            </tr>
            <tr>
              <td>double</td>
              <td>Double precision</td>
              <td>8</td>
            </tr>
            <tr>
              <td>char</td>
              <td>Character</td>
              <td>1</td>
            </tr>
            <tr>
              <td>bool</td>
              <td>Boolean (true/false)</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Type Modifiers</h2>
        <p>
          C++ allows modifying base data types using keywords like <code>short</code>, <code>long</code>, <code>signed</code>, <code>unsigned</code>.
        </p>
      </section>

      <section>
        <h2>Derived Data Types</h2>
        <p>
          Derived types are built from fundamental data types: arrays, functions, pointers, structures, etc.
        </p>
      </section>

      <section>
        <h2>C++ Tutorial Topics</h2>
        <ul className="topics-list">
          <li>C++ Fundamentals</li>
          <li>C++ Variables & Constants</li>
          <li>C++ Input/Output</li>
          <li>Functions, Arrays, Pointers</li>
          <li>Object Oriented Programming</li>
          <li>STL (Vector, Map, Set, etc.)</li>
        </ul>
      </section>
    </div>
  );
};

export default Cplus;
