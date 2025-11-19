import React from 'react'

const UserProfile = () => {
    const UserProfile = [
      {
            Name: 'Nikhil',
            Age: 20,
            profession: 'Software Developer',
            Bio: 'Hy! I am Software Developer from India I love to Build Mobile Application and Websites',
            techStack:'JavaScript,TypeScript,Tailwind,React.js,ReactNative,Node.js'
        },
        {
            Name: 'Harsh',
            Age: 20,
            profession: 'Data Analyst',
            Bio: 'Hy! I am Data Analyst from India I love to Work with date and create Ai models from it',
            techStack:'Python,SQL,pyTorch,Pandas,Numpy'
        },
        {
            Name: 'inderjeet',
            Age: 20,
            profession: 'Electronics Engineer',
            bio: 'Hy! I am electronics Engineer from India I love to desgin, develop,test, and supervise the manufacturing of electroni devices',
            techStack:'CAD,ProblemSolving,Communication'
        },
        {
            Name: 'Vinay',
            Age: 21,
            profession: 'Hair stylist',
            bio:'Hy! I am hair stylist from India I love to style Hairs and give the person a new look'
        },
        {
            Name: 'Jitu',
            Age: 18,
            profession: 'student',
            bio:'Hy! My name is jitu from India. I am currently Pursuing my B.A from Delhi University'
        }

        
  ]
    return (
      <>
            <h1>UserProfile</h1>
            <div>
                {UserProfile.map((user,index) => (
                    <div style={{border:'1px solid',padding:'10px',display:'flexbox',margin:'10px',justifySelf:'start'}}>
                    <h1>Name:{user.Name}</h1>
                    <h2>Age;{user.Age}</h2>
                    <p>Bio:{user.bio}</p>
                    <p>TechStck{user.techStack}</p>
                </div>
                ))}
            </div>
      </>
  )
}

export default UserProfile