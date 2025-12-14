import React from 'react'
import Card from "./components/card.jsx";
const App = () => {
    const arr = [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png",
            company: "Google",
            price: "25",
            days: "1",
            job_type: "Full Time",
            experience: "Senior Level",
            role: "Senior Flutter Developer",
            location: "Lahore, Pakistan"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/480px-Microsoft_logo.svg.png",
            company: "Microsoft",
            price: "22",
            days: "3",
            job_type: "Full Time",
            experience: "Mid Level",
            role: "Cloud Architect",
            location: "Islamabad, Pakistan"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png",
            company: "Netflix",
            price: "18",
            days: "2",
            job_type: "Remote",
            experience: "Entry Level",
            role: "Content Strategist",
            location: "Karachi, Pakistan"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/480px-Spotify_logo_without_text.svg.png",
            company: "Spotify",
            price: "30",
            days: "5",
            job_type: "Contract",
            experience: "Expert Level",
            role: "Data Scientist",
            location: "Faisalabad, Pakistan"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/480px-Tesla_Motors.svg.png",
            company: "Tesla",
            price: "28",
            days: "4",
            job_type: "Full Time",
            experience: "Mid Level",
            role: "Electrical Engineer",
            location: "Sialkot, Pakistan"
        },
        {
            image: "https://imgs.search.brave.com/chlIeUScfLZKARWwVdITvDVCv-3kuR8M4ACVwjoQp94/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85LzkwL0Fk/b2JlX0NvcnBvcmF0/ZV93b3JkbWFyay5z/dmcvMjUwcHgtQWRv/YmVfQ29ycG9yYXRl/X3dvcmRtYXJrLnN2/Zy5wbmc",
            company: "Adobe",
            price: "20",
            days: "1",
            job_type: "Part Time",
            experience: "Senior Level",
            role: "UX Researcher",
            location: "Rawalpindi, Pakistan"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/X_icon_2.svg/480px-X_icon_2.svg.png",
            company: "X (Twitter)",
            price: "24",
            days: "6",
            job_type: "Remote",
            experience: "Mid Level",
            role: "React Developer",
            location: "Peshawar, Pakistan"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png",
            company: "LinkedIn",
            price: "15",
            days: "2",
            job_type: "Internship",
            experience: "Entry Level",
            role: "Marketing Lead",
            location: "Multan, Pakistan"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/480px-Airbnb_Logo_B%C3%A9lo.svg.png",
            company: "Airbnb",
            price: "19",
            days: "7",
            job_type: "Full Time",
            experience: "Entry Level",
            role: "Customer Success",
            location: "Gujranwala, Pakistan"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/480px-Uber_logo_2018.png",
            company: "Uber",
            price: "17",
            days: "3",
            job_type: "Part Time",
            experience: "Mid Level",
            role: "Operations Manager",
            location: "Quetta, Pakistan"
        }
    ];
            return (
            <div className={"parent"}>
                {arr.map(function (elem) {
                    return <Card
                        company={elem.company}
                        image={elem.image}
                        price={elem.price}
                        days={elem.days}
                        jobType={elem.job_type}
                        location={elem.location}
                        role={elem.role}
                        experience={elem.experience}/>
                })}
            </div>
    )
}
export default App



