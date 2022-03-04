<h2>Motivation</h2>
Setup react vite project to work with a server (express in this repo) using proxy

<h2>Setup</h2>
<ul>
<li>
Add the following to vite.config.js
Here /api/v1 is mapped to http://localhost:5000/ which is where the server resides

```
server: {
    proxy: {
      "/api/v1": "http://localhost:5000/",
    },
  },

```

</li>
<li>The react app uses /api/v1 as base url and the server base endpoint url is /api/v1</li>
<li>Using /api/v1 as base url is arbitrary. Notice however that it appears in 3 places : here in package.json, on the client side and on the server side</li>
</ul>

<h2>Installation</h2>
Perform the following from root directory , client directory and server directory

```
npm i

```


<h2>Run the project</h2>
Invoke from the root project to run the server and the client. This is done using concurrently

```
npm start
```

<h2>Limitation</h2>
i was not able to map "/" because then localhost:3000/ is used
