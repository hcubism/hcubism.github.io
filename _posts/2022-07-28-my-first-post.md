---
layout: post
author: hannah
title: Welcome to my Github Page
date: 2022-07-28 15:00:00
---
For something like... oh... 15 years now, I had a personal blog running on Wordpress. It worked all right, it did what I wanted, which was "add thoughts and publish".

Even back then, Wordpress was starting to become a Swiss Army knife of a CMS. But like any Swiss Army knife (that I've encountered, at least), the actual cutting blade was dull. I updated Wordpress a couple months ago and could no longer figure out how to write a post with the new Block Editor feature, and my old pages and posts weren't rendering properly when I wanted to edit them.

I just want a good simple chef knife to cut my fruits, veggies, proteins, whatever. I just want a good simple blogging platform to spill my thoughts on. So when I was laid off from Humble Bundle, I used my new-found expanse of time to give my blog a good maintenance session, and see what's out there in the world of blogging.

## Learning React.js and Frontity
At the same time, I started learning React.js, since I never had the chance to use it at Humble.

This was when I got my "[pineapple pen](https://www.youtube.com/watch?v=NfuiB52K7X8)"[^1] moment and looked for a way to use React with Wordpress. Frontity seemed to fit the bill. It took a while to get Frontity going, but after about two months, I managed to have my blog written in React and running on Vercel, pulling in data from my Wordpress site via their API. Interesting!

However, Frontity is no longer in active development. Even though it was acquired by Automattic in August 2021, its future remains uncertain.

I dislike the idea of using a platform that's no longer actively maintained, so I started looking for alternatives.

## Discovering Jekyll and Github Pages
Jekyll proudly touts its place as Github Pages' static site generator of choice, which intrigued me. I already had a Github account but not a Github Page, so why not just put my blog there? No need to fiddle with a database, PHPAdmin (ugh), Wordpress's custom post types, etc. It sounded like a dream.

For the most part, Jekyll + Github Pages is quite capable - for most people's needs. It's only when one wishes to go a little fancier with theming or adding plugins that it gets a little tricky.

## Fiddling with Tailwind CSS and writing my own how-to-article
Adding Tailwind CSS to Jekyll proved to be another week of headaches. In fact, I got so frustrated with the outdated how-to articles I found online, [I wrote my own]({% post_url 2022-07-28-setting-up-jekyll-tailwindcss-githubpages %}). I made sure to call out my sources (credit your sources, yo!), as well as point out what has changed since the sources' creation. As things change, I'll update the article, and will move it to some kind of collection so it's easily searchable as, well, not-just-another-blog-post.

## Future plans
So far, Jekyll is fine for my blogging needs. However, I still wanted a React-powered blog, and so far it looks like Jekyll and React doesn't play very well. Very likely I'll look at GatsbyJS to fulfill both my desire to keep learning and using React.js, with the benefit of static site generation.

## Anyways, welcome!

## Footnotes
[^1]: Thank me later.
