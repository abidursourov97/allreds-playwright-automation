# Automated Test Cases

| ID | Area | Scenario | Type | Expected result |
|---|---|---|---|---|
| TC-HOME-001 | Homepage | Open the public homepage | Positive | Correct title, logo, and search input are visible |
| TC-HOME-002 | Homepage | Verify primary navigation | Positive | Home, Clearance, News, and Events links are visible |
| TC-SEARCH-001 | Search | Submit a two-character query | Negative | Browser validation blocks submission |
| TC-SEARCH-002 | Search | Search for `filter` | Positive | Search page opens and matching products are shown |
| TC-SEARCH-003 | Search | Check product sorting control | Positive | Five supported sorting choices are available |
| TC-PRODUCT-001 | Catalog | Open the first search result | Positive | Product details, part number, and Description tab appear |
| TC-AUTH-001 | Authentication | Open the login page | Positive | Login and password-recovery controls are available |
| TC-AUTH-002 | Authentication | Submit login without an email | Negative | Required-field validation prevents submission |
| TC-AUTH-003 | Authorization | Open dashboard without login | Negative | User is redirected to the login page |
| TC-AUTH-004 | Authentication | Login with test credentials | Positive | Customer dashboard and summary navigation appear |

## Safety boundary

These tests intentionally avoid cart updates, checkout, order submission,
payments, profile edits, favorites, support tickets, and any delete action.
