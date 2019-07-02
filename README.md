# WoW Comparator Server
This is the basic Node back end for the WoW Comparator

You can visit the website at https://wow-comparator.com

# Stack used
The website is build using MongoDB, Exrpess, Vue, and Node.

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

Within the route, a GET request is made to a Blizzard endpoint to retrive the token. However, the endpoint requires a CLIENT_ID and a CLIENT_SECRET from Blizzard. To get those, go to https://develop.battle.net/access, register or login, and requests a new CLIENT_ID.

* **GET**
  * /api/comparator

## Admin Routes

All authentication and authorization are made using JWT tokens. 

* **POST** 
  * /api/admin/register/
  ```javascript
  {
    "name": String
    "password": String
    "email": String
  }
  ```
  * /api/admin/login
  ```javascript
  {
    "email": String
    "password": String 
  }
  ```
  * /api/admin/logout
  * /api/admin/logout-all
  ```javascript
  {
    headers: {Authorization: Bearer token}
  }
  ```


* **GET** 
  * /api/admin/profile
  ```javascript
  {
    headers: {Authorization: Bearer token}
  }
  ```

## Post Routes

* **POST** 
  * /api/create-post
  ```javascript
  {
    "title": String
    "subtitle": String
    "blocks": Mixed
  }, {
    headers: {Authorization: Bearer token}
  }
  ```

* **DELETE** 
  * /api/post/:id
  ```javascript
  {
    headers: {Authorization: Bearer token}
  }
  ```

* **GET** 
  * /api/posts
  * /api/post/:id/:slug

## Queries Routes
Get total queries made in the website when user succesfully finds a character

* **PATCH** 
  * /api/queries-made

* **GET** 
  * /api/queries-made

  ```javascript
  {
    headers: {Authorization: Bearer token}
  }
  ```

## WebsiteVisits Routes
Routes to track total website visits.

* **PATCH** 
  * /api/website-visists

* **GET** 
  * /api/website-visists
  ```javascript
  {
    headers: {Authorization: Bearer token}
  }
  ```

### Website Styles Routes
Change the jumbotron background image in the admin's settings view. The image (backgroundImage) needs to have a valid URL to work.

* **POST** 
  * /api/jumbotron-bg-image (**DEPECRATED** | One time use)
  ```javascript
  {
    "name": String
    "backgroundImage": String
  }, {
    headers: {Authorization: Bearer token}
  }
  ```

* **PATCH** 
  * /api/jumbotron-bg-image/:id
  ```javascript
  {
    "backgroundImage": String
  }, {
    headers: {Authorization: Bearer token}
  }
  ```

* **GET** 
  * /api/jumbotron-bg-image
