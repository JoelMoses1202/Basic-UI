const video_play=document.querySelector("#video-player");
video_play.setAttribute("src",video.videoUrl);

const title=document.querySelector("h1");
title.innerText=video.title;

const description=document.querySelector("p");
description.innerText=video.description;

const fragment = new DocumentFragment();
const left_container=document.querySelector(".left-container");

video.comments.forEach(element => {
    const container=document.createElement("div");
    container.setAttribute("class","comment-container");
    const picture=document.createElement("div");
    picture.setAttribute("class","picture");
    const img=document.createElement("img");
    img.src=element.image;
    picture.appendChild(img);
    const com_desc=document.createElement("div");
    com_desc.setAttribute("class","comment-description");
    const com_name=document.createElement("div");
    com_name.setAttribute("class","name");
    com_name.innerText=element.name;
    const com_comment=document.createElement("div");
    com_comment.setAttribute("class","comment");
    com_comment.innerText=element.comment;
    com_desc.appendChild(com_name);
    com_desc.appendChild(com_comment);
    container.appendChild(picture);
    container.appendChild(com_desc);
    fragment.appendChild(container);

    
});

const fragment2 = new DocumentFragment();
const right_container=document.querySelector(".right-container");

left_container.append(fragment);

poster.forEach(element1 => {
    let project_img=document.createElement("div");
    project_img.setAttribute("class","project-img");
    let img=document.createElement("img");
    img.src=element1.imageUrl;
    img.alt=element1.title;
    project_img.append(img);
    fragment2.append(project_img);
    
});

right_container.append(fragment2);