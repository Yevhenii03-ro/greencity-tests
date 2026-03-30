## Test Case 1
**Title:** Verify that event cards display correct information

**Preconditions:**
- Events page is opened

| Step | Action | Data | Expected Result |
|------|--------|------|-----------------|
| 1 | Observe event cards | - | Event cards are visible |
| 2 | Check event type | - | Event type (e.g. SOCIAL, ECONOMIC) is displayed |
| 3 | Check date and time | - | Date and time are displayed correctly |
| 4 | Check location | - | Location (city or Online) is displayed |
| 5 | Check status | - | Status (e.g. Open) is displayed |
| 6 | Check event title | - | Event title is displayed |

## Test Case 2
**Title:** Verify that user can open event details page

**Preconditions:**
- Events page is opened
- At least one event is available

| Step | Action | Data | Expected Result |
|------|--------|------|-----------------|
| 1 | Click "More" button or event card | Any event | Event details page is displayed |
| 2 | Check event title | - | Event title is displayed |
| 3 | Check date and time | - | Date and time are displayed |
| 4 | Check author | - | Author name is displayed |
| 5 | Check description | - | Event description is displayed |
| 6 | Check image | - | Image is displayed correctly |

## Test Case 3
**Title:** Verify that news cards are displayed correctly

**Preconditions:**
- Eco News page is open

| Step | Action | Data | Expected Result |
|------|--------|------|-----------------|
| 1 | Observe news cards | - | News cards are visible |
| 2 | Check title | - | News title is displayed |
| 3 | Check description | - | Short description is displayed |
| 4 | Check date | - | Date is displayed |
| 5 | Check author | - | Author is displayed |

## Test Case 4 (Negative)
**Title:** Verify display of event with invalid data

**Preconditions:**
- Event with invalid or test data exists

| Step | Action | Data | Expected Result |
|------|--------|------|-----------------|
| 1 | Open event page | Event with incorrect title | Page is opened successfully |
| 2 | Check event title | URL or random text | Title is displayed without breaking UI |
| 3 | Check description | Invalid text | Description is displayed correctly |
| 4 | Check event types | Multiple types | Types are displayed according to system logic |
| 5 | Check user interface | - | Interface is not broken |
