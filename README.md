# ** World Of WorkCraft **

World Of WorkCraft is intended as parody, satire, and humor and is for entertainment purposes only. Any legitimate confusion with World of WarCraft is unintentional. World of WarCraft is a trademark or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries. Please don't sue us. Please.

## Install (One time only)

1. Install Node
2. Install Yeoman
```
sudo npm install -g yo
sudo npm install -g bower
sudo npm install -g grunt-cli
```
3. In this project root, run:
```
npm install
bower install
```
4. Proceed to Build and development

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

# ** World Of WorkCraft **

## *** Gamification of Professional Development ***

### **Goal**

<span id="h.x2k3838n6dnl" class="anchor"></span>Our mind and taking care of it.

<span id="h.gjdgxs" class="anchor"></span>Active U is for our
professional learning. We need to track what we're learning every day:
books, articles, courses, conferences. Gamification of professional
learning like earning badges, points, goals, and other incentives will
make it fun and motivational.

<span id="h.30j0zll" class="anchor"></span>**Team**

| Name           | Department    | Role               |
| -------------- |:-------------:| :------------------|
|  Leif Myklebust|   MSIS        | Tech Lead & Pitcher|
|  Andy Vella    |   MSIS        | Project Manager / BA Stuff |
|  Bryan Martyn  |   MSIS        | General Helper Dude |
|  Amanda Wright |   MSIS        | UX Stuff / Bad Graphics |
|  Dave Harlan   |   ITS         |      Developer |
|  Steve Coffman |   MSIS        |      Developer |
|  Ed Sucarski   |   MSIS        |      Developer |
|  Greg Graziloi |   MSIS        |      Developer |
|  Geoff Holden  |   MSIS        |      Developer |
|  Bruce Meier   |   MSIS        |      Developer |
|  Misty Periard |   MSIS        |      Developer |
|  Scott Boomhour|   MSIS        |      Developer |
|  Yuying Tian   |   MSIS        |      Developer |
|  Willy Wangsa  |   Dentistry   |    Developer |
|  John Schultz  |   MSIS        |      Developer |

<span id="h.1fob9te" class="anchor"></span>**Show and tell**

Show us what you did! Tell us why you did it!

### The MPG (Minimal Playable Game)

We identified the minimal playable game through analysis. We determined
the least amount we would need to be able to do is:

-   Log in

-   Sign up for a challenge

-   Log achievements towards your challenge

-   See a leaderboard

-   View your history

Other potential activities that we determined would be nice are:

-   Creating new challenges

-   Picking a team and Frivals (Friends & Rivals)

-   Sharing / Social Networking

-   Badges / recognition / a prize system

-   a “nag” system for reminding you

-   Winning / Losing against others and rematches

Then we talked about how you work make progress towards your challenge.
We picked three categories of developments and assigned points to those
categories.

-   Learn - 5 points - I read a book or I took a course

-   Apply - 10 points - I created a web application

-   Teach - 20 points - I presented at a conference

### The UX

We created stories and
[*wireframes*](https://www.lucidchart.com/documents/view/bac267ff-f78a-419a-9d8f-4df4b6b63ae3)
and graphical elements to guide development.

Check out our logo:

![](media/image01.png)

Graphical Elements source:

Logo Background provided by Ruledragon
[http://www.ac-web.org/forums/showthread.php?68473-World-of-(blank)-cataclysm-template](http://www.ac-web.org/forums/showthread.php?68473-World-of-\(blank\)-cataclysm-template)

Logo Font is LifeCraft by Eliot Truelove
[*http://fontmeme.com/world-of-warcraft-font/*](http://fontmeme.com/world-of-warcraft-font/)

Avatars by [Hopstarter (Jojo
Mendoza](http://www.iconarchive.com/artist/hopstarter.html)[)](http://www.iconarchive.com/artist/hopstarter.html)

### **The Technology (the fun part!)**

As part of this hack, we wanted to play with some technologies we don’t
all get to play with every day. We wanted to do something with NoSQL,
and we wanted to avoid using plain old JSPs to generate the UI. We
wanted to use RESTful web services, since they are still cool, too.

We started out by looking at what else is out there. We found the TinCan
API spec, and decided that it was a great match for our project. One of
the key parts of it are its statements, which are on the form
(actor)-(verb)-(object). We thought this sounded a lot like graphs,
which look something like (node)-(edge)-(node). So, we decided we would
use a graph database for our persistence, and went with Neo4j.

Spring Boot makes it super easy to create web services, so we went with
that. Also, Spring Data has a Neo4j piece that made it pretty easy to
hook up to a running Neo4j instance, so we did that.

For the UI, we were luckly enough to recruit a guy who knew AngularJS
really well, and also some of the other team members knew some, so we
were happy to use that.

We looked into seeing if we could interface with MBlem
([*http://www.mblem.umich.edu/*](http://www.mblem.umich.edu/)), but
found that there was too much bearucracy involved in setting ourselves
up as a badge provider. Nonetheless, it was an interesting diversion.

**Divide and conquer**

Since we recruited quite a few people to our team, we were able to split
up into 4 teams that worked in parallel: A data team, a web services
team, a UI team, and a design-the-game team. We sync’ed frequently, and
were able to have our first end-to-end fully integrated running
prototype by mid-afternoon.

<span id="h.3znysh7" class="anchor"></span>**Next Steps?**

After Hack Day is over, what do you plan on doing with it?

We think it would be sweet if we could implement the rest of the game --
frivals (the social aspect), fleshing out challenges, adding more
badges, assigning ratings/points to achievements so we can report on the
best ones, etc.

It was very interesting to learn about the TinCan API spec
([*http://tincanapi.com/*](http://tincanapi.com/)), and we think we
cound incorporate more of it into the game. We more time, we could
provide implementations of the actual spec. This would be a great
opportunity for collaboration with MSIS’s MLearning.

We learned about GradeCraft
([*https://www.gradecraft.com/*](https://www.gradecraft.com/)), a UM
project to gamify classroom learning. There must be tie-ins there that
are interesting and valuable. This would be a great opportunity for
collaboration with the School of Information.

We learned about UM’s MBlem and Mozilla’s Open Badge project. Being able
to create badges that could show up in your Mozilla Backpack would be
awesome. This would be a great opportunity for collaboration with UM’s
MLibrary.

The game could be used in professional development by anyone, not just
IT people. We could start by trying it out on IT staff, but from there,
the sky’s the limit.
