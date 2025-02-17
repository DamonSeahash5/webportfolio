import CustomComponent from "./CustomComponent.jsx";
import placeholder from "../assets/Nightview1.jpg";
import placeholderTwo from "../assets/Nightview2.png";
import theOldSchool from "../assets/portfoliopage2.png";
import vets4Pets from "../assets/portfoliopage3.png"
import theCrofts from "../assets/portfoliopage4.png"
import enslinStreet from "../assets/portfoliopage5.png"
import northernRoots from "../assets/portfoliopage6.png"
import thesisOne from "../assets/portfoliopage7.png"
import thesisTwo from "../assets/portfoliopage8.png"


const projectsData = [
    { id: 1, title: "The Old School", type: "image", category: "architecture", content: theOldSchool },
    { id: 2, title: "vets4Pets", type: "image", category: "architecture", content: vets4Pets },
    { id: 3, title: "Enslin Street", type: "image", category: "architecture", content: enslinStreet },
    { id: 4, title: "The Crofts", type: "image", category: "architecture", content: theCrofts },
    { id: 5, title: "Northern Roots", type: "image", category: "architecture", content: northernRoots },
    { id: 6, title: "Thesis One", type: "image", category: "architecture", content: thesisOne },
    { id: 7, title: "Thesis Two", type: "image", category: "architecture", content: thesisTwo },
    { id: 8, title: "E-Commerce Website", type: "text", category: "software", content: "Built with React & Node.js" },
    { id: 9, title: "Weather App", type: "component", category: "software", content: <CustomComponent /> },
    { id: 10, title: "Weather App", type: "component", category: "software", content: <CustomComponent /> },
    { id: 11, title: "E-Commerce Website", type: "text", category: "software", content: "Built with React & Node.js" },
];

export default projectsData;