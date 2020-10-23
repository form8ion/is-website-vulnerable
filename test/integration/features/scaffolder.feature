Feature: Scaffolder

  Scenario: Scaffold
    When the project is scaffolded
    Then is-website-vulnerable is enabled
