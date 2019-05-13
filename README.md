# WoW Comparator Server
This is the basic Node back end for the WoW Comparator

To install
```
git clone https://github.com/GabrielvonPlaten/WoW_Comparator_Server.git

cd WoW_Comparator_Server

npm / yarn install

nodemon app.js
```

# Routes
## Blizzard's access_token
The first route to fire when the website is loaded. This route will fetch an access_token from Blizzard to get access to almost* all their APIs

Within the route, a GET request is made to a Blizzard endpoint to retrive the token. However, the endpoint requires a **CLIENT_ID** and a CLIENT_SECRET from Blizzard. To get those, go to https://develop.battle.net/access, register or login, and requests a new **CLIENT_ID**.

* /api/comparator

## Admin Routes
* **POST:** /api/admin/register/

* **POST:** /api/admin/login

* **POST:** /api/admin/logout

* **POST:** /api/admin/logout-all

* **GET:** /api/admin/profile

## Post Routes

* **POST:** /api/create-post

* **DELETE:** /api/post/:id

* **GET:** /api/posts

* **GET:** /api/post/:id/:slug

## Queries Routes
Get total queries made in the website when user succesfully finds a character

* **PATCH:** /api/queries-made

* **GET:** /api/queries-made

## WebsiteVisits Routes
Routes to track total website visits.

* **PATCH:** /api/website-visists

* **GET:** /api/website-visists

### Website Styles Routes
Change the jumbotron background image in the admin's settings view. The image needs to have a valid URL to work.

* **POST:** /api/jumbotron-bg-image (**DEPECRATED** | One time use)

* **PATCH:** /api/jumbotron-bg-image/:id

* **GET:** /api/jumbotron-bg-image
