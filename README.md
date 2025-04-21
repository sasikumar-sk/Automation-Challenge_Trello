# 🚀 Cypress Automation Challenge – Trello Hidden Modal Test

This project demonstrates how to use **Cypress** to test a **hidden off-canvas modal** — similar to how **Trello** reveals a detailed card modal on click.

Here's a quick rundown of common methods and approaches for hiding elements in Cypress:

- .force(): Forces interactions with hidden elements (e.g., clicking, typing).

- .invoke('show'): Temporarily makes an element visible for interactions.

- .trigger(): Simulates user interactions (e.g., hover, click) to make hidden elements visible.

- .should('not.be.visible'): Asserts that an element is hidden.

- .invoke('css', 'display', 'none'): Manipulate the element’s visibility.

Here’s a Cypress automation script for a challenge involving hidden elements 

### Test Objective
🔍This automation ensures:
- ✅ Login into the trello.com and select open the my-trello-board
- ✅ Verify the card details is hidden on page load
- ✅ Add new card to board
- ✅ Click a card to trigger the detailed modal
- ✅ Assert the modal becomes visible and contains expected content
- ✅ Take a screenshot of the modal
- ✅ Close the card details by deleting it

## 🚀 Features Covered

### 🔐 Login to Trello
- Navigates to the Trello login page.
- Logs in using environment variables (`username`, `password`).
- Waits for the board to load and clicks on the specified board (`boardName`).

### 📋 Card Operations

#### ➕ Add a New Card
- Adds a card to a specific list using `cardTitle` from environment variables.

#### ✅ Verify Card Creation
- Confirms that the new card appears on the board.

#### 🔍 Open Card Modal
- Opens the card details modal.
- Verifies that the modal title matches the card name.

#### 📝 Card Details Update
- **Add Description**: Inputs and saves a description.
- **Add Member**: Assigns a member via dropdown.
- **Set Due Date**: Opens the date picker and saves the due date.
- **Custom Fields**: Sets `Priority` and `Status` using custom field selectors.

#### 🗃️ Archive and Restore
- Archives the card.
- Restores the card to verify the archive/restore flow.

#### 💬 Add Comment
- Adds a comment to the card.
- Validates the comment is saved.

#### 📸 Screenshot & Logging
- Takes screenshots when the card is opened and updated.
- Logs messages for better visibility in test reports.

#### ❌ Delete Card
- Archives the card.
- Permanently deletes it.
- Verifies the card no longer exists on the board.

---

## ⚠️ Exception Handling
- Ignores any uncaught exceptions to prevent test failure from unrelated Trello errors.

---


🧾 Test File Structure
```cypress/
├── e2e/
│   └── trello-card.cy.js
```
🛠️ Technologies Used

- Cypress – End-to-end testing framework

- JavaScript 

📸 Screenshots & Logging
```
cy.screenshot();
cy.log('Card Modal opened successfully');
```
## ⚙️ Setup Instructions

1. Clone the repository

```
git clone https://github.com/sasikumar-sk/Automation-Challenge_Trello.git

cd Automation-Challenge_Trello
```

2. Install dependencies :
```
npm install
```
3. Run the Tests :
GUI mode :
```
npx cypress open
```
Headless mode : 
```
npx cypress run
```

