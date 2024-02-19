import { IoCodeWorking, IoLogoDiscord, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import img1 from "./images/SuperHexagon.png"
import img2 from "./images/Cyber-Fu.png"
import img3 from "./images/maxtran.png"
import img4 from "./images/Asteriods.png"
import img5 from "./images/"
import img6 from "./images/chevy-a06dc76b.png"
import img7 from "./images/OIG-_1_.jpg"

export const Experience = [
    {
        id: 1,
        date: "Jul 2023 - Present",
        iconsSrc: <IoCodeWorking />,
        title: "Game-U Instructor And Curriculum Developer",
        location: "Remote In Houston, Tx",
    },
    {
        id: 2,
        date: "Jul 2023 - Dec 2023",
        iconsSrc: <IoCodeWorking />,
        title: "Code Hero Academy Unity Lua Game Engineer",
        location: "Remote In Houston, Tx",
    },
    {
        id: 3,
        date: "May 2023 - Jul 2023",
        iconsSrc: <IoCodeWorking />,
        title: "iD Tech Camps Curriculum Developer",
        location: "Remote In Houston, Tx",
    },
    {
        id: 4,
        date: "Jun 2022 - Jul 2023",
        iconsSrc: <IoCodeWorking />,
        title: "Steam K-12 Curriculum Developer",
        location: "Remote In Houston, Tx",
    },
    {
        id: 5,
        date: "Oct 2022 - Feb 2023",
        iconsSrc: <IoCodeWorking />,
        title: "Kluge Interactive VR Developer",
        location: "Remote In Houston, Tx",
    },
    {
        id: 6,
        date: "Nov 2020 - Feb 2023",
        iconsSrc: <IoCodeWorking />,
        title: "Magikid Robotics Lab Curriculum Developer And Instructor",
        location: "Remote In Houston, Tx",
    },
    {
        id: 7,
        date: "Oct 2022 - Jan 2023",
        iconsSrc: <IoCodeWorking />,
        title: "Dentsu Creative Roblox Developer",
        location: "Remote In Houston, Tx",
    },
    {
        id: 8,
        date: "Jan 2022 - Jul 2022",
        iconsSrc: <IoCodeWorking />,
        title: "Pion Creator Curriculum Developer",
        location: "Remote In Houston, Tx",
    },
    {
        id: 9,
        date: "Apr 2020 - Aug 2021",
        iconsSrc: <IoCodeWorking />,
        title: "TechDevAcademy Curriculum Developer And Instructor",
        location: "Remote In Houston, Tx",
    },
    {
        id: 10,
        date: "Nov 2020 - Jun 2021",
        iconsSrc: <IoCodeWorking />,
        title: "Leonor Urena Unity 3D Networking Engineer",
        location: "Remote In Houston, Tx",
    },
    {
        id: 11,
        date: "Nov 2020 - Jun 2021",
        iconsSrc: <IoCodeWorking />,
        title: "Cody Ninjas Curriculum Instructor",
        location: "Houston, Tx",
    },
];

export const Projects = [
    {
        id: 1, 
        name: "Super Duper Shapes", 
        imageSrc: img1, 
        github: "#",
    },
    {
        id: 2, 
        name: "Cyber Fu", 
        imageSrc: img2, 
        github: "#",
    },
    {
        id: 3, 
        name: "MaxTran", 
        imageSrc: img3, 
        github: "#",
    },
    {
        id: 4, 
        name: "Asteriods", 
        imageSrc: img4, 
        github: "#",
    },
    {
        id: 5, 
        name: "Rhodes Inc Platform", 
        imageSrc: img5, 
        github: "#",
    }
];

export const RobloxProjects = [
    {
        id: 1, 
        name: "Chevy Electric Racer", 
        imageSrc: img6, 
    },
    {
        id: 2, 
        name: "Fightmania", 
        imageSrc: img7, 
    }
];

export default SocialLinks = [
    {
        id: 1,
        iconsSrc: ( 
            <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
        ),
        name: "Github",
        link: "#"
    },
    {
        id: 2,
        iconsSrc: (
            <IoLogoLinkedin className="text-textBase text-3xl cursor-pointer" />
        ),
        name: "LinkedIn",
        link: "#"
    },
    {
        id: 3,
        iconsSrc: (
            <IoLogoDiscord className="text-textBase text-3xl cursor-pointer" />
        ),
        name: "Discord",
        link: "#"
    }
];