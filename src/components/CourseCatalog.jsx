import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import CourseCard from './CourseCard';
import coursesData from '../data/courses';

const CourseCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const categories = ['All', 'Frontend', 'Programming', 'Computer Science'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || course.difficulty === selectedDifficulty;

    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <Container>
      <h2 className="text-center my-4">Course Catalog</h2>

      <Row className="mb-4">
        <Col md={4}>
          <Form.Group controlId="search">
            <Form.Label>Search Courses</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search by course title"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="difficulty">
            <Form.Label>Difficulty</Form.Label>
            <Form.Control
              as="select"
              value={selectedDifficulty}
              onChange={e => setSelectedDifficulty(e.target.value)}
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        {filteredCourses.map(course => (
          <Col md={4} key={course.id}>
            <CourseCard course={course} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CourseCatalog;
