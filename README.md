# TODO

* figure out component hierarchy
* fix json to match component hierarchy
* add styling

# Component Hierarchy

* App
  * Header
    * *left*
      * David Herszenhaut
    * *right*
      * About
      * R&eacute;sum&eacute;
  * Content
    * *about*
      * Hero
        * title
        * subtitle
        * image
        * caption
      * Projects
        * name
        * stack
        * description
        * links
        * image
    * *r&eacute;sum&eacute;*
      * Contact
        * email
        * phone
        * linkedin
      * Education
        * name
        * location
        * date
        * text
      * Experience
        * title
        * company
        * location
        * date
        * text
      * Skills
        * programming languages
        * libraries/frameworks
        * tools
        * spoken languages
      * Extracurriculars
        * name
        * organization
        * date
        * text
      * Coursework
        * cs
        * math
        * psyc
  * Footer
    * David Herszenhaut &copy; `currentYear`
