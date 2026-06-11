import unittest

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class EventsPageTests(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome(
            service=Service(ChromeDriverManager().install())
        )

        self.driver.maximize_window()
        self.wait = WebDriverWait(self.driver, 15)

        self.driver.get(
            "https://www.greencity.cx.ua/#/greenCity/events"
        )

    def test_open_events_page(self):
        self.assertIn(
            "greenCity/events",
            self.driver.current_url
        )

    def test_event_cards_are_displayed(self):
        more_buttons = self.wait.until(
            EC.presence_of_all_elements_located(
                (By.XPATH, "//button[contains(., 'Більше')]")
            )
        )

        self.assertGreater(
            len(more_buttons),
            0,
            "Event cards are not displayed"
        )

    def test_event_card_contains_title_and_more_button(self):
        page_text = self.driver.find_element(
            By.TAG_NAME,
            "body"
        ).text

        self.assertIn(
            "Updated Test Event",
            page_text
        )

        self.assertIn(
            "Більше",
            page_text
        )

    def tearDown(self):
        self.driver.quit()


if __name__ == "__main__":
    unittest.main()