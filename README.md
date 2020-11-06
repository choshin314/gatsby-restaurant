# Gatsby Restaurant Website

Basic restaurant website with Menu page.  All menu items are pulled from Contentful CMS, could probably swap in any other CMS.  

The Menu page also allows for online ordering made possible by Snipcart.  Not quite as feature-rich as dedicated online ordering services, but the basic ordering capabilities are there.  Ordering requires that you first open a menu item modal, which checks the current time (Central/CHI timezone) against the permitted ordering hours on mount.  