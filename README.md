<img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/github-banner.png">
<img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/bachelors-thesis-project.png">

# PeagePay — Electronic Toll Simulator Platform

> **Bachelor's Thesis Project** — University of Sciences and Technology Houari Boumediene (USTHB)  
> Faculty of Computer Science · Department SIQ · Specialty: ISIL  
> Presented by: **DEBBAL Lotfi** & **TEHAR Ahmed** · Supervised by: **Mme ABERBOUR Rima**  
> Defense date: 02/06/2024

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Context & Motivation](#2-context--motivation)
3. [Study of Existing Systems](#3-study-of-existing-systems)
   - [Types of Toll Systems](#31-types-of-toll-systems)
   - [Payment Methods](#32-payment-methods)
   - [Existing Toll Platforms Worldwide](#33-existing-toll-platforms-worldwide)
   - [Algeria's Toll Infrastructure](#34-algerias-toll-infrastructure)
4. [System Requirements & Specifications](#4-system-requirements--specifications)
   - [User Roles](#41-user-roles)
   - [Functional Requirements](#42-functional-requirements)
   - [Non-Functional Requirements](#43-non-functional-requirements)
5. [System Analysis — UML Diagrams](#5-system-analysis--uml-diagrams)
   - [Use Case Diagrams](#51-use-case-diagrams)
   - [Sequence Diagrams](#52-sequence-diagrams)
6. [System Design](#6-system-design)
   - [Class Diagram](#61-class-diagram)
   - [Relational Model](#62-relational-model)
   - [Entity-Relationship Diagram](#63-entity-relationship-diagram)
7. [Architecture](#7-architecture)
   - [3-Tier Architecture](#71-3-tier-architecture)
   - [Monorepo Structure](#72-monorepo-structure)
   - [General Architecture](#73-general-architecture)
   - [Deployment Diagram](#74-deployment-diagram)
8. [Hardware Simulation (Arduino)](#8-hardware-simulation-arduino)
9. [Technology Stack](#9-technology-stack)
   - [Languages](#91-languages)
   - [Tools](#92-tools)
   - [External APIs](#93-external-apis)
   - [Authentication](#94-authentication)
   - [Data Layer](#95-data-layer)
   - [Back-End](#96-back-end)
   - [Front-End](#97-front-end)
10. [Platform Applications — PeagePay](#10-platform-applications--peagepay)
    - [Mobile Application](#101-mobile-application-peagepay)
    - [Admin Authentication Page](#102-admin-authentication-page)
    - [General Administration Panel](#103-general-administration-panel)
    - [HR Administration Panel](#104-hr-administration-panel)
    - [Toll Administration Panel](#105-toll-administration-panel)
    - [Moderator Administration Panel](#106-moderator-administration-panel)
    - [Gate Admin Panel](#107-gate-admin-panel)
    - [Automatic Gate Applications](#108-automatic-gate-applications)
11. [Core Algorithms](#11-core-algorithms)
    - [Dynamic Pricing System](#111-dynamic-pricing-system)
    - [Toll Network Graph & Distance Calculation](#112-toll-network-graph--distance-calculation)
    - [Trip Fare Formula](#113-trip-fare-formula)
12. [Database Schema](#12-database-schema)
13. [Project Structure](#13-project-structure)
14. [Conclusion & Perspectives](#14-conclusion--perspectives)

---

## 1. Project Overview

**PeagePay** is a complete software simulation platform for managing electronic toll (télépéage) systems. It was designed in anticipation of Algeria's upcoming deployment of highway tolls on the East-West motorway, operated by _l'Algérienne des Autoroutes (ADA)_.

The platform models and simulates all real-world aspects of a modern toll system, including:

- **User-facing mobile app** for managing accounts, QR code identification, badge management, and online top-up
- **Multiple web admin panels** for global system management, HR role management, toll station management, and moderator functions
- **Desktop applications** for automated barrier control (ticket printer, RFID badge reader, QR code reader)
- **Hardware simulation** using an Arduino microcontroller circuit to physically simulate barrier opening/closing and RFID badge detection

---

## 2. Context & Motivation

A **toll** is a fee collection system for the use of roads, bridges, tunnels, or other transport infrastructure. Tolls are collected at specific checkpoints — highway barriers, bridge booths, or tunnel gates. Tariffs vary based on distance traveled, vehicle type, vehicle category, and time of day.

Traditional toll roads have significant drawbacks:

- Time lost stopping and paying
- High operational costs (up to ~⅓ of revenue in some cases)
- Queuing and traffic congestion

Automated toll systems address these issues by allowing rapid, often stop-free identification and automatic payment deduction.

**Algeria's situation:** The _Algérienne des Autoroutes_ (ADA) has begun implementing a highway toll system. However, it is essential to anticipate and plan for an electronic toll system (_télépéage_) that will optimize traffic flow. Since no such system currently exists in Algeria, this project proposes a full simulator to provide a detailed, complete vision of what a global toll management platform could look like.

---

## 3. Study of Existing Systems

### 3.1 Types of Toll Systems

Two main types of toll systems exist in terms of operation:

#### Open System Tolls

Drivers pay a **fixed price**, generally at the highway entrance, **regardless of distance traveled**.

| Advantages                                                 | Disadvantages                                                          |
| ---------------------------------------------------------- | ---------------------------------------------------------------------- |
| Simple to understand and use for occasional drivers        | Penalizes short-distance users who pay the same as long-distance users |
| Lower infrastructure costs (no booths at every entry/exit) | —                                                                      |

#### Closed System Tolls

Drivers are **charged based on the distance traveled** between their entry and exit points.

| Advantages                                          | Disadvantages                                                                  |
| --------------------------------------------------- | ------------------------------------------------------------------------------ |
| Fairer payment — tariff is proportional to distance | Higher infrastructure costs (electronic systems required at entries and exits) |
| —                                                   | Complexity for drivers (understanding billing, having a linked payment method) |

> **This project focuses on the closed system**, as it is the model being deployed in Algeria.

---

### 3.2 Payment Methods

#### 3.2.1 Cash Payment (Classical)

The user takes a printed ticket at the highway entry. At the exit toll, they present the ticket to the agent or machine, which scans it, calculates the amount due, and opens the barrier once payment is received.

| Advantages                                           | Disadvantages                                  |
| ---------------------------------------------------- | ---------------------------------------------- |
| Accessible to all — no card or digital access needed | Coins/bills can be counterfeited               |
| Simple and quick to implement                        | Risk of theft or aggression when handling cash |
| —                                                    | Causes longer queues — slow payment process    |
| —                                                    | Insufficient change can block payments         |
| —                                                    | Requires a full stop at the toll booth         |

#### 3.2.2 Bank Card Payment

Same process as cash but the user swipes their card at a machine equipped with a card reader.

| Advantages                           | Disadvantages                                         |
| ------------------------------------ | ----------------------------------------------------- |
| Faster and more convenient than cash | Bank transaction fees per payment                     |
| Reduces need for personnel           | Card data can be stolen if equipment is tampered with |
| —                                    | Still requires the user to stop                       |

#### 3.2.3 Mobile Application (QR Code / NFC)

At entry, the user uses their phone app to transmit their ID (via QR code or NFC). The system registers the entry and opens the barrier. At exit, the required amount is debited from their account and the barrier opens.

| Advantages                                      | Disadvantages                   |
| ----------------------------------------------- | ------------------------------- |
| More secure — banking data not directly exposed | Still requires the user to stop |
| Eliminates the need for printed tickets         | Requires carrying a smartphone  |
| Reduces the need for personnel                  | —                               |

#### 3.2.4 Electronic Toll Badge (RFID Transponder)

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img118.jpg">
  <br>
  <em>Peage Pay system interface</em>
</p>

The user attaches an RFID badge (transponder) to their windshield. At entry and exit, a receiver detects the badge, registers the trip, and automatically debits the account. Vehicle identification requires very little or even zero stopping time.

| Advantages                                           | Disadvantages            |
| ---------------------------------------------------- | ------------------------ |
| Fastest and most convenient — minimal or no stopping | High implementation cost |
| Reduces the need for personnel                       | —                        |

#### 3.2.5 License Plate Detection

Cameras and AI read the vehicle's license plate. The principle is similar to RFID toll badging, but antennas are replaced with cameras.

| Advantages                     | Disadvantages                                                          |
| ------------------------------ | ---------------------------------------------------------------------- |
| Fast — no stopping required    | High implementation cost                                               |
| Reduces the need for personnel | Difficulty reading plates in certain conditions (weather, dirt, angle) |

---

### 3.3 Existing Toll Platforms Worldwide

#### Bip&Go (France)

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img122.jpg">
  <br>
  <em>Bip&Go Homepage</em>
</p>

Bip&Go is a French toll service provider offering electronic toll solutions on highways and partner road networks. It provides an electronic badge for rapid identification, allowing drivers to pass without stopping. Its mobile application, launched in 2020, supports highways and car parks across France, Spain, Portugal, Italy, and certain Italian ferries, with full online subscription management.

#### Telepass (Italy)

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img126.jpg">
  <br>
  <em>Telepass Homepage</em>
</p>

Italy was the **first country in the world** to deploy a complete Electronic Toll Collection (ETC) system across all national highways in **1989**. The first prototype was developed between December 20, 1986 and April 17, 1987 by engineers from Sixcom SpA (Olivetti Group). Telepass introduced the concept of **interoperability** in 1990, interconnecting 24 different Italian highway operators so users pay only once at the end of their journey. It later became a European standard in 1996 and served as a model for deployments in Japan, the USA, Brazil, and more.

#### e-Toll (Poland)

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img127.jpg">
  <br>
  <em>e-Toll Homepage</em>
</p>

Poland's electronic toll system, **e-TOLL**, replaced the former ViaToll system on October 1, 2021. Unlike the French badge-based system, e-TOLL uses **satellite geolocation** to track vehicles on toll roads — no onboard unit (OBU) is required. Users manage their account via the e-TOLL mobile app.

#### Why These Systems Cannot Work in Algeria

- They require **monthly subscription fees**, which may be too costly for Algerian users
- They use payment methods (**Mastercard, Visa, PayPal**) not widely used in Algeria
- Their interfaces are **complex and not intuitive** for the local audience

---

### 3.4 Algeria's Toll Infrastructure

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img134.jpg">
  <br>
  <em>Global View of a Toll Center</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img139.jpg">
  <br>
  <em>Toll Booth Locations on the East-West Highway (Eastern Region)</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img140.jpg">
  <br>
  <em>Toll Booth Locations on the East-West Highway (Western Region)</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img147.jpg">
  <br>
  <em>A Toll Under Construction in Algeria</em>
</p>

Algeria's toll network is currently composed primarily of the **East-West Highway (Autoroute Est-Ouest)**, divided into two distinct toll networks for the Eastern and Western regions.

Toll booths fall into two categories:

- **Full-lane booths (Postes en pleine voie):** Located at the extremities of a network (start/end of a highway or network boundary) to ensure every user passes through them.
  <p align="center">
     <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img138.jpg">
     <br>
     <em>Example of a Full-Lane Toll Booth</em>
   </p>


- **Interchange booths (Postes sur échangeur):** Located on the sides of the highway at intermediate points. They avoid interrupting the main traffic flow and only charge users who pass through that specific booth.
  <p align="center">
     <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img146.jpg">
     <br>
     <em>Example of an Interchange Toll Booth</em>
   </p>

---

## 4. System Requirements & Specifications

### 4.1 User Roles

The platform defines **six distinct roles**, each with specific access and responsibilities:

| Role                      | Responsibilities                                                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **General Administrator** | Manages the entire system globally: highways, toll networks, toll booths, global tariffs, HR admin list, and subscription types |
| **HR Administrator**      | Manages lower-level administrator roles: toll admins, gate admins, and moderators                                               |
| **Toll Administrator**    | Manages a specific toll booth: automated barriers and local tariff rules                                                        |
| **Gate Administrator**    | Manages manual exit lanes (cash payment); scans user tickets and receives payment                                               |
| **Moderator**             | Manages user data and RFID badge assignments; resolves account issues                                                           |
| **User (Motorist)**       | Uses the platform to identify at toll booths, manage account balance, view trip history, and subscribe to plans                 |

---

### 4.2 Functional Requirements

#### Multilingual Application

The system must be available in multiple languages to maximize accessibility.

#### Secure Payment System

Each user account holds an integrated balance. Two recharge methods are supported:

1. **Recharge code** — the user enters a code that adds a predefined amount
2. **Online payment** — recharge via EDAHABIA card, CIB card, VISA, or Mastercard (through the Chargily Pay API)

#### Secure Toll Identification System

Two automatic identification methods are supported:

- **QR Code (Mobile App):** A unique, short-lived QR code displayed in the app is scanned at the toll booth
- **RFID Toll Badge:** Each badge is uniquely linked to a single user and a specific vehicle (registration number and vehicle type are stored). Badges cannot be cloned.

#### Authentication System

- Email + password login with email verification
- Google OAuth login
- Password recovery flow
- Dedicated authentication for automated barriers (credentials set by the toll admin)

#### Dynamic Pricing System

Tariffs are set dynamically at two levels — global (by the General Admin) and per-booth (by the Toll Admin) — using a priority-based rule system (see [Section 11.1](#111-dynamic-pricing-system)).

#### Toll Network Structure

The system organizes toll booths into **networks**. A toll network is a set of interconnected highway sections where a driver **pays only once** — at entry and at exit. A network can span one or multiple highways.

#### User Billing

Users are charged based on **distance traveled** between entry and exit, multiplied by the applicable tariff at the time of travel.

---

#### Role-Specific Features

**General Administrator:**

- CRUD operations on: toll networks, highway sections, highways, toll booths, subscription types
- Assign/revoke HR Administrator roles
- Manage global tariff rules and default tariff

**HR Administrator:**

- Assign/revoke Toll Admin, Gate Admin, and Moderator roles
- Assign admins to specific toll booths

**Toll Administrator:**

- CRUD on automated barriers within their assigned booth
- Manage local tariff rules for their booth

**Gate Administrator:**

- Scan a user's ticket
- View the amount owed
- Mark the trip as paid and open the barrier

**Moderator:**

- CRUD on user accounts
- Assign RFID badges to users

**User (Motorist):**

- View and recharge account balance
- View list of assigned RFID badges
- View toll map with traffic status
- Estimate trip cost between two booths
- Identify at a toll booth (QR code or RFID badge)
- View trip history and recharge history
- Edit personal account information
- Subscribe to subscription plans

---

### 4.3 Non-Functional Requirements

| Requirement         | Description                                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Speed**           | Fast response times, especially for toll identification and transaction processing, to ensure optimal traffic flow |
| **Reliability**     | Error-free operation; data consistency must be maintained throughout                                               |
| **Availability**    | System must remain online even during partial server failures                                                      |
| **Ergonomics**      | Interfaces must be intuitive and user-friendly across all applications                                             |
| **Security**        | User data, transactions, and toll identification must all be fully secured                                         |
| **Maintainability** | Code must follow best practices: readable, well-structured, with maximum code reuse and minimal repetition         |

---

## 5. System Analysis — UML Diagrams

The system was modeled using **UML (Unified Modeling Language)** following the **Unified Process (UP)** methodology — an iterative, incremental software development framework.

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img157.jpg">
  <br>
  <em>UML Logo</em>
</p>

### 5.1 Use Case Diagrams

#### Authentication (All Roles)

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img217.jpg">
  <br>
  <em>Authentication System Use Case Diagram</em>
</p>

All roles share the same authentication system, supporting:

- Create account (email + password) → includes email verification
- Log in with email + password → extends to password recovery
- Log in with a Google account

---

#### User (Motorist)

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img220.jpg">
  <br>
  <em>User Use Case Diagram</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img218.jpg">
  <br>
  <em>User: View Toll Map</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img219.jpg">
  <br>
  <em>User: Manage Account Balance</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img224.jpg">
  <br>
  <em>User: Identify at Toll Booth</em>
</p>

---

#### General Administrator

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img225.jpg">
  <br>
  <em>General Admin Use Case Diagram</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img231.jpg">
  <br>
  <em>General Admin: Manage Highway Sections</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img229.jpg">
  <br>
  <em>General Admin: Manage Subscriptions</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img230.jpg">
  <br>
  <em>General Admin: Manage Toll Networks</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img232.jpg">
  <br>
  <em>General Admin: Manage HR Administrators</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img236.jpg">
  <br>
  <em>General Admin: Manage Highways</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img237.jpg">
  <br>
  <em>General Admin: Manage Users</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img238.jpg">
  <br>
  <em>General Admin: Manage Global Tariffs</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img239.jpg">
  <br>
  <em>General Admin: Manage Toll Booths</em>
</p>

---

#### HR Administrator

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img243.jpg">
  <br>
  <em>HR Admin Use Case Diagram</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img244.jpg">
  <br>
  <em>HR Admin: Manage Users</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img245.jpg">
  <br>
  <em>HR Admin: Manage Toll Administrators</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img246.jpg">
  <br>
  <em>HR Admin: Manage Gate Administrators</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img247.jpg">
  <br>
  <em>HR Admin: Manage Moderators</em>
</p>

---

#### Toll Administrator

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img251.jpg">
  <br>
  <em>Toll Admin Use Case Diagram</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img252.jpg">
  <br>
  <em>Toll Admin: Manage Local Tariffs</em>
</p>

---

#### Gate Administrator

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img257.jpg">
  <br>
  <em>Gate Admin Use Case Diagram</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img258.jpg">
  <br>
  <em>Gate Admin: Bill a User with a Ticket</em>
</p>

---

#### Moderator

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img263.jpg">
  <br>
  <em>Moderator Use Case Diagram</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img262.jpg">
  <br>
  <em>Moderator: Manage RFID Badges</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img264.jpg">
  <br>
  <em>Moderator: Manage User Accounts</em>
</p>

---

#### Automated Barriers

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img266.jpg">
  <br>
  <em>Automated Barrier Authentication Use Case</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img265.jpg">
  <br>
  <em>Automated Barrier: Ticket Printer</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img271.jpg">
  <br>
  <em>Automated Barrier: RFID Badge Reader</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img270.jpg">
  <br>
  <em>Automated Barrier: QR Code Reader</em>
</p>

---

### 5.2 Sequence Diagrams

#### Email Authentication

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img275.jpg">
  <br>
  <em>Sequence Diagram: Email Authentication</em>
</p>

#### Email Verification

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img280.jpg">
  <br>
  <em>Sequence Diagram: Email Verification</em>
</p>

#### Google Account Authentication

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img281.jpg">
  <br>
  <em>Sequence Diagram: Google Authentication</em>
</p>

#### Passing a Toll with an Automated Payment Method (RFID / QR Code)

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img285.jpg">
  <br>
  <em>Sequence Diagram: Passing a Toll with Automated Payment</em>
</p>

The sequence is:

1. The RFID badge is detected or the QR code is read by the mobile app
2. **If entering the highway:** A trip session is initiated → barrier opens
3. **If exiting the highway:** Transaction is initiated → barrier opens if payment succeeds

#### Passing a Toll with a Ticket (Cash)

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img286.jpg">
  <br>
  <em>Sequence Diagram: Passing a Toll with a Ticket</em>
</p>

1. **At entry:** User presses the print button → ticket is printed → barrier opens
2. **At exit:** User presents ticket to the gate admin → amount is displayed → user pays → barrier opens

---

## 6. System Design

### 6.1 Class Diagram

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img290.jpg">
  <br>
  <em>Class Diagram (see Appendix A for class descriptions)</em>
</p>

The class diagram represents the static structure of the system. Key classes include:

| Class                       | Role                                                                    |
| --------------------------- | ----------------------------------------------------------------------- |
| `BaseUser`                  | Core user entity shared by all roles                                    |
| `User`                      | Standard motorist role with account balance                             |
| `GeneralAdmin`              | General administrator role                                              |
| `HumanRessourcesAdmin`      | HR administrator role                                                   |
| `Moderator`                 | Moderator role                                                          |
| `TollAdmin`                 | Toll booth administrator role (linked to a specific booth)              |
| `GateAdmin`                 | Barrier administrator role (linked to a specific booth)                 |
| `RfidTag`                   | Stores RFID badge information (badge ID, vehicle registration)          |
| `Toll`                      | Toll booth entity (name, coordinates, highway, network)                 |
| `TollNetwork`               | Groups toll booths into a network                                       |
| `Highway`                   | Highway entity                                                          |
| `Wilaya`                    | Algerian administrative district                                        |
| `Section`                   | Highway section linking two toll booths with a distance                 |
| `TollDistance`              | Pre-computed distances between all pairs of toll booths                 |
| `Trip`                      | Represents a completed trip (entry, exit, timestamps, prices, distance) |
| `Ticket`                    | Printed ticket for cash-paying users                                    |
| `Price`                     | Tariff rule (value, time range, direction, priority)                    |
| `DailyPrice`                | Daily recurring tariff                                                  |
| `WeeklyPrice`               | Weekly recurring tariff (with specific days of the week)                |
| `MonthlyPrice`              | Monthly recurring tariff (with specific months and day range)           |
| `YearlyPrice`               | Yearly recurring tariff                                                 |
| `CustomPrice`               | One-time, non-recurring tariff                                          |
| `DefaultPrice`              | Fallback global tariff                                                  |
| `AutomaticGate`             | Automated barrier entity (name, password)                               |
| `Subscription`              | Subscription plan (name, price, duration in days)                       |
| `UserSubscription`          | A user's active subscription with start and end dates                   |
| `Deposit`                   | Account top-up record                                                   |
| `AuthMethod`                | Base authentication method                                              |
| `EmailAuthMethod`           | Email + password authentication                                         |
| `GoogleAuthMethod`          | Google OAuth authentication                                             |
| `VerificationToken`         | Token for email/password verification                                   |
| `RefreshToken`              | JWT refresh token                                                       |
| `AutomaticGateRefreshToken` | JWT token for automated barriers                                        |

---

### 6.2 Relational Model

The class diagram was converted to a relational model using the **Class Table Inheritance** pattern for inheritance relationships. Each class in an inheritance hierarchy gets its own table. Subclass tables reference the parent table's primary key — which also serves as both primary key and foreign key in the subclass table.

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img301.jpg">
  <br>
  <em>Example of Inheritance Mapping to Relational Model</em>
</p>

---

### 6.3 Entity-Relationship Diagram

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img305.jpg">
  <br>
  <em>Entity-Relationship Diagram</em>
</p>

The ER diagram shows all tables, primary keys, foreign keys, cardinalities, and relationship types (one-to-one, one-to-many, many-to-many).

---

## 7. Architecture

### 7.1 3-Tier Architecture

The platform follows the classic **3-tier architecture**:

```
┌─────────────────────────────┐
│     Presentation Layer      │  ← Mobile App, Web Admin Panels, Desktop Apps
├─────────────────────────────┤
│      Business Logic Layer   │  ← NestJS Server (rules, processing, decisions)
├─────────────────────────────┤
│        Data Layer           │  ← PostgreSQL (relational data) + Redis (cache)
└─────────────────────────────┘
```

This separation of concerns ensures **maintainability**, **scalability**, and **clean code organization**.

---

### 7.2 Monorepo Structure

The project uses a **monorepo** architecture — multiple applications and libraries share a single source code repository. This approach provides:

- **Centralized shared libraries** — UI components, authentication, utilities, and configuration are developed once and reused across all applications
- **Unified design** — all applications share the same component library and styling system
- **Centralized authentication** — a single, configurable authentication system shared by all panels
- **Single bug-fix propagation** — fixes in shared libraries automatically apply to all apps

The TypeScript-based part of the project is organized into three top-level folders:

```
peage-pay-web/        ← All web and desktop applications
peage-pay-mobile/     ← Mobile application (React Native + Expo)
peage-pay-server/     ← NestJS backend server
```
<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img560.jpg">
  <br>
  <em>Global Monorepo Project Structure</em>
</p>

Inside `peage-pay-web`:

```
peage-pay-web/
├── assets/                    ← Images and illustrations
├── lib/                       ← Shared code
│   ├── apollo-client/         ← Pre-configured GraphQL client
│   ├── auth/                  ← User authentication system
│   ├── automatic-gate-auth/   ← Barrier authentication system
│   ├── constants/             ← Shared constants
│   ├── serial-port/           ← Arduino serial connection components
│   ├── tailwind-config/       ← Shared Tailwind CSS configuration
│   ├── ui/                    ← Shared UI components
│   └── utils/                 ← Utility functions
└── client/                    ← Individual applications
    ├── auth-common-client/    ← Shared authentication pages
    ├── general-admin-panel/   ← General admin web panel
    ├── human-ressources-admin-panel/
    ├── toll-admin-panel/
    ├── gate-admin-panel/
    ├── moderator-admin-panel/
    ├── ticket-printer/        ← Barrier: ticket printer desktop app
    ├── rfid-gate/             ← Barrier: RFID badge reader desktop app
    └── qr-code-gate/          ← Barrier: QR code reader desktop app
```

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img561.jpg">
  <br>
  <em>Structure of the peage-pay-web Folder</em>
</p>

---

### 7.3 General Architecture

The system is based on a **centralized client-server architecture**. All clients — mobile, web, and desktop — communicate with a single central server that handles authentication and all request processing.

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img321.jpg">
  <br>
  <em>General Architecture Diagram</em>
</p>

Applications on the platform:

- **Mobile App** (Android/iOS) — User-facing app
- **Web Admin Panels** (Browser) — General admin, HR admin, Toll admin
- **Desktop Apps** (Windows/Linux/macOS) — Gate admin, Moderator, Automated barrier apps
- **Automated barrier computers** — Ticket printer, RFID gate, QR code gate

---

### 7.4 Deployment Diagram

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img327.jpg">
  <br>
  <em>UML Deployment Diagram</em>
</p>

Key infrastructure nodes:

- **Web Server** — Node.js runtime running the NestJS application
- **Database Server** — PostgreSQL DBMS
- **Cache Server** — Redis
- **Load Balancer** — For high availability
- **Google Server** — Google Maps API + Google OAuth
- **Chargily Pay Server** — Online payment processing
- **Mobile Device** (Android/iOS) — PeagePay app
- **Web Browser** — Admin panels
- **PC** (Windows/Linux/macOS) — Gate admin, moderator, and barrier apps
- **Arduino Barrier Controller** — Physical simulation circuit
- **RFID Badge Reader** — Arduino-based RFID module
- **QR Code Reader** — Camera-based QR scanner
- **Ticket Printer** — Physical thermal printer

---

## 8. Hardware Simulation (Arduino)

The system simulates hardware features that cannot be achieved with a standard computer alone:

- **RFID badge detection**
- **Barrier opening and closing** (servo motor)

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img334.jpg" height="100">
  <br>
  <em>Arduino Logo</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img332.jpg">
  <br>
  <em>Full Circuit Connection Diagram</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img338.jpg">
  <br>
  <em>Arduino Nano Pin Detail</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img339.jpg">
  <br>
  <em>RFID RC522 Reader Connection Detail</em>
</p>

### Components

| #   | Component                    | Role                                                                                            |
| --- | ---------------------------- | ----------------------------------------------------------------------------------------------- |
| 1   | **Arduino Nano**             | Controls all circuit components; communicates with a PC via USB                                 |
| 2   | **RC522 (RFID Reader)**      | Reads RFID badges operating at 13.56 MHz                                                        |
| 3   | **SG90 (Servo Motor)**       | Controls barrier open/close movement                                                            |
| 4   | **4× AA Batteries (series)** | Secondary power source supplying sufficient current for the servo (USB port is current-limited) |
| 5   | **Buzzer**                   | Emits an audible signal when a badge is detected                                                |
| 6   | **Red LED**                  | Signals vehicle to stop                                                                         |
| 7   | **Green LED**                | Signals vehicle to proceed                                                                      |
| 8   | **Blue LED**                 | Lights up when a badge is detected                                                              |
| 9   | **220Ω Resistors**           | Limit current through LEDs to prevent damage                                                    |
| 10  | **Breadboard**               | Prototyping board — no soldering required                                                       |
| 11  | **Cables**                   | Connect all components                                                                          |
| 12  | **Arduino USB Port**         | Communication between desktop apps and Arduino; also used to upload programs                    |

The Arduino communicates with the desktop PC applications via the **Node SerialPort** library, enabling the software to send commands (open gate, close gate) and receive badge scan events in real time.

---

## 9. Technology Stack

### 9.1 Languages

| Language                                                                                                     | Role                                                                  |
| ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| <img height="35px" src="https://devlotfi.github.io/stack-icons/icons/html.svg">                      | Web page structure                                                    |
| <img height="35px" src="https://devlotfi.github.io/stack-icons/icons/css.svg">                        | Styling and layout                                                    |
| <img height="35px" src="https://devlotfi.github.io/stack-icons/icons/ts.svg"> | Typed superset of JavaScript used for all front-end and back-end code |

---

### 9.2 Tools

| Tool                   | Purpose                                                   |
| ---------------------- | --------------------------------------------------------- |
| **Visual Studio Code** | Primary code editor (IntelliSense, debugging, extensions) |
| <img height="35px" src="https://devlotfi.github.io/stack-icons/icons/figma.svg">             | UI/UX design and prototyping                              |
| <img height="35px" src="https://devlotfi.github.io/stack-icons/icons/fritzing.svg">           | Electronic circuit design and prototyping                 |
| <img height="35px" src="https://devlotfi.github.io/stack-icons/icons/drawio.svg">            | UML diagrams and architectural visualizations             |

---

### 9.3 External APIs

| API                  | Role                                                                                           |
| -------------------- | ---------------------------------------------------------------------------------------------- |
| <img height="35px" src="https://devlotfi.github.io/stack-icons/icons/googleoauth.svg"> | User authentication via Google accounts; uses access tokens to secure data                     |
| <img height="35px" src="https://devlotfi.github.io/stack-icons/icons/googlemapsapi.svg">  | Interactive toll map display, markers, geocoding, and real-time traffic information            |
| <img height="35px" src="https://devlotfi.github.io/stack-icons/icons/chargily.svg">     | Algerian payment gateway supporting EDAHABIA, CIB, VISA, and Mastercard; free API with plugins |

---

### 9.4 Authentication

| Technology               | Role                                                                                           |
| ------------------------ | ---------------------------------------------------------------------------------------------- |
| <img height="35px" src="https://devlotfi.github.io/stack-icons/icons/jwt.svg"> | Open standard (RFC 7519) for secure access tokens; used for all API authentication             |
| **OAuth 2.0**            | Open authorization protocol (RFC 6749) for Google-based login without sharing user credentials |

---

### 9.5 Data Layer

| Technology     | Role                                                                                    |
| -------------- | --------------------------------------------------------------------------------------- |
| <img height="35px" src="https://devlotfi.github.io/stack-icons/icons/postgres.svg"> | Primary relational DBMS — robust, ACID-compliant, high availability through replication |
| <img height="35px" src="https://devlotfi.github.io/stack-icons/icons/redis.svg">      | In-memory key-value store used for caching, session management, and fast data access    |

---

### 9.6 Back-End

| Technology     | Role                                                                                                                                     |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| <img height="35px" src="https://devlotfi.github.io/stack-icons/icons/nodejs.svg">    | Server-side JavaScript runtime built on Google's V8 engine                                                                               |
| <img height="35px" src="https://devlotfi.github.io/stack-icons/icons/nestjs.svg">     | Progressive Node.js framework with modular architecture, dependency injection, OOP patterns, validation, caching, and exception handling |
| <img height="35px" src="https://devlotfi.github.io/stack-icons/icons/prisma.svg"> | Modern TypeScript ORM for Node.js; declarative schema-based migrations compatible with most SQL databases                                |
| <img height="35px" src="https://devlotfi.github.io/stack-icons/icons/graphql.svg">    | API query language enabling clients to request exactly the data they need in a single request                                            |

---

### 9.7 Front-End

| Technology          | Role                                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| <img height="35px" src="https://devlotfi.github.io/stack-icons/icons/react.svg">        | JavaScript library for building reusable UI components and single-page applications                     |
| <img height="35px" src="https://devlotfi.github.io/stack-icons/icons/tailwind.svg">    | Utility-first CSS framework for rapid, consistent styling                                               |
| <img height="35px" src="https://devlotfi.github.io/stack-icons/icons/fontawesome.svg">     | Vector icon library integrated throughout the UI                                                        |
| <img height="35px" src="https://devlotfi.github.io/stack-icons/icons/electron.svg">   | Combines Electron (desktop apps using web tech) + Vite (ultra-fast build tool) for desktop applications |
| <img height="35px" src="https://devlotfi.github.io/stack-icons/icons/reactnative.svg">    | Open-source framework (by Meta) for building native iOS and Android apps with JavaScript and React      |
| <img height="35px" src="https://devlotfi.github.io/stack-icons/icons/expo.svg">            | React Native development platform for rapid setup, testing, and deployment without native build config  |
| <img height="35px" src="https://devlotfi.github.io/stack-icons/icons/apollo.svg">   | JavaScript library for managing GraphQL state and API interaction, with advanced caching                |
| <img height="35px" src="https://devlotfi.github.io/stack-icons/icons/i18n.svg">      | Internationalization library for multi-language support in React apps                                   |
| **Node SerialPort** | Node.js library for serial communication with microcontrollers (Arduino)                                |

---

## 10. Platform Applications — PeagePay

### 10.1 Mobile Application (PeagePay)

The mobile app is the primary interface for motorists. It is built with **React Native + Expo** and supports Android and iOS.

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img388.jpg" height="512">
  <br>
  <em>Splash/Start Page</em>
</p>

#### Authentication

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img389.jpg" height="512">
  <br>
  <em>Sign Up Page</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img390.jpg" height="512">
  <br>
  <em>Login Page</em>
</p>

Users can register with email + password or log in with a Google account.

#### Home Screen

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img391.jpg" height="512">
  <br>
  <em>Home Page (Inactive status)</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img392.jpg" height="512">
  <br>
  <em>Home Page (Active trip in progress)</em>
</p>

The home screen displays the user's status (inactive / on a trip), a summary of recent completed trips, and real-time trip details.

#### Account Balance

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img393.jpg" height="512">
  <br>
  <em>Account Balance Screen</em>
</p>

Shows the current balance, user ID, and full recharge history.

#### Recharge Account

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img397.jpg" height="512">
  <br>
  <em>Recharge with Code</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img398.jpg" height="512">
  <br>
  <em>Recharge with Card</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img399.jpg" height="512">
  <br>
  <em>Chargily Pay Payment API</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img400.jpg" height="512">
  <br>
  <em>Payment Confirmed</em>
</p>

Two recharge methods:

1. **Recharge code** — enter a predefined code (available in 500, 1000, 2000 DZD denominations)
2. **Online card payment** — via the Chargily Pay API (EDAHABIA, CIB, VISA, Mastercard)

#### RFID Badge List

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img401.jpg" height="512">
  <br>
  <em>List of RFID Badges</em>
</p>

Displays all RFID badges linked to the user's account, including their identifier, vehicle registration number, and assignment date.

#### QR Code for Toll Identification

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img402.jpg" height="512">
  <br>
  <em>QR Code Screen</em>
</p>

Displays a unique, short-lived QR code used to identify the user at a QR code barrier. The code must be scanned before it expires.

#### Toll Map

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img406.jpg" height="512">
  <br>
  <em>Toll Map</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img407.jpg" height="512">
  <br>
  <em>Define a Trip</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img408.jpg" height="512">
  <br>
  <em>Trip Price Calculation</em>
</p>

The map shows all toll booths on the network. Users can define a trip (departure and arrival booth) and get an estimated price.

---

### 10.2 Admin Authentication Page

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img409.jpg">
  <br>
  <em>Admin Authentication Page</em>
</p>

A shared authentication page used by all administration panels. Supports email/password login and Google login.

---

### 10.3 General Administration Panel

A web application for global system management.

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img413.jpg">
  <br>
  <em>General Admin Dashboard</em>
</p>

The dashboard displays key statistics: number of highways, toll networks, subscriptions, and HR administrators.

#### User Management

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img414.jpg">
  <br>
  <em>User List</em>
</p>

The admin can view all users and assign/revoke the HR Administrator role.

#### Toll Network Management

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img418.jpg">
  <br>
  <em>Toll Networks List</em>
</p>

Lists all toll networks. The admin can add, edit, or delete networks.

#### Global Tariff Management

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img419.jpg">
  <br>
  <em>Add Weekly Global Tariff</em>
</p>

The admin can set the default tariff and schedule periodic or one-time tariff changes at a global scale (see [Section 11.1](#111-dynamic-pricing-system)).

#### Toll Booth Management

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img423.jpg">
  <br>
  <em>Toll Booth List</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img424.jpg">
  <br>
  <em>Add a Toll Booth</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img428.jpg">
  <br>
  <em>Map-based Location Selector</em>
</p>

Add or manage toll booths. Booth location can be selected visually on an interactive Google Maps satellite view.

#### Network Graph Visualization

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img429.jpg">
  <br>
  <em>Toll Network Graph on Map</em>
</p>

Displays the toll network as an interactive graph overlaid on Google Maps, showing all booths as nodes and highway sections as edges with distances labeled.

---

### 10.4 HR Administration Panel

A web application for managing role assignments.

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img433.jpg">
  <br>
  <em>Role Assignment Page</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img434.jpg">
  <br>
  <em>Assign Toll Admin to a Booth</em>
</p>

Roles that can be managed: Toll Admin, Gate Admin, Moderator. Toll and Gate Admins are assigned to a specific booth.

---

### 10.5 Toll Administration Panel

A web application for managing a specific toll booth.

#### Automated Barrier Management

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img438.jpg">
  <br>
  <em>List of Automated Barriers</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img439.jpg">
  <br>
  <em>Add an Automated Barrier</em>
</p>

Manage barriers associated with the toll booth. Each barrier has a name, variant (RFID reader, QR code reader, or ticket printer), direction (entering/exiting), and a password.

#### Local Tariff Management

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img443.jpg">
  <br>
  <em>Add Monthly Local Tariff</em>
</p>

Set tariff rules specific to this toll booth (daily, weekly, monthly, yearly, or custom one-time rules), overriding global tariffs according to the priority system.

---

### 10.6 Moderator Administration Panel

A **desktop application** (Electron) for managing user data and RFID badge assignments.

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img444.jpg">
  <br>
  <em>User List</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img448.jpg">
  <br>
  <em>RFID Badge List for a User</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img449.jpg">
  <br>
  <em>Add an RFID Badge</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img453.jpg">
  <br>
  <em>Scan Badge to Get Its Identifier</em>
</p>

The moderator can browse users, view their linked badges, and add new badges. Adding a badge involves entering the badge identifier (which can be auto-populated by physically scanning the badge via the connected Arduino) and the vehicle's registration number.

---

### 10.7 Gate Admin Panel

A **desktop application** for barrier administrators managing manual (cash) exit lanes.

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img454.jpg">
  <br>
  <em>Gate Admin: Scan User Ticket</em>
</p>

The gate admin uses their webcam to scan the QR code on a user's printed ticket. The system retrieves and displays:

- Entry toll booth
- Entry tariff (DZD/km)
- Exit tariff (DZD/km)
- Distance traveled (km)
- Applied tariff
- **Total amount due**

After receiving payment, the admin clicks "Validate ticket" to mark it as paid and trigger the barrier to open.

---

### 10.8 Automatic Gate Applications

These are **desktop applications** running on the computers physically connected to each automated barrier via USB (Arduino).

#### Barrier Authentication

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img458.jpg">
  <br>
  <em>Automated Barrier Authentication Page</em>
</p>

Before use, each barrier computer must authenticate using the credentials defined by the Toll Admin, selecting its assigned toll booth and barrier.

#### Ticket Printer Barrier

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img459.jpg">
  <br>
  <em>Ticket Printer Page</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img463.jpg">
  <br>
  <em>Ticket Print Preview</em>
</p>

At the highway entrance, the user presses a button. The app generates a trip ticket, displays a print preview, sends it to the printer, and commands the Arduino to open the barrier. The ticket contains a unique QR code encoding the trip ID.

#### RFID Badge Reader Barrier

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img464.jpg">
  <br>
  <em>RFID Badge Reader (Waiting for Badge)</em>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img468.jpg">
  <br>
  <em>After Badge Detection (Transaction Successful)</em>
</p>

Continuously listens for RFID badge signals from the Arduino. When a badge is detected:

- At **entry**: creates a trip session → sends open command to Arduino
- At **exit**: processes the transaction, deducts balance → sends open command if successful

Displays live transaction status with a success/failure indicator.

#### QR Code Reader Barrier

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img469.jpg">
  <br>
  <em>QR Code Reader Barrier</em>
</p>

Uses the computer's webcam to continuously scan for QR codes displayed in users' mobile apps. When a valid QR code is read:

- At **entry**: creates a trip session → opens barrier
- At **exit**: processes payment → opens barrier

The user can select from available connected cameras.

---

## 11. Core Algorithms

### 11.1 Dynamic Pricing System

The system uses a **priority-based dynamic tariff system** with two levels:

- **Global level** — set by the General Administrator, applied to all toll booths
- **Booth level** — set by the Toll Administrator, applied to their specific booth only

#### Tariff Types

| Type           | Scope          | Description                                                 |
| -------------- | -------------- | ----------------------------------------------------------- |
| `DefaultPrice` | Global         | Fallback tariff applied when no other rule matches          |
| `DailyPrice`   | Global / Booth | Applies every day during a defined time range               |
| `WeeklyPrice`  | Global / Booth | Applies on specific days of the week during a time range    |
| `MonthlyPrice` | Global / Booth | Applies during specific months on a defined day range       |
| `YearlyPrice`  | Global / Booth | Applies on a defined annual date range                      |
| `CustomPrice`  | Global / Booth | One-time application during a specific date and time window |

#### Priority System

When multiple rules apply at the same instant, the system uses a **frequency × specificity priority**:

```
← Less specific, more frequent (lower priority)
  Global Default Tariff
  Global Daily Tariff
  Global Weekly Tariff
  Global Monthly Tariff
  Global Yearly Tariff
  Global Custom (Non-Periodic) Tariff
  Booth Daily Tariff
  Booth Weekly Tariff
  Booth Monthly Tariff
  Booth Yearly Tariff
  Booth Custom (Non-Periodic) Tariff     ← More specific, less frequent (higher priority)
```

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img167.jpg">
  <br>
  <em>Tariff Priority Hierarchy</em>
</p>

To determine the active tariff at a booth at time T: retrieve all applicable rules sorted by priority (highest first) and apply the most specific one.

---

### 11.2 Toll Network Graph & Distance Calculation

#### Network Representation

Each toll network is represented as a **connected, undirected, acyclic graph**:

- **Nodes** = toll booths
- **Edges** = highway sections with defined distances

<p align="center">
  <img src="https://raw.githubusercontent.com/devlotfi/peage-pay/master/github-assets/img/img171.jpg">
  <br>
  <em>Example of a Toll Network Graph</em>
</p>

This graph has an important constraint: there must be **one and only one path** between any two nodes (no cycles). This guarantees that the route taken between any entry and exit point is unambiguous.

#### Example Network

The graph example in the thesis (7 booths) produces 21 distance pairs:

| From    | To      | Distance |
| ------- | ------- | -------- |
| Booth 1 | Booth 2 | 25 km    |
| Booth 1 | Booth 3 | 78 km    |
| Booth 1 | Booth 4 | 72 km    |
| Booth 2 | Booth 3 | 53 km    |
| Booth 3 | Booth 5 | 16 km    |
| Booth 3 | Booth 6 | 35 km    |
| ...     | ...     | ...      |

#### Pre-computation for Performance

Computing distances on-the-fly by traversing the graph for every transaction is resource-intensive. Instead, distances between **all pairs** of booths are pre-computed when the graph changes and stored in the `TollDistance` table. This allows the server to retrieve any distance with a **single SQL query** (and optionally cache it in Redis).

#### Distance Algorithm (Pseudo-code — DFS-based)

```
for each node in nodeList:
  visitedEdges = new Set()
  traverse(startNode=node, currentNode=node, visitedEdges, currentDistance=0)

function traverse(startNode, currentNode, visitedEdges, currentDistance):
  for each edge in currentNode.edges:
    if edge not in visitedEdges:
      visitedEdges.add(edge)
      nextNode = the other node of edge

      key = concat(startNode.id, nextNode.id)
      if key not in distanceMap AND reverse key not in distanceMap:
        distanceMap[key] = DistancePair(startNode.id, nextNode.id, currentDistance + edge.distance)

      traverse(startNode, nextNode, visitedEdges, currentDistance + edge.distance)
```

---

### 11.3 Trip Fare Formula

```
Applied Tariff = (Entry Booth Tariff + Exit Booth Tariff) / 2

Trip Price = Applied Tariff × Distance Traveled
```

Since each booth can have a different active tariff at any given moment, the **average of the two booths' tariffs** is used to ensure fairness.

---

## 12. Database Schema

Complete relational model (primary keys **underlined**, foreign keys marked with `*`):

```sql
BaseUser(id, firstName, lastName, createdAt, updatedAt)
User(baseUserId*, balance)
GeneralAdmin(baseUserId*)
HumanRessourcesAdmin(baseUserId*)
Moderator(baseUserId*)
TollAdmin(baseUserId*, tollId*)
GateAdmin(baseUserId*, tollId*)
Deposit(id, baseUserId*, value, createdAt)
VerificationToken(id, baseUserId*, tokenHash, createdAt, expiresAt)
RefreshToken(id, baseUserId*, tokenHash, createdAt)
AuthMethod(id, baseUserId*)
EmailAuthMethod(authMethodId*, email, passwordHash, verifiedAt)
GoogleAuthMethod(authMethodId*, googleId, email)
RfidTag(id, baseUserId*, rfid, registrationNumber, createdAt, updatedAt)
TollNetwork(id, name, createdAt, updatedAt)
Subscription(id, name, price, duration, createdAt, updatedAt)
UserSubscription(baseUserId*, subscriptionId*, startDate, endDate)
Wilaya(id, name, code)
Highway(id, name, code, createdAt, updatedAt)
Toll(id, wilayaId*, highwayId*, tollNetworkId*, name, longitude, latitude, createdAt, updatedAt)
TollDistance(fromTollId*, toTollId*, distance)
Section(fromTollId*, toTollId*, distance)
AutomaticGate(id, tollId*, name, passwordHash, createdAt, updatedAt)
AutomaticGateRefreshToken(id, automaticGateId*, tokenHash, createdAt)
Trip(id, entryTollId*, exitTollId*, baseUserId*, entryTimestamp, entryTollPrice, exitTimestamp, exitTollPrice, distance)
Ticket(id, entryTollId*, exitTollId*, entryTimestamp, entryTollPrice, exitTimestamp, exitTollPrice, distance, used)
Price(id, tollId*, value, startTimestamp, endTimestamp, priority, direction, createdAt, updatedAt)
DailyPrice(priceId*)
WeeklyPrice(priceId*, daysOfWeek)
MonthlyPrice(priceId*, startDay, endDay, months)
YearlyPrice(priceId*, startDate, endDate)
CustomPrice(priceId*, startDate, endDate)
DefaultPrice(value)
Code(id*, codeHash, createdAt)
```

---

## 13. Project Structure

```
peage-pay/
├── peage-pay-web/
│   ├── assets/
│   ├── lib/
│   │   ├── apollo-client/
│   │   ├── auth/
│   │   ├── automatic-gate-auth/
│   │   ├── constants/
│   │   ├── serial-port/
│   │   ├── tailwind-config/
│   │   ├── ui/
│   │   └── utils/
│   └── client/
│       ├── auth-common-client/
│       ├── general-admin-panel/
│       ├── human-ressources-admin-panel/
│       ├── toll-admin-panel/
│       ├── gate-admin-panel/
│       ├── moderator-admin-panel/
│       ├── ticket-printer/
│       ├── rfid-gate/
│       └── qr-code-gate/
├── peage-pay-mobile/
└── peage-pay-server/
```

---

## 14. Conclusion & Perspectives

PeagePay provides a comprehensive and realistic simulation of what a toll management platform for Algeria could look like — adapted to local payment methods (EDAHABIA, CIB), local currency (DZD), local language support, and the actual infrastructure of the East-West highway network.

### Key Achievements

- A functional end-to-end simulation of a full national toll management system
- Platform adapted to Algerian context: local payment methods, currency units, and multilingual support
- Hardware simulation using Arduino for RFID badge detection and physical barrier control
- 9 distinct applications (mobile, web, desktop) sharing a unified codebase

### Current Limitations

| Limitation                             | Notes                                                                                                         |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Subscription system is incomplete      | Users cannot yet purchase or use subscriptions through the mobile app                                         |
| Tariff estimation vs. real-time tariff | Trip estimates use the current tariff; the actual tariff applied at entry is the one saved on the trip record |
| Server response time                   | Some complex operations (e.g., distance pre-computation) may have higher latency                              |

### Future Improvements

- **Full subscription system** — including purchase flow in the mobile app and special plans for taxis, buses, and freight carriers
- **Real-time tariff calculation during active trips** — use the entry tariff stored on the trip record
- **Server-side performance optimization** — improve response times for complex operations
- **Offline mode in the mobile app** — especially for the QR code screen used to pass toll booths without network connectivity

---

## Acknowledgements

This project was supervised by **Mme ABERBOUR Rima** and evaluated by a jury composed of **M. FERGUENE Farid** (President) and **Mme. SEDDIKI Manel** (Member) at the _Université des Sciences et de la Technologie Houari Boumediene (USTHB)_, Faculty of Computer Science, Department SIQ.

---

## License

This project is an academic work submitted in partial fulfillment of the requirements for the **License degree in Computer Science (ISIL specialty)** at USTHB.

---

_© 2024 DEBBAL Lotfi & TEHAR Ahmed — USTHB, Faculty of Computer Science_
