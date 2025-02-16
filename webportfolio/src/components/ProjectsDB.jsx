import CustomComponent from "./CustomComponent.jsx"

const projectsData = [
    { id: 1, title: "Modern House", type: "image", category: "architecture", content: "house.jpg" },
    { id: 2, title: "Bridge Design", type: "image", category: "architecture", content: "bridge.jpg" },
    { id: 3, title: "Weather App", type: "component", category: "software", content: <CustomComponent /> },
    { id: 4, title: "E-Commerce Website", type: "text", category: "software", content: "Built with React & Node.js" },
    { id: 5, title: "Modern House", type: "image", category: "architecture", content: "house.jpg" },
    { id: 6, title: "Bridge Design", type: "image", category: "architecture", content: "bridge.jpg" },
    { id: 7, title: "Weather App", type: "component", category: "software", content: <CustomComponent /> },
    { id: 8, title: "E-Commerce Website", type: "text", category: "software", content: "Built with React & Node.js" },
];

export default projectsData;