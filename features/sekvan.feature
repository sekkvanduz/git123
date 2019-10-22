Feature: Sekvan Interview

  Scenario: test case -1

    Given URL açılır.
    When Menüden, Helpers/WebDriverIO  tıklanır.
    And Sol navigasyondan “dontSee” ekranı açılır.
    Then Parameters section altında, “text is not present” texti olduğu doğrulanır.

  Scenario: test case -2

    Given URL açılır.
    When GitHub linkine tıklanır.
    And GitHub Search alanına “1.2.1 release” yazılır ve search edilir.
    Then Arama sonuçlarından, ikinci sırada olana ait link açılır.

