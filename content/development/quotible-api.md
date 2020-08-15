---
title: "Quotible Api"
date: 2020-08-09T04:55:51-07:00
draft: false
isPost: true
categories: ["project", "development", "api"]
tags: ["node"]
featured_img: "./charas-group.png"
excerpt: "A self contained node api"
type: posts
---

# Quotible Express API - Part One

## What is this? 

This is walk through of end to end building of an Express api deployed to Heroku hooked up to a React Hooks frontend and a Google Chrome extension. All of the components will be their own projects, meaning they will have their own repositories, deployment nodes, etc..

### Why build this? 

As I continue to build, I find that much of the data, images and content I am creating is reusable (shocker..) but the hitch here and I believe the underpinning of many of the technologies we see today are attempts to create efficient access to said data and accompanying user interfaces are at there root data visualizers and manipulators. 

Given this, I have been leaning heavily into an API first approach to production and necessarily a publicly available and documented API. Up to this point I have been primarily focused on the challenges associated with the frontend and using backend technologies as a means to an end. I decided to build Quatible starting with the API as a self contained application this meant it's own repo, deployment and I used [Insomnia](https://insomnia.rest/) to test the endpoints. 
