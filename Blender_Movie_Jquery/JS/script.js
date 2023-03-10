$(document).ready(function () {
  $.ajax({
    url: "https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0",
    type: "GET",
    success: function (video) {
     //VIDEO PLAYER SOURCE
      $("#video-player").attr("src",video.videoUrl);
 //TITLE
      $("h1").text(video.title);  

     //PARAGRAPH 
      $("p").text(video.description);

      const fragment = new DocumentFragment();
      const left_container = document.querySelector(".left-container");//LEFT CONTAINER

      $.each(video.comments, function (k, value) {
        
        const container = document.createElement("div");
        container.setAttribute("class", "comment-container");//COMMENT CONTAINER
        const picture = document.createElement("div");
        picture.setAttribute("class", "picture");
        const img = document.createElement("img");//IMAGE
        img.src = value.image;
        picture.appendChild(img);
        const com_desc = document.createElement("div");
        com_desc.setAttribute("class", "comment-description");//COMMENT DESCRIPTION
        const com_name = document.createElement("div");
        com_name.setAttribute("class", "name");//COMMENT NAME
        com_name.innerText = value.name;
        const com_comment = document.createElement("div");
        com_comment.setAttribute("class", "comment");//COMMENT
        com_comment.innerText = value.comment;
        com_desc.appendChild(com_name);
        com_desc.appendChild(com_comment);
        container.appendChild(picture);
        container.appendChild(com_desc);
        fragment.appendChild(container);
      });
      left_container.append(fragment);
    },
  });
});

$(document).ready(function () {
  $.ajax({
    url: "https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346",
    type: "GET",
    success: function (poster) {
      const fragment2 = new DocumentFragment();
      const right_container = document.querySelector(".right-container"); //RIGHT CONTAINER
      $.each(poster, function (k, value) {
        let project_img = document.createElement("div");
        project_img.setAttribute("class", "project-img");
        let img = document.createElement("img"); //IMAGE
        img.src = value.imageUrl;//IMAGE URL
        img.alt = value.title;//IMAGE ALTERNATIVE TEXT
        project_img.append(img);
        fragment2.append(project_img);
      });

      right_container.append(fragment2);
    },
  });
});
