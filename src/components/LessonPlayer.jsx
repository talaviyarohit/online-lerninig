import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import ReactPlayer from 'react-player';

// Sample lesson data
const lesson = {
  id: 1,
  title: "Introduction to React",
  videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Example video URL
  content: `
    <h5>What is React?</h5>
    <p>React is a JavaScript library for building user interfaces.</p>
    <p>It allows developers to create large web applications that can change data, without reloading the page.</p>
    <h5>Why Use React?</h5>
    <ul>
      <li>Declarative: React makes it easy to create interactive UIs.</li>
      <li>Component-Based: Build encapsulated components that manage their own state.</li>
      <li>Learn Once, Write Anywhere: React can be used for web, mobile apps, and even desktop applications.</li>
    </ul>
  `,
};

const LessonPlayer = () => {
  return (
    <Container className="my-5">
        
      <h2>{lesson.title}</h2>
      <Card className="mb-4">
        <Card.Body>
          <ReactPlayer url={lesson.videoUrl} controls width="100%" />
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <div
            dangerouslySetInnerHTML={{ __html: lesson.content }} // Render HTML content safely
          />
          <Button variant="success" className="mt-3">Complete Lesson</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LessonPlayer;
