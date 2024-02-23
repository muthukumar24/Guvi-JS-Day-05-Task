// Create your own resume data in JSON format

let myResumeDetails = [{
    "basicDetails":
    {
        "name": "Muthukumar S",
        "email": "muthukumar24081999@gmail.com",
        "address":
        {
            "doorno": "No 1/120",
            "street": "South Street",
            "area": "Thalachangadu",
            "city": "Mayiladuthurai",
            "state": "Tamilnadu",
            "pincode": 609107
        }
    },
    "experience":
    {
        "company": "Tech Mahindra",
        "Role": "Software Engineer",
        "yearsofexperience": "One year"
    },
    "education":
    {
        "college":
        {
        "degree": "B.Tech - IT",
        "institue": "SKR Engineering College",
        "location": "Chennai"
        },
        "school":
        {
        "hsc": "Computer Science",
        "institue": "Kalaimahal Hr Sec School",
        "location": "Akkur"  
        }
    },
    "skills":
    {
        "name": "Java Script",
        "level": "Beginner"
    },
    "interests":
    {
        "outdoorsports": "Cricket and Volleyball"
    }
}]
console.log(myResumeDetails)

// For the given JSON iterate over all for loops (for, for in, for of, for Each)
// For loop
console.log("for Loop")
for(let i=0; i < myResumeDetails.length; i++)
{
    console.log(myResumeDetails[i].basicDetails)
    console.log(myResumeDetails[i].experience)
    console.log(myResumeDetails[i].skills)
}  

// For each loop
console.log("for each Loop")
myResumeDetails.forEach((obj) => { 
    console.log(obj.basicDetails); 
    console.log(obj.skills);
});

// For in loop
console.log("for in Loop")
for(let keys in myResumeDetails)
{
    console.log(myResumeDetails[keys].interests)
}

// For of loop
console.log("for of Loop")
for (let x of myResumeDetails) {
 console.log(x.education)
 console.log(x.skills)
}
