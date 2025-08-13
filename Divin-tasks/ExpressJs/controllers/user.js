


const user = (req , res)=>{


const users = [
    { 
        id: 1, 
        name: "Aarav Mehta", 
        age: 28, 
        city: "Bengaluru", 
        email: "aarav.mehta@example.com", 
        phone: "+91 9876543210", 
        country: "India",
        skills: ["JavaScript", "Node.js", "React"]
    },
    { 
        id: 2, 
        name: "Sara Khan", 
        age: 26, 
        city: "Hyderabad", 
        email: "sara.khan@example.com", 
        phone: "+91 9123456780", 
        country: "India",
        skills: ["UI/UX Design", "Figma", "Photoshop"]
    },
    { 
        id: 3, 
        name: "John Miller", 
        age: 30, 
        city: "New York", 
        email: "john.miller@example.com", 
        phone: "+1 202-555-0198", 
        country: "USA",
        skills: ["Python", "Django", "Machine Learning"]
    },
    { 
        id: 4, 
        name: "Emily Watson", 
        age: 27, 
        city: "London", 
        email: "emily.watson@example.com", 
        phone: "+44 20 7946 0958", 
        country: "UK",
        skills: ["Java", "Spring Boot", "AWS"]
    },
    { 
        id: 5, 
        name: "Kenji Tanaka", 
        age: 32, 
        city: "Tokyo", 
        email: "kenji.tanaka@example.com", 
        phone: "+81 3-1234-5678", 
        country: "Japan",
        skills: ["Go", "Kubernetes", "Cloud Architecture"]
    }
];

    res.json(users);
}


module.exports = {user};