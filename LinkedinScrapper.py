from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import time
import random


def extract_jobs(keyword, experience, jobType):
    # Configure WebDriver options
    options = webdriver.ChromeOptions()
    options.add_argument("--disable-webrtc")  # Prevent STUN errors to reduce unnecessary network requests
    options.add_argument("--disable-gpu")  # Disable hardware acceleration
    options.add_argument("--disable-software-rasterizer")  # Force software rendering
    #options.add_argument("--headless=new")  # Run in headless mode
    options.add_argument("start-maximized")
    options.add_argument("disable-infobars")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-blink-features=AutomationControlled")  

    

    # Initialize WebDriver
    driver = webdriver.Chrome(options=options)

    # Open LinkedIn Login Page
    driver.get("https://www.linkedin.com/login")

    # Enter Credentials and Login
    driver.find_element(By.ID, "username").send_keys("ziad.a.badran92@gmail.com")
    driver.find_element(By.ID, "password").send_keys("zziiaadd92" + Keys.RETURN)

    # Wait for Login to Complete
    time.sleep(5)
    print("Logged in successfully!")

    # Open LinkedIn Job Search Page
    search_url = f"https://www.linkedin.com/jobs/search/?f_E={experience}&f_WT={jobType}&keywords={keyword}"
    driver.get(search_url)

    # Wait for JavaScript to Load
    time.sleep(random.uniform(3,6))

    # Scroll to Load More Jobs
    for _ in range(3):  
        driver.find_element(By.TAG_NAME, "body").send_keys(Keys.END)
        time.sleep(random.uniform(2,4))

    """Parses job listings from the LinkedIn job search page."""
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    job_cards = soup.find_all("div", class_="job-card-container")

    job_list = []

    def parse_job_details(job):
        """Extracts and stores job details from a job card."""
        job_title = job.find("a", class_="job-card-list__title--link").find("span").find("strong").text.strip()
        company = job.find("div", class_="artdeco-entity-lockup__subtitle ember-view").find("span").text.strip()
        location = job.find("div", class_="artdeco-entity-lockup__caption ember-view").find("span").text.strip()
        visit_link = job.find("a", class_="job-card-container__link")["href"]
        photo_link = job.find("img", class_='EntityPhoto-square-4')['src']

        job_list.append({
            "Job Title": job_title,
            "Company": company,
            "Location": location,
            "Visit Link": visit_link,
            "Photo Link": photo_link
        })

    # Extract details from all job cards
    for job in job_cards:
        parse_job_details(job)

    # Close WebDriver
    driver.quit()

    return job_list

  
