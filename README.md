# Job Explorer 🔍

### Demo 

- [DEMO LINK](https://job-explorer-jtd742fgo-shyptias-projects.vercel.app/)


https://github.com/shyptia/job-explorer/assets/57047930/d62893c1-ef23-434d-81cd-b5dd99112439

>**Note**: The video was made with mock data to demonstrate the functionality since the free requests have been exhausted.

### Description

Job Explorer is a web application for job searching built with Next.js. Users can search for jobs by title, view job details, bookmark favorite jobs, create a profile, and receive job recommendations based on their profile data.

App features:

- On the Create profile tab, you can create your profile by providing specific information about yourself. To do this, click the Edit button and start entering your data. Be careful with the form as there is validation, so your values must meet certain conditions.
- On the Jobs tab, users can search for vacancies. If there is profile data available, initially only those vacancies that match your profile are displayed. However, users still have the option to search for other vacancies by entering the appropriate value in the field.
- On the job card, there is a Details button. Clicking on it will take you to a separate page where all the details of that job are displayed. After reviewing the details, you can go back.
- There is a heart icon on the job card. Clicking on it means that you liked this job, and vice versa. The list of all liked jobs can be seen on the Liked jobs tab.

### Technologies used:

- React
- NextJS
- Javascript
- Typescript
- Tailwind
- Formik for forms with Yup for validation
- Axios for API queries with SWR hooks (useSWR)

### Instructions how to run application locally:

1. Clone the repository to your local machine.
2. Open terminal in the project.
3. Set up project and install necessary packages:
```bash 
npm install
```
4. Add command to terminal:
```bash 
npm run dev
```
5. Open application in your browser `http://localhost:3000/`
