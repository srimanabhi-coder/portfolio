# Full Stack Developer Portfolio

A modern, responsive portfolio website built with React.js, showcasing the skills, projects, and experience of a full stack developer.

## Features

- **Modern Design**: Clean, professional layout with smooth animations and transitions
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Navigation**: Smooth scrolling navigation with active section highlighting
- **Skills Showcase**: Visual skill bars with technology icons
- **Project Gallery**: Interactive project cards with hover effects
- **Experience Timeline**: Professional timeline layout for work experience
- **Contact Form**: Functional contact form with modern styling
- **Social Links**: Integrated social media links
- **Performance Optimized**: Fast loading with optimized animations

## Sections

1. **Hero Section**: Introduction with profile image and call-to-action buttons
2. **About**: Personal information and key statistics
3. **Skills**: Technical skills with visual progress indicators
4. **Projects**: Featured projects with live demos and source code links
5. **Experience**: Professional experience in timeline format
6. **Contact**: Contact information and message form

## Technologies Used

- **Frontend**: React.js, CSS3, HTML5
- **Icons**: React Icons (Font Awesome, Simple Icons)
- **Styling**: Custom CSS with modern techniques (Grid, Flexbox, Animations)
- **Responsive Design**: Mobile-first approach with media queries

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customization

### Personal Information

Update the following in `src/App.js`:

- **Name**: Change "John Doe" to your name
- **Profile Image**: Replace the placeholder image URL with your photo
- **Contact Information**: Update email, phone, and location
- **Social Links**: Add your GitHub, LinkedIn, and Twitter profiles

### Skills

Modify the `skills` array in `src/App.js` to reflect your technical skills:

```javascript
const skills = [
  { name: 'Your Skill', icon: YourIcon, level: 90 },
  // Add more skills...
];
```

### Projects

Update the `projects` array with your own projects:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description...",
    technologies: ["Tech1", "Tech2", "Tech3"],
    github: "https://github.com/yourusername/project",
    live: "https://your-project-demo.com",
    image: "/path/to/your/image.jpg"
  },
  // Add more projects...
];
```

### Experience

Modify the `experiences` array to reflect your work history:

```javascript
const experiences = [
  {
    id: 1,
    title: "Your Job Title",
    company: "Company Name",
    period: "Start Date - End Date",
    description: "Job description...",
    technologies: ["Tech1", "Tech2", "Tech3"]
  },
  // Add more experiences...
];
```

### Styling

Customize the appearance by modifying `src/App.css`:

- **Colors**: Update the gradient colors and theme colors
- **Fonts**: Change font families and sizes
- **Animations**: Adjust animation durations and effects
- **Layout**: Modify spacing, sizing, and responsive breakpoints

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `build` folder ready for deployment.

### Deployment Options

- **Netlify**: Drag and drop the build folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use gh-pages package
- **Firebase Hosting**: Use Firebase CLI

## Performance Tips

- Optimize images before adding them to the project
- Use WebP format for better compression
- Implement lazy loading for images
- Minimize CSS and JavaScript in production builds

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

---

**Note**: Remember to replace placeholder content with your actual information and projects!
