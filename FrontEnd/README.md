# Project 3 of Openclassrooms dev web training


## About

This project is a portfolio of a **photograph designer**
implemented from [figma design](https://www.figma.com/design/kfKHknHySoTibZfdolGAX6/Sophie-Bluel---Desktop?node-id=2-248&node-type=frame&t=RRGiqkWeGkkOd8Mf-0)

> The next of this file explain the key points of javascript application this project.

## Javascript structure

Javascript application has been develop from scratch with [javascript module system](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)


### Structure Javascript

```bash
- /js
  - index.js
  - login.js
  - /modules
    - /actions
    - /context
    - /helpers
    - /implement
    - /skeleton
    - api.js
    - helper.js
    - projects-filter.js
```

The `/js` folder contains two entries points `index.js` and `login.js`
this is respective entris point of `index.html` page and `login.html` page.
the `/modules` folder contains all code use in javascript application.
The sub-folders (`/actions`, `/context`, `/implement`, `/skeleton`) contains
list of files that comun roles.
All applications is write with `functional paradigm` ([first class function](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)).

The others files in the root has not place in any sub-folders.

### Roles sub-folders of modules

All sub-folders (`/actions`, `/context`, `/implement`, `/skeleton`) re-group
files with specific roles.

#### /actions
All files in folders `/actions` are callback from user interface events.
```
- close-modal.js (event fired at close modal event)
- logout.js (event fired at user logout)
- remove-project.js (event fired at user remove a project from modal)
- drop-photo.js (event fired at user upload a photo from form create new project)
... ect ...
```

Each this file expose once function (callback event) with native event as argument.

eg for `close-modal.js`:
```js
export default function onCloseModal(e) {
  // ...
}
```

### /context

The `/context` folder implement user interface for `logged` or `unlogged` user.
This folder has a file named `toggle-logged.js` that expose once function:

```js
export default function toggleLogged() {
  // ...
}
```

this function **verify** if **user is logged** and **verify if user interface is currently implemented as logged**
and apply update if needed.
The update user interface is apply with **toggle** on `class` attribute (**hide**).
This is css that reactive to this class with a apply `display:none;` for class **hide**
This some lines of toggleLogged function show this:

```js
updateProjectContent.classList.toggle("hide")
filtersContainer.classList.toggle("hide")
bannerEditMode.classList.toggle("hide")
```
Elements has been show/hide with `toggle` class `hide`

### /skeleton

The `/skeleton` folder contains files that create dynamic elements.
Some projects, thumbnail projects (mini project for modal view), buttons filter.
Each file expose once function `create{element-name}Skeleton(options);`
```bash
- create-category-options-skeleton.js
- create-filter-skeleton.js
- create-project-skeleton.js
- create-thumnail-project-skeleton.js
```

For e.g `create-filte-skeleton.js` expose:
```js
/**
 * Model skeleton button filter list 
 * 
 *  <li>
 *    <button type="button">{categoryName}</button>
 *  </li>
 */

/**
 * 
 * @param {string} categoryName
 * @return HTMLLiElement 
 */
export default function createFilterSkeleton(categoryName) {
  // ...
}
```
that function create only one button by call, and return the button created.

### /implement

The implement folder, contains code that insert dynamic elements in document.
This folder call API for fetch data, and use functions of `/skeletons` for 
create list of elements and finally insert list elements in the document.

Can see define of `implement-projects.js`

```js
export default async function implementProjects() {

  const works = await API.works()

  const containerProject = document.querySelector("#portfolio .gallery")

  // clear content if called for upgrade UI
  containerProject.innerHTML = ""

  works.forEach(work => {
    
    const workSkeleton = createProjectSkeleton(work)
    workSkeleton.setAttribute(ATTRIBUTE_CATEGORY_ID, work.category.id)
    containerProject.appendChild(workSkeleton)

  });
}
```

first line fetch data from server, and select container for all project.
and create a **skeleton project** for each project fetched from server.
The create skeleton project is effectuate with a call to function **createProjectSkeleton**
that provide of folders `/skeleton`.