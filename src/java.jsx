import React, { useState } from 'react';
import './Java.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Section = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="section">
      <div className="section-header" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </div>
      {isOpen && <div className="section-content">{children}</div>}
    </div>
  );
};

const Java = () => {
  return (
    <div className="java-container">
      <h1>Learn Java Programming</h1>

      <Section title="Introduction to Java">
        <p>
          Java is a platform-independent language used in enterprise apps, Android development, and more...
        </p>
      </Section>

      <Section title="Java Variables and Literals">
        <p>Java Variables are memory locations used to store data. Example:</p>
        <code>{`int speedLimit = 80;`}</code>
        <code>{`int speedLimit;\nspeedLimit = 80;`}</code>
        <p>Java is statically typed. You can't do:</p>
        <code>{`int speedLimit = 80;\nfloat speedLimit; // ❌ Not allowed`}</code>
      </Section>

      <Section title="Java Data Types (Primitive)">
        <p>Java provides 8 primitive data types. Examples:</p>
        <code>{`boolean flag = true;`}</code>
        <code>{`byte range = 124;`}</code>
        <code>{`char letter = '\\u0051';`}</code>
      </Section>

      <Section title="Is Java for You?">
        <p>
          Java is great for enterprise development and Android. Example class:
        </p>
        <code>{`public class Main {
  public static void main(String[] args) {
    Calculator calc = new Calculator();
    System.out.println(calc.add(5, 10));
  }
}

class Calculator {
  public int add(int x, int y) {
    return x + y;
  }
}`}</code>
      </Section>

      <Section title="Best Way to Learn Java">
        <p>
          Based on your style, you can learn via:
          <ul>
            <li>Text Tutorials</li>
            <li>Interactive Courses</li>
            <li>Videos</li>
            <li>Mobile Apps</li>
          </ul>
        </p>
      </Section>

      <Section title="How to Run Java?">
        <p>You can run Java using online editors directly in your browser. No installation needed!</p>
      </Section>
    </div>
  );
};

export default Java;
