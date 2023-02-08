import Card from "./Components/Card/Card";

function App() {

    const url = 'https://assets.ithillel.ua/images/blog/cover/_transform_blogCard_2x/Hillel-Blog-BusinessAnalysis.jpg'

    return (
        <div className="App">
            <Card img={url} title="UX Design : How To Implement Usability Testing"
                  author="Alfredo Rhiel Madsen" rating={4.5} students='500 students' duration='1h 30m' modules='5 Modules' level="Beginner"/>
            <Card img={url} title="FrontEnd Advanced : How To Push Maximum From React"
                  author="Vladyslav Prodan" rating={5.0} students='950 students' duration='2h 30m' modules='30 Modules' level="Master"/>
            <Card img={url} title="Dev Mentorship : How To Assist Efficiently"
                  author="Vadym Hlushko" rating={5.0} students='750 students' duration='2h 00m' modules='10 Modules' level="Intermediate"/>
        </div>
    );
}

export default App;