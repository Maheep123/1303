# Library Management System (LMS) Project Proposal

## 1. Introduction
The Library Management System (LMS) aims to simplify and automate the management of library resources, improving efficiency and user experience.

## 2. Objectives
Develop a user-friendly system to:
- Manage books, users, and library operations effectively.
- Enable easy borrowing, returning, and tracking of books.
- Provide basic reporting for library administrators.

## 3. Scope
### Inclusions:
- **Book Management**: Cataloging books with details like title, author, and availability.
- **User Management**: Registration and management of library members.
- **Borrowing System**: Facilitate book transactions (borrowing and returning).
- **Search and Filter**: Allow users to find books by title, author, or genre.

### Exclusions:
- **Financial Transactions**: No handling of payments for fines or fees.
- **Advanced Analytics**: Basic reporting on borrowing activities only.

## 4. Functional Requirements
### Core Features:
- **Book Catalog**: Add, edit, and delete books.
- **User Registration**: Manage member accounts.
- **Borrowing System**: Issue, renew, and return books.
- **Search and Filter**: Find books by title, author, or genre.

### Additional Features:
- **Reservation System**: Allow users to reserve books.
- **Fine Management**: Calculate fines for overdue books.
- **Basic Reporting**: Generate reports on borrowing trends.

## 6. Conclusion
The proposed Library Management System will enhance library operations by providing a straightforward and efficient way to manage resources and serve library users effectively.


# Library Management System (LMS) Design Document

## Section 1 - Project Description
### 1.1 Project
Library Management System

### 1.2 Description
The Library Management System (LMS) project aims to develop a software application to manage library resources efficiently.

## Section 2 - Overview
### 2.1 Purpose
The focus of this module is to manage library resources, including books and users, and facilitate borrowing and returning operations. The intended audience is library staff and members.

### 2.2 Scope
The module will handle book cataloging, user management, borrowing and returning transactions, search and filter functionalities.

### 2.3 Requirements
#### 2.3.1 Functional Requirements
- **R1**: The system shall allow users to log in using a username and password.
- **R2**: The system shall allow users to search for books by title, author, or genre.
- **R3**: The system shall allow users to borrow and return books.

#### 2.3.2 Non-Functional Requirements
- **Performance**: The system shall handle up to 1000 concurrent users without performance degradation.
- **Reliability**: The system shall have 99.9% uptime.

#### 2.3.3 Technical Requirements
- **Hardware**: The system shall run on servers with at least 16GB of RAM and 4 CPUs.
- **Software**: The system shall be developed using Node.js and run on a MongoDB database.

#### 2.3.4 Security Requirements
- **Authentication**: The system shall use multi-factor authentication for all user logins.
- **Data Encryption**: All sensitive data shall be encrypted both in transit and at rest.

#### 2.3.5 Estimates
| # | Description                                             | Hrs. Est. |
|---|---------------------------------------------------------|-----------|
| 1 | Requirement analysis and documentation                  |           |
| 2 | Design and architecture planning                        |           |
| 3 | Development of backend API                              |           |
| 4 | Development of frontend UI                              |           |
| 5 | Integration and testing                                 |           |
| TOTAL:                                                      |           |

#### 2.3.6 Traceability Matrix
| SRS Requirement | SDD Module                              |
|-----------------|-----------------------------------------|
| Req 1           | 5.1.1 (link to module), 5.1.2 (link)    |
| Req 2           | 5.2.1 (link to module), 5.2.2 (link)    |

## Section 3 - System Architecture
### 3.1 Overview
The system architecture includes a Node.js backend, MongoDB database, and React.js frontend. Components interact through RESTful APIs.

### 3.2 Architectural Diagrams
- **Component Diagram**: Illustrates the main components and their interactions.
- **Sequence Diagram**: Shows the sequence of interactions between components.
- **Data Flow Diagram (DFD)**: Visualizes the flow of data within the system.
- **Deployment Diagram**: Represents the deployment of components across servers.
- **Class Diagram**: Details the structure of the system classes.
- **Use Case Diagram**: Depicts the use cases and their interactions with the system.

## Section 4 - Data Dictionary
| Table | Field | Notes                                    | Type    |
|-------|-------|------------------------------------------|---------|
| Book  | ID    | Unique Identifier from TABLE_SEQ         | DECIMAL |
|       | NAME  | The Name in Object.Name()                | VARCHAR |
|       | VALUE | The Value output from somewhere          | VARCHAR |

## Section 5 – Data Design
### 5.1 Persistent/Static Data
#### 5.1.1 Dataset
Describe persisted object/dataset and its relationships to other entities/datasets using Logical Data Model (e.g., Entity Relationship Diagram).
Example:
- **Entities**:
  - **User**: Attributes: UserID (PK), Username, Password, Email, Role
  - **Relationships**: One-to-Many with Orders

## Section 6 - User Interface Design
### 6.1 User Interface Design Overview
Provide pictures, high-level requirements, and mockups of the UI.

### 6.2 User Interface Navigation Flow
Diagram the flow from one screen to the next.

### 6.3 Use Cases / User Function Description
Describe screen usage/function using use cases or on a per-function basis.

## Section 7 - Testing
### 7.1 Test Plan Creation
Components of a Test Plan:
- **Objective**: Define the goals of testing.
- **Scope**: Specify what is and is not included in the testing.
- **Resources**: List the personnel, tools, and environments required.
- **Schedule**: Detail the timeline for testing activities.
- **Test Cases**: Define individual tests with steps, expected results, and actual results.

### Test Environment
| Test Case | Input | Expected Output | Actual Output |
|-----------|-------|-----------------|---------------|
|           |       |                 |               |

### UAT Environment
| Test Case | Input | Expected Output | Actual Output |
|-----------|-------|-----------------|---------------|
|           |       |                 |               |

## Section 8 - Monitoring
Define how and where the system will be monitored, including thresholds.
Key metrics to monitor include:
- **Performance Metrics**: Response times, throughput, server load, CPU usage, memory usage.
- **Error Metrics**: Error rates, types of errors, affected users.
- **Availability Metrics**: Uptime, downtime, service availability.
- **User Metrics**: Active users, user sessions, retention rates.

## Section 9 - Other Interfaces
Identify any external interfaces used in the execution of this module, including technology and other pertinent data.
### 9.1 Interface X
Describe interactions, protocols, message formats, failure conditions, handshaking, etc.
