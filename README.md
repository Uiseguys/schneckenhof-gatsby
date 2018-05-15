# schneckenhof-gatsby

Gatsby frontend of vineyard "Schneckenhof"

Roadmap:

* convert to Gatsby
* move static JSON products and contents to Loopback project and wire up

## Deploy

We suppose you use netlify.com .
Please create a site with git branch and config deploy settings like following:

* add develop branch
  ![enter image description here](https://github.com/Uiseguys/schneckenhof-gatsby/blob/master/screenshots/2018-05-15_1146.png?raw=true)

* add build hooks
  ![enter image description here](https://github.com/Uiseguys/schneckenhof-gatsby/blob/master/screenshots/2018-05-15_1148.png?raw=true)

* add outgoing hooks
  You must add outgoing web hooks(deploy started, deploy succedded and deploy failed) to track build progress.
  The outgoing webhook url will be https://[schneckenhof-api url]/api/netlify-hooks
  ex: https://dev-schneckenhof-api.herokuapp.com/api/netlify-hooks
  ![enter image description here](https://github.com/Uiseguys/schneckenhof-gatsby/blob/master/screenshots/2018-05-15_1858.png?raw=true)
