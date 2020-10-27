[![DOI](https://zenodo.org/badge/301032066.svg)](https://zenodo.org/badge/latestdoi/301032066)
[![Build Status](https://travis-ci.org/ultraultimated/savitar.svg?branch=master)](https://travis-ci.org/ultraultimated/savitar)

# Savitar - A user-friendly jobs filter extension for LinkedIn [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Do%20you%20plan%20to%20improve%20your%20job%20searches%20on%20LinkedIn%3F%20Look%20no%20further.%20Savitar%20is%20the%20right%20extension%20for%20the%20job.%20Use%20it!%20Tweet%20it!%20Enjoy%20it!%20&hashtags=LinkedIn%20feature%20recommendations%20%20&url=https%3A%2F%2Fgithub.com%2Fpushkardravid%2Fsavitar%2F%20)

<p align="center">
<img src = "https://img.shields.io/github/license/ultraultimated/savitar">
<img src = "https://img.shields.io/github/issues-raw/ultraultimated/savitar">
<img src = "https://img.shields.io/github/issues-closed-raw/ultraultimated/savitar">
<img src = "https://img.shields.io/github/issues-pr/ultraultimated/savitar">
<img src = "https://img.shields.io/github/last-commit/ultraultimated/savitar">
<img src = "https://img.shields.io/github/release-date/ultraultimated/savitar">
<img src = "https://img.shields.io/youtube/views/aRedmJN3bUc?style=social">
<img src = "https://img.shields.io/github/contributors/ultraultimated/savitar">
</p>

---

We all know, how challenging it is to find the job that meets all your expectations and requirements. LinkedIn is one of the largest job portals which connects job seekers to recruiters throughout the globe. There are innumerable jobs in various industries, but in order to find the job based on an individual's requisites, it obligates the need for one, to make seperate searches. In order to identify and tag the specific requirements for targeted searches, we bring to you **Savitar, a Chrome Extension** that helps you summarize a linkedin job posting so you dont have to spend your time reading through job descriptions that may not be relevant to you!


<a id="raw-url" href="https://raw.githubusercontent.com/ultraultimated/savitar/master/downloads/savitar.crx">Download Savitar</a>
---

## Table of contents
- [Project Video](#project-video)
- [Project Installation](#project-installation)
- [Project Stages](#project-stages)
- [License](#license)

# Project Video

[![Savitar pitch](https://img.youtube.com/vi/U0bdEmej0_s/0.jpg)](https://youtu.be/U0bdEmej0_s)

# Project Installation
## Using .crx File
* Download the extension using the link provided above.
* Open the extensions tabe in Google Chrome and drag the extension in it to install.

## Unpacked Version 
* Clone the github repository.
* Open the extension tab and enable the developer mode using toggle button.
* Click on 'Load Unpacked Extension'  and select the root directory of extension.   

## How to setup locally
* clone the github repository.
* ```cd Savitar```
* Run ```npm install```
* Run ```npm run-script build``` to package the application

## To generate Automated Documentation
* Run ```npm run-script document```

## To run test cases 
* Run ```npm test```

## To check for lint errors 
* Run ```npm run-script lint```

# Project Stages

## Part 1 Overview
* Completed integrating the Chrome extension with LinkedIn.
* Temporary filters put in place based on candidate requirements which highlight the presence of the required job components. 

## Part 2 Overview 
* Completed integrating features such as "Location", "Years of Experience" by parsing and extracting the fields from job description.
* Integrated the feature of 'Skills' using Named Entity Recognition.
* Represented the new features as badges in the job posting description. 
.

## Part 3 Requirements
* Incorporating notification based services for jobs searched by the candidate and setting triggers for job alerts. 
* Fulfill all requirements related to deployment of the extension to Chrome store.
* Expanding the scope of the project to other portals such as Indeed, Monster.com etc. for the best possible user experience and time saving. 
* Integrate more features such as GPA Required, Eligibility criteria, Personalized job profile etc.

## License
[MIT License](https://github.com/ultraultimated/savitar/blob/master/LICENSE.md)
