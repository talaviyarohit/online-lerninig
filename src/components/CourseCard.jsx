// import React from 'react';
// import { Card, Button } from 'react-bootstrap';

// const CourseCard = ({ course }) => {
//   return (
//     <Card className="mb-4">
//       <Card.Img variant="top" src={course.imageUrl} />
//       <Card.Body>
//         <Card.Title>{course.title}</Card.Title>
//         <Card.Text>{course.description}</Card.Text>
//         <Card.Text className="font-weight-bold">{course.price}</Card.Text>
//         <Button variant="primary">Enroll Now</Button>
//       </Card.Body>
//     </Card>
//   );
// };

// export default CourseCard;

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={course.imageUrl} />
      <Card.Body className='cardbody'>
        <Card.Title className='height-title'>{course.title}</Card.Title>
        <Card.Text className='width-12'>{course.description}</Card.Text>
        <Card.Text className="font-weight-bold">{course.price}</Card.Text>
        <Link to={`/courses/${course.id}`}>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
