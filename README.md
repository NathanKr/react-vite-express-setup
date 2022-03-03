<h2>Motivation</h2>
Setup react to work with a server (express in this repo) using proxy

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
</ul>

<h2>Run the project</h2>
invoke from the roor project to run the server and the client

```
npm start
```

<h2>Limitation</h2>
i was not able to map "/" because then localhost:3000/ is used
