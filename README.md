# Placement Season - MIT Manipal Batch of 2022
With placement season approaching, the students of MIT, Manipal were having to rely on Whatsapp messages for updates on companies, and the offers provided. This naturally led to multiple occasions where I almost missed out on filling the application forms for a few companies, and had to swipe up through a ton of messages to find the links.


This motivated me to make a simple web-app, that displays the list of companies that have come so far, or will be coming soon. 

**The details provided include:**
1) Company Name
2) CTC 
3) Role Description
4) Dates to fill application forms and OT dates
5) Links to apply for the company

I made use of Node.js and ExpressJS for the backend, and simple HTML, CSS and JS for the front end. The web-app was deployed on Heroku.

[Notion](https://www.notion.so/) is a new editor that blends notes, tasks, wikis in one app, and helps me remain organized. I made use of the [Notion API](https://developers.notion.com/reference) to utilize my Notion calendar as a date source for the job updates. This makes life very easy. All I need to do when a new job offer arrives is - open the Notion app on my phone, add an entry on the calendar with the required data, and voila! The website automatically fetches the now updated data.

You can access the web-app at **[Placements MIT Manipal](https://placement-updates-mit.herokuapp.com/).**

---
**Some Limitations include:**
1) No media queries implemented - might look bad on some screens
2) The data available so far is only for the Computer related departments
3) The website takes a little time to load because it is hosted on a free service - [Heroku](https://dashboard.heroku.com/).
