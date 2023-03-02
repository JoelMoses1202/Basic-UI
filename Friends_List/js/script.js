//Acess Outer Container
const container = document.querySelector(".container");
const main_fragment = document.createDocumentFragment();


friend.forEach((element) => {
  //Create Inner Container
  let inner_container = document.createElement("div");
  inner_container.setAttribute("class", "inner-container");
  //Create Pic class circular div for image
  let picture = document.createElement("div");
  picture.setAttribute("class", "picture");
  //Create Description class
  let desc = document.createElement("div");
  desc.setAttribute("class", "description");
  //Create Name Class
  let full_name = document.createElement("div");
  full_name.setAttribute("class", "name");
  //Storing in first name and last name in name tag
  full_name.innerText = element.first_name + " " + element.last_name;
  // Create email class
  let email = document.createElement("div");
  email.setAttribute("class", "email");
  //Storing email value from object array
  email.innerText = element.email;
  //Create Image Tag
  let img = document.createElement("img");
  //Changing source for image tag
  img.src = element.img;
  picture.append(img);
  inner_container.append(picture);
  desc.append(full_name);
  desc.append(email);
  inner_container.append(desc);
  main_fragment.append(inner_container);
});
container.append(main_fragment);
