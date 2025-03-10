# Job Listings Web App

## Overview
This project is a **Job Listings Web App** built using **React**. It provides users with a list of available jobs along with search and filtering options. The job data is currently stored in a **JSON file**, but a **Python web scraper** was also developed to extract job listings from LinkedIn.

## Features
- **Job Listings**: Displays a scrollable, styled list of jobs.
- **Filters**: Users can filter jobs based on keyword, experience level, and job type (Remote, Hybrid, On-Site).
- **Responsive Design**: Ensures compatibility across different screen sizes.
- **Clickable Job Links**: Each job entry contains a link to apply for the job.

## Job Data Source
Although a **Python scraper** was developed to extract jobs from **LinkedIn**, scraping jobs directly from LinkedIn is restricted. Due to **LinkedIn's scraping policies**, automated requests can only be made a limited number of times before restrictions apply. Therefore, to ensure a smooth experience, **a manually curated JSON file** is used to store job data instead.

## Technologies Used
- **Frontend:** React (with hooks & functional components)
- **Styling:** CSS
- **Data Storage:** JSON (static job data)
- **Web Scraping (Limited Use):** Python (Selenium & BeautifulSoup)

## Installation & Setup
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/your-username/job-listings-app.git
   cd job-listings-app
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   ```

3. **Run the Development Server:**
   ```sh
   npm start
   ```

## Future Improvements
- Implement **server-side API** to fetch real-time job listings.
- Integrate with **official job listing APIs** (such as Indeed or Glassdoor).
- Improve the web scraper to work with permission-based access.

## Notes on LinkedIn Scraping
Scraping LinkedIn job postings requires special permissions. Unauthorized scraping may lead to **temporary or permanent IP bans**. If you wish to use the scraper, consider using **LinkedIn's official API** or seeking permission for large-scale data collection.

## Contributing
Feel free to contribute by improving the UI, adding new features, or suggesting better data-fetching methods.

## License
This project is open-source and available under the **MIT License**.

