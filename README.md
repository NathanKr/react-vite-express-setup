<h2>Motivation</h2>
Setup react to work with a server proxy

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
</ul>

<h2>Limitation</h2>
i was not able to map "/" because then localhost:3000/ is used
