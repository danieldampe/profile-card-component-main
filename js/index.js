import ProfileCard from "./components/ProfileCard.js";

// *** *** *** Variables *** *** ***
const $main = document.getElementById("main");

const users = [
    {
        name: "Victor Crest",
        age: 26,
        location: "London",
        profilePicture: "image-victor.jpg",
        followers: 80000,
        likes: 803000,
        photos: 1400,
    }
]

// *** *** *** Ejecución *** *** ***
document.addEventListener("DOMContentLoaded", () => {
    $main.append(ProfileCard(users[0]));    
});
