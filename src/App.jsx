import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import CourseCatalog from './components/CourseCatalog';
import { Route, Router, Routes,  } from 'react-router-dom';
import CourseDetail from './components/CourseDetail';
import UserDashboard from './components/UserDashboard';
import LessonPlayer from './components/LessonPlayer';
import AppNavbar from './components/AppNavbar';

const App = () => {
  return (
    <div>
      <AppNavbar />
     
      <Routes>
      <Route path="/" element={<CourseCatalog />} />
      <Route path="/courses/:courseId" element={<CourseDetail />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/lesson/:lessonId" element={<LessonPlayer />} />
    </Routes>
      
    </div>
  );
};

export default App;
