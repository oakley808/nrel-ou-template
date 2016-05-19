# NREL Template and Demo Site Files
This repo contains the core template and examples of client-side code on NREL.gov.

Drop this repo into your Apache document root to preview this project.

## Core template
At the root level, the core NREL template folders are:

```/assets``` binary files used across many microsites and the top level corporate sites.  
```/client``` the core NREL.gov template and all client-side code.  
```/server``` a server side feedback app used on most pages, and webmaster / contact us app used on all sites.


## Demo site
Inside the ```/site``` folder is a demo NREL microsite.


## Unique layouts
There are several files included as example pages showing unique layouts.
(Server generated pages were created by viewing the source of the rendered page - screen scraping. You can view the content as static html)


NREL home page  
http://localhost/index.html the NREL home page

Server 404 error response page  
http://localhost/404.html

Corporate level page  
http://localhost/about/mission-programs.html

Staff directory  
http://localhost/about/staff-directory.php

Microsite page. One column without breadcrumbs  
http://localhost/careers/index.html

Microsite page. One column with breadcrumbs  
http://localhost/careers/your-career.html

Newsroom home page  
http://localhost/news/index.html

News Feature Story listing and detail pages  
http://localhost/news/features/index.cfm.html
http://localhost/news/features/feature_detail.cfm.html

News Press Release listing and detail pages  
http://localhost/news/press/index.cfm.html
http://localhost/news/press/release_detail.cfm.html

Application templates, full width  
http://ou.nrel.mine/h2fast/

Application templates, with left nav  
http://ou.nrel.mine/solarpaces/index.cfm.html
