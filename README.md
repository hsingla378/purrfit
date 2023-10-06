# Purrfit - The Discord Bot for Health-Conscious Gamers

![Purrfit Logo](https://purrfit-bot.vercel.app/purrfit_logo.png)

[Live Website Link](https://purrfit-bot.vercel.app/)

[Discord Bot Link](https://discord.com/oauth2/authorize?client_id=1149460240027365427&permissions=8&scope=bot%20applications.commands)

## Table of Contents

- [Introduction](#introduction)
- [Background](#background)
- [Problem Space](#problem-space)
- [Product Statement](#product-statement)
- [Target Users](#target-users)
- [Solution Space](#solution-space)
- [Main Features (Minimum Viable Product)](#main-features-minimum-viable-product)
- [Stretch Goals (Next Phase)](#stretch-goals-next-phase)
- [Product Design](#product-design)
- [Product Implementation](#product-implementation)
- [Technical Challenges](#technical-challenges)
- [Future Plans](#future-plans)
- [Learnings](#learnings)

## Introduction

Purrfit is a Discord bot designed to cater to the health-conscious gaming community. It serves as a dynamic reminder system integrated seamlessly into the gaming experience. By employing customizable reminders, activity tracking, and motivational guidance, this bot empowers gamers to strike an optimal balance between their gaming engagements and physical well-being.

## Background

Discord is a widely-used communication platform for gamers, providing free voice and text chat across desktop, mobile, and web. Discord bots automate tasks and provide information, and Purrfit aims to address the physical health concerns of gamers who spend long hours gaming.

## Problem Space

### Problem Background

- About 60% of gamers play games daily or several times a week, with sessions lasting over 2 hours.
- Players are 46% more concerned about their physical than mental health.
- Main concerns include poor posture, visual and physical discomfort.
- Major barriers include time constraints, low awareness, and lack of motivation.

Given these findings, there's a clear need for solutions like Purrfit to promote healthy habits among gamers.

## Product Statement

**How might we motivate gamers to stay active while gaming, fostering a healthy gaming lifestyle?**

## Target Users

Our target audience is gamers using Discord to chat across platforms. Initially, our MVP is for users in servers with our bot integrated. As we grow, we plan to launch our own gaming server.

## Solution Space

### Proposed Solution

Purrfit is a Discord bot for health-conscious gamers that blends reminders, activity tracking, and motivation to balance gaming and well-being seamlessly. Unlike competitors, we seamlessly track playtime, educate on gaming's physical health impacts, and guide players through diverse exercises.

### Main Features (Minimum Viable Product)

- Goal Setting: Purrfit lets users set and personalize health goals, such as posture, hydration, or taking eye breaks.
- Customizable Frequency: Adjust the frequency of health reminders based on personal preferences.
- Activity Reminders: Via a Discord bot, Purrfit sends health tips, short exercise prompts, and benefits of staying active.
- Progress Tracking: Users can view their exercise data through visual graphs, track achievements, and earn badges based on their workout dedication.
- Online Platform: Beyond Discord, Purrfit offers a website with a dashboard for deeper engagement and bot interaction.

### Stretch Goals (Next Phase)

- Reward System: Earn points by achieving goals and engaging with the bot. A gamified way to promote healthier habits.
- Customizable Dashboard: Display personal preferences and data with customizable widgets for an enhanced user experience.
- Private Server: Encourage community interaction and support through direct communication.
- AI-Communication: Personalized interactions through AI, including chatbots for queries and tips, and tailored game activity recommendations.

Purrfit provides a complete solution for a balanced gaming lifestyle, addressing the importance of physical health in the gaming community.

## Product Design

### Lo-fidelity

[Lo-fidelity Design](https://www.figma.com/file/QfJ9cMRJ6go0DiKknwoCv3/Purrfit-Design?type=design&node-id=0-1&mode=design&t=qciFeabVBWZtfCFm-0)

### Hi-fidelity

[Hi-fidelity Design](https://www.figma.com/file/QfJ9cMRJ6go0DiKknwoCv3/Purrfit-Design?type=design&node-id=135-274&mode=design&t=uygCMbQ6RaOnQ6sZ-0)

## Product Implementation

### Hosted Platform

- Frontend: Vercel
- Backend: Render
- Bot: TBD

### Tech Stack Used

- Database: MongoDB
- Backend: Express
- Frontend: React
- Bot: Discord.js
- Package Manager: Node.js

### Technical Challenges

- Frontend development faced a challenge when working with graphs, a new task for the team.
- The discovery of Chart.js, a user-friendly library, simplified graph creation, dispelling the misconception that it was difficult.

### Scaling Challenges

- The app encounters scalability challenges due to its current hosting setup.
- Backend is hosted on Render, a free platform, while Discord operates in a Sandbox with limitations and unpredictability.
- Deploying on a more reliable platform like Google Cloud could become costly.

### Addressing Scaling Challenges

To overcome these scalability issues, our team is focusing on enhancing the app's value. We plan to introduce new and valuable features to both the bot and the website. Our goal is to entice users into subscribing to a premium service, which will help cover expenses and ensure the app runs smoothly.

### Key Takeaways

- Working as a team has been a valuable learning experience for us.
- We've come to appreciate the importance of meetings in the development process.
- Collaborating with a diverse team, including a product manager, product designer, backend developer, frontend engineer, and mentor, has taught us how to efficiently and swiftly create a high-quality product.

## Future Plans

- Enhancing Performance: We're enhancing our app speed and ironing out issues for smoother use.
- Rewards Ahead: Soon, earn cool rewards like game skins or vouchers just for using our app. Think of it as getting treats for healthy gaming!
- Step Tracker: We're integrating a step tracker via the Google Fit API, so you can monitor your activity as you game.
- Access Everywhere: View your progress from your computer or phone. We're turning our site into an app and securing a domain.
- Premium Perks: Upgrade for a nominal fee to unlock exclusive features.

In essence, we're boosting our app’s speed, offering rewards, tracking your steps, ensuring easy access, and introducing premium perks. And there's more to come!

## Learnings

### Product Manager Learnings (Jiaqian Yu)

- Led a cross-functional team to develop and launch a product from the ground up in just 7 weeks.
- Mastered the art of prioritizing crucial features to craft a minimum viable product.
- Adopted the Agile methodology to efficiently track the development progress.

### Designer Learnings (Mitchell Law)

- Gained insights into real-world design practices.
- Learned strategies for designing on new and unfamiliar platforms.
- Enhanced user experiences across two distinct platforms.
- Collaborated closely with developers, effectively communicating design visions to influence product execution.

### Developer Learnings (Himanshu Singla)

- Became proficient in developing visual graphics with Chart.js.
- Honed my skills in backend integration and implemented authentication mechanisms with Discord.
- Learned the significance of collaboration in simplifying tasks and boosting effectiveness in project work.
- Grasped the art of building top-notch projects by seamlessly merging concise code segments.

### Developers Learnings (Shubham Aggarwal)

- Delved into the workings of Discord Bots, understanding the intricacies of permissions and dependencies.
