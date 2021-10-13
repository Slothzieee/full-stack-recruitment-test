# Implementation:

### Q) What libraries did you add to the frontend? What are they used for?

Axios to fetch the flights.json
Fontawesome to get an arrow-right svg icon

### Q) What's the command to start the application locally?

(Default) `npm start`

---

# General:

### Q) If you had more time, what further improvements or new features would you add?

Ideally I like to work with taillwindcss as a css framework

### Q) Which parts are you most proud of? And why?

Styling is probably what I am most proud of and the responsiveness of the app.
There is always margin for improvement, the could could have been cleaner and esier to read.

### Q) Which parts did you spend the most time with? What did you find most difficult?

I don't really like to nest a Array.map inside a Array.map and then use an Array.find.
The most difficult step for me was getting my head arrount a different solution that would allow me to avoid nesting "map"

### Q) How did you find the test overall? Did you have any issues or have difficulties completing?If you have any suggestions on how we can improve the test, we'd love to hear them.

I did find the test fun to do, it is always nice to fetch data and render it in the DOM with customized style.

Maybe, the test could have been a bit harder and more interesting to do if there was also a need of pagination ( eg: "show up to 5 results per page", and the JSON had 12 results ) or if there was a need to load more content while scrolling downwards.

Probably there is no need to keep an env strictly on node: 12.10.0 and npm: 6.10.3, maybe then to make the test a little "harder" a Dockerized version could have been required for this so that who doesn't want a node/npm manager on his machine could use a container instead.
