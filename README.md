# TODO

- figure out component hierarchy
- move buttons to header (lift state up)
- add styling

# Component Hierarchy

- App
  - Header
    - _left_
      - logo
    - _right_
      - Projects
      - R&eacute;sum&eacute;
  - Content
    - _hero_
      - title
      - subtitle
      - image
      - caption
      - contact
    - _projects_
      - name
      - stack
      - description
      - links
      - image
    - _r&eacute;sum&eacute;_
      - Contact
        - email
        - phone
        - linkedin
      - Education
        - name
        - location
        - date
        - text
      - Experience
        - title
        - company
        - location
        - date
        - text
      - Skills
        - programming languages
        - libraries/frameworks
        - tools
        - spoken languages
      - Extracurriculars
        - name
        - organization
        - date
        - text
      - Coursework
        - cs
        - math
        - psyc
  - Footer
    - David Herszenhaut &copy; `currentYear`
