import React from 'react';

const tempSkills: any = {
    languages : [
        'java', 
        'php',
        'python',
        'javascript'
    ]
}

function Skills (props: any) {
    return (
        <h1>Skills component is work in progress</h1>
    );
}
//     return (
//         <div>
//             {tempSkills.languages.map ((language : any, index: number) => {
//                return (<h1 key={language}>
//                    {language}
//                </h1>)
//             })}
//         </div>
//     );


export default Skills;