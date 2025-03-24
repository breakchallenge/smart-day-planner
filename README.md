# Smart Day Planner

A responsive web application that helps users optimize their daily schedule by intelligently organizing their tasks.

## 📝 Description

Smart Day Planner is a React-based web application that allows users to input their daily tasks and receive an optimized schedule. The application uses a task categorization algorithm to prioritize and organize tasks throughout the day, providing a clear visualization of what tasks to do when and why.

## ✨ Features

- Task input with validation
- Real-time task list management
- Simulated AI processing with visual feedback
- Intelligent task categorization (work, outdoor, family, other)
- Optimized daily schedule generation
- Responsive design that works on all devices
- Clean, intuitive user interface

## 🛠️ Technology Stack

- **React** - Frontend framework
- **Tailwind CSS** - Styling and responsive design
- **Lucide React** - Modern icon library
- **JavaScript** - Core programming language

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/smart-day-planner.git
   cd smart-day-planner
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```

The application will be available at http://localhost:3000

## 📁 Project Structure

```
src/
├── components/
│   └── TaskPlanner/
│       ├── index.js             # Main component with state management
│       ├── TaskInput.js         # Task input with validation
│       ├── TaskList.js          # Display of added tasks
│       ├── LoadingIndicator.js  # Loading animations
│       ├── PlanResults.js       # Schedule visualization
│       └── plannerUtils.js      # Task categorization logic
├── App.js                       # Application entry point
├── index.js                     # React DOM rendering
└── index.css                    # Global styles and animations
```

## 🔄 Workflow

1. Users enter tasks they want to accomplish
2. Tasks are displayed in a list with the ability to remove
3. Upon clicking "Plan My Day", the app simulates AI processing
4. A categorized and optimized schedule is generated
5. The schedule is displayed with times and explanations

## 🔮 Future Enhancements

- Integration with a real LLM API (OpenAI, Anthropic, etc.)
- User accounts to save and retrieve schedules
- Integration with calendar applications
- Time constraint specifications
- Task priority settings
- Export functionality for schedules

## 🙏 Acknowledgements

- [Create React App](https://create-react-app.dev/) - For the project setup
- [Tailwind CSS](https://tailwindcss.com/) - For the styling system
- [Lucide React](https://lucide.dev/) - For the beautiful icons

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request