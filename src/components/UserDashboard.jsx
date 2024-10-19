import React from 'react';
import { Container, Row, Col, Card, ProgressBar, Button } from 'react-bootstrap';
import FeaturedCourses from './FeaturedCourses';


const userCourses = [
  {
    id: 1,
    title: "React for Beginners",
    progress: 70, 
    currentLesson: 3, 
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    progress: 50,
    currentLesson: 2,
  },
  {
    id: 3,
    title: "Data Science with Python",
    progress: 40,
    currentLesson: 1,
  },
  {
    id: 4,
    title: "Jquery",
    progress: 80,
    currentLesson: 1,
  },
];

const UserDashboard = () => {
  return (
    <Container className="my-5">
        <FeaturedCourses className="mb-5"/>
      <h2 className='text-center mt-5'>User Dashboard</h2>
      <Row className='mt-5'>
        {userCourses.map((course) => (
          <Col md={6} key={course.id} className="mb-4">
            <Card>
              <Card.Body className='cardbody'>
                <Card.Title>{course.title}</Card.Title>
                <ProgressBar now={course.progress} label={`${course.progress}%`} />
                <Card.Text>
                  Progress: {course.progress}% <br />
                  Current Lesson: {course.currentLesson}
                </Card.Text>
                <Button variant="primary">Resume Lesson</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserDashboard;
