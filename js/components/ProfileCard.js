export default function ProfileCard(user) {
    // *** *** *** Variables *** *** ***
    const IMG_SRC = "./images/";

    const $template = document.getElementById("profile-card").content,
        $clone = document.importNode($template, true),
        $profilePicture = $clone.querySelector(".profile-picture"),
        $name = $clone.querySelector(".name"),
        $age = $clone.querySelector(".age"),
        $location = $clone.querySelector(".location"),
        $followers = $clone.querySelector(".followers"),
        $likes = $clone.querySelector(".likes"),
        $photos = $clone.querySelector(".photos");

    // *** *** *** Funciones *** *** ***
    const rounding = num => (num / 1000) + "K";

    // *** *** *** Ejecución *** *** ***
    $profilePicture.src = IMG_SRC + user.profilePicture;
    $profilePicture.alt = user.name;
    $name.textContent = user.name;
    $age.textContent = user.age;
    $location.textContent = user.location;
    $followers.textContent = rounding(user.followers);
    $likes.textContent = rounding(user.likes);
    $photos.textContent = rounding(user.photos);
    return $clone;
};
