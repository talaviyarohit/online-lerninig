const courses = [
    {
      id: 1,
      title: "React for Beginners",
      description: "Learn the basics of React.",
      category: "Frontend",
      difficulty: "Beginner",
      imageUrl: "data:image/jpeg;base64,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",
      price: "$49.99",
      instructor: {
        name: "Jane Doe",
        bio: "Experienced web developer and educator.",
        imageUrl: ""
      }
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      description: "Master JavaScript and become a pro.",
      category: "Programming",
      difficulty: "Advanced",
      imageUrl: "data:image/png;base64,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",
      price: "$59.99",
      instructor: {
        name: "John Smith",
        bio: "JavaScript expert with over 10 years of experience.",
        imageUrl: "https://via.placeholder.com/100x100"
      }
    },
    {
      id: 3,
      title: "Advanced JavaScript",
      description: "Master JavaScript and become a pro.",
      category: "Programming",
      difficulty: "Advanced",
      imageUrl: "data:image/jpeg;base64,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",
      price: "$70.99",
      instructor: {
        name: "John Smith",
        bio: "JavaScript expert with over 10 years of experience.",
        imageUrl: "https://via.placeholder.com/100x100"
      }
    }
  ];
  
  export default courses;
  