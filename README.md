# Dario Perez - Personal Bio Site :)
[![Netlify Status](https://api.netlify.com/api/v1/badges/339c4ae9-fc7f-41b4-9b49-2dab0a20eaba/deploy-status)](https://dp-personal-bio.netlify.app)

## [View Site](https://dp-personal-bio.netlify.app)

## Get Started:
```javascript
 $ git clone git@github.com:darioperez1415/dp-personal-bio-site.git
 $ cd dp-personal-bio-site
```

## About User
* This is a site a user can visit to learn more about my journey thus far as a web developer.The site deploys to a timeline of my work and education history on the Home Page. The user can aslo learn more about my journey in the About Me page, checkout the technologies in my tech stack and view past Projects. Finally the user can sumbit an email to me via the contact me form on the Contact page. 

## Features: 
#### **Admin CRUD**: 
* As the administrator of this site,I have access to that regular users do not through the use of private routes. I have full CRUD on the projects section. 
#### **Leave me a message**:
* Any users on my site can submit and email through the Contact Me from wether it is a potential employer or someone wishing to connect with me! 

## Technology Used:
* Javascript
* React
* Firebase
* Postman
* Emailjs
* Axios
* Reactstrap
* Styled Components
* Netlify

## Code Snippets:
```javascript
export default function EditProjectView() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getProjects().then((projectArray) => {
      if (isMounted) setProjects(projectArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);
```
## Screenshots:

<img width="954" alt="2021-11-22" src="https://user-images.githubusercontent.com/83309084/144142904-d2d39cdd-49fb-48c0-85f3-a71981ae3cfc.png">
<br/>
<img width="942" alt="2021-11-22 (1)" src="https://user-images.githubusercontent.com/83309084/144143075-6a0d4422-b927-430c-bc6a-58560d4a7c9f.png">
<br/>
<img width="952" alt="2021-11-22 (2)" src="https://user-images.githubusercontent.com/83309084/144143145-87389e40-cabd-4de2-8847-55a1450abc5f.png">
<br/>
<img width="937" alt="2021-11-22 (3)" src="https://user-images.githubusercontent.com/83309084/144143114-ca42aa27-9204-4cf5-92c6-9910d9a203c7.png">
<br/>
<img width="951" alt="2021-11-22 (4)" src="https://user-images.githubusercontent.com/83309084/144143097-51f5b2a8-db8a-4fe0-8111-c5625f02e311.png">
<br/>
<>
  <img src=${cat} alt="picture of a cat"/>
</>

## Contributors: [Dario Perez](https://github.com/darioperez1415)