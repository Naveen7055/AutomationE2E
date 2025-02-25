Feature: E-commerce Validation

  Scenario: Placing an order
    Given a Login to Ecommmerce website with "sharmanaveen7055@gmail.com" and "Asdf@7055"
    When Add "IPHONE 13 PRO" to cart
    Then Verify "IPHONE 13 PRO" is displayed in cart
    When Enter the valid details and Place the order

   

  