# 🚀 Cypress Automation Challenge – Trello-style Hidden Modal Test

This project demonstrates how to use **Cypress** to test a **hidden off-canvas modal** — similar to how **Trello** reveals a detailed card modal on click.

Here’s a Cypress automation script for a challenge involving hidden elements, specifically simulating the behavior in Trello, where clicking a card reveals a modal sliding in from the right (off-canvas modal).

### Test Objective
🔍This automation ensures:
- ✅ Login into the trello.com and select open the my-trello-board
- ✅ Verify the card details is hidden on page load
- ✅ Add new card to board
- ✅ Click a card to trigger the detailed modal
- ✅ Assert the modal becomes visible and contains expected content
- ✅ Take a screenshot of the modal
- ✅ Close the card details by deleting it

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
