
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Staff Directory | NREL</title>
    <!-- GLOBAL STYLES -->

    <!-- == GLOBAL HEAD == -->
    <!-- Search engine code -->

    <meta http-equiv="last-modified" content="2016-05-19@15:15:21 MDT">


    <!-- Favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">


    <!-- iOS icons -->
    <link rel="apple-touch-icon" href="/client/img/touch-icon-iphone.png">
    <link rel="apple-touch-icon" sizes="72x72"   href="/client/img/touch-icon-ipad.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/client/img/touch-icon-iphone-retina.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/client/img/touch-icon-ipad-retina.png">


    <!-- Bootstrap styles -->
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" media="all">


    <!-- GLOBAL styles -->
    <link href="/client/css/nrel.complete.min.css" rel="stylesheet">


    <!-- Fonts -->
    <link href="//fonts.googleapis.com/css?family=Droid+Serif:400,400italic,700%7CRoboto:300,400,700" rel="stylesheet" type="text/css">


    <!-- Font Awesome -->
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">


    <!-- jQuery -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>


    <!-- Google Analytics-->
    <script type="text/javascript">
     (function() {
        var so = document.createElement('script'); so.type = 'text/javascript'; so.async = true;
        so.src = '//www.nrel.gov/includes/ga/nrel.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(so, s);
      })();
    </script>
    <!-- == END GLOBAL HEAD == -->

    <!-- LOCAL STYLES -->
    <link href="/about/client/css/styles.min.css" rel="stylesheet" >
    <script>
        $(function() {
            window.nrel = $.extend( {}, window.nrel );
            //  Set page-level variables (optional)
            window.nrel.pagevars = {
                sidenavButton: 'contacts.html'
            };
        });
    </script>
</head>
<body>
<!-- GLOBAL CORPORATE NREL BANNER -->
<!-- == GLOBAL BANNER == -->
<!--stopindex-->
<a href="#content" class="sr-only">Skip to main content</a>

<header role="banner" id="banner">
    <div class="banner-logo">
        <div class="container">
            <div class="row">

                <div class="col-sm-6">
                    <a href="/"><div class="logo"></div></a>
                </div>

                <button
                    type="button"
                    class="navbar-toggle searchbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#searchbar-collapse">

                    <i class="fa fa-search"></i><span class="sr-only">Toggle Search</span>
                </button>

                <div class="col-sm-6">
                    <div class="navbar-collapse collapse" id="searchbar-collapse">

                        <form
                            role="form"
                            name="seek"
                            method="get"
                            class="searchbar-form form-inline"
                            action="http://search2.nrel.gov">

                            <input type="hidden" name="ourl" id="bannerourl" onload />
                            <input type="hidden" name="rows" value="10" />

                            <div class="form-group">
                                <label for="search" class="sr-only">Search NREL.gov</label>
                                <input
                                    type="text"
                                    name="q" id="search"
                                    maxlength="2047"
                                    placeholder="Search NREL.gov"
                                    class="form-control">

                                <button type="submit" class="btn btn-default">Search</button>
                            </div>

                        </form>

                    </div>
                </div>

            </div>
        </div>
    </div>




    <div class="banner-wordo">
        <div class="container">
            <div class="row visible-xs">
                <div class="col-sm-12">
                    <div class="wordo">National Renewable Energy Laboratory</div>
                </div>
            </div>
        </div>
    </div>

</header>
<!--startindex-->
<!-- == END GLOBAL BANNER == -->



<!-- GLOBAL CORPORATE TOP NAV -->
<!-- == TOP NAVIGATION == -->
<!--stopindex-->
<div class="navbar-wrapper corporate-topnav" id="topnav">
    <div class="navbar navbar-inverse navbar-static-top" role="navigation">
        <div class="container">

            <div class="navbar-header">
                <span class="navbar-brand hidden-xs">Leading Clean Energy Innovation</span>
            </div>

            <ul class="nav navbar-nav navbar-right">

                <li class="dropdown" data-topnav="about"><a href="#" class="dropdown-toggle" data-toggle="dropdown">About <span class="fa fa-angle-down hidden-xs"></span></a>

                    <ul class="dropdown-menu" role="menu">
                        <li><a href="/about/">About NREL <i class="fa fa-home"></i></a></li>
                        <li><a href="/about/mission-programs.html">Mission &amp; Programs</a></li>
                        <li><a href="/about/technology-transfer.html">Technology Transfer</a></li>
                        <li><a href="/innovation/">Impact</a></li>
                        <li><a href="/about/leadership.html">Leadership</a></li>
                        <li><a href="/about/community.html">Community</a></li>
                        <li><a href="/about/visiting-nrel.html">Visiting NREL</a></li>
                        <li><a href="/about/awards.html">Awards</a></li>
                        <li><a href="/news/">Newsroom</a></li>
                        <li><a href="/about/contacts.html">Contact Us</a></li>
                    </ul>
                </li>

                <li class="dropdown" data-topnav="research"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Research <span class="fa fa-angle-down hidden-xs"></span></a>
                    <ul class="dropdown-menu" role="menu">
                        <li><a href="/research/">Research <i class="fa fa-home"></i></a></li>
                        <li><a href="/research/highlights.html">Highlights</a></li>
                        <li><a href="/research/publications.html">Publications</a></li>
                        <li><a href="/research/collaborations.html">Collaborations</a></li>

                    </ul>
                </li>

                <li class="dropdown" data-topnav="workingwithus"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Working With Us <span class="fa fa-angle-down hidden-xs"></span></a>
                    <ul class="dropdown-menu" role="menu">
                        <li><a href="/workingwithus/">Working With Us <i class="fa fa-home"></i></a></li>
                        <li><a href="/workingwithus/partnership-opportunities.html">Partnerships</a></li>
                        <li><a href="/workingwithus/partnering-facilities.html">Facilities</a></li>
                        <li><a href="/workingwithus/licensing.html">Licensing</a></li>
                        <li><a href="/workingwithus/commercialization.html">Commercialization</a></li>
                        <li><a href="/workingwithus/procurement.html">Procurement</a></li>
                        <li><a href="/workingwithus/energy-education.html">Energy Education</a> </li>
                        <li><a href="/workingwithus/success-stories.html">Success Stories</a></li>
                        <li><a href="/workingwithus/faqs.html">FAQs</a></li>
                    </ul>
                </li>

                <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Careers <span class="fa fa-angle-down hidden-xs"></span></a>
                    <ul class="dropdown-menu" role="menu">
                        <li><a href="/careers/">Careers <i class="fa fa-home"></i></a></li>
                        <li><a href="/careers/find-job.html">Find a Job</a></li>
                        <li><a href="/careers/your-career.html">Your Career at NREL</a></li>
                        <li><a href="/careers/interns-post-docs.html">Interns &amp; Postdocs</a></li>
                    </ul>
                </li>

            </ul>

      </div>
    </div>
</div>
<!--startindex-->
<!-- == END TOP NAVIGATION == -->


<!-- GLOBAL BREADCRUMBS -->
<!--stopindex-->
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <ol class="breadcrumb invisible">
                    <li><a href="/" title="NREL.gov"><span class="home"><i class="fa fa-home"></i></span></a></li>
                </ol>
            </div>
        </div>
    </div>
<!--startindex--><div class="container" id="content">
<!-- ============= -->
<!-- BEGIN CONTENT -->
<!-- ============= -->










<div class="row">
    <!-- MAIN CONTENT -->
    <div class="col-sm-9 col-sm-push-3">



<h1>Staff Directory</h1>
<p>This name directory includes <strong>phone numbers</strong> and <strong>email addresses</strong> for all NREL staff.</p>

<div class="callout" style="width:60%;float:none;margin:12px auto;">

  <!-- Search Form -->
  <form name="pbsearch" action="/about/staff-directory.php" method="post" class="form form-inline">

    <strong>SEARCH:&nbsp;</strong>&nbsp;
    <input type="text" name="zzsearch" tabindex="1" id="text" class="form-control" />
    <input type="submit" value="Search" class="btn btn-primary" />

    <span style="display:none;">
    <label for="attribute">Select a search type</label>
    <label for="criterion">Select your criteria</label>
    <label for="text">Enter your search term</label>
    </span>
  </form>
  <script language="Javascript" type="text/javascript">document.forms.pbsearch.zzsearch.focus();</script>

</div>


<br /><br />
<!-- <p><a href="/m/staff_directory/">Staff Directory - Mobile version</a></p> -->


<h2>Search Hints</h2>
<p>This directory includes phone numbers and email addresses for all NREL staff. Search by first or last name; this search is not case-sensitive.</p>

<p><a href="mailto:service.center@nrel.gov">Contact us</a> for questions or comments.</p>




    </div>
    <!-- END MAIN CONTENT -->


    <!-- SIDE NAVIGATION -->
    <!--stopindex-->
<div class="col-sm-3 col-sm-pull-9 ">
    <nav class="sidenav" role="navigation">

        <ul class="nav hide">
            <li><a href="/about/mission-programs.html">Mission &amp; Programs</a></li>
            <li><a href="/about/technology-transfer.html">Technology Transfer</a></li>
            <li><a href="/innovation/">Impact</a></li>
            <li><a href="/about/leadership.html">Leadership</a></li>

            <li><a href="/about/community.html">Community</a>
                <ul class="nav hide">
                <li><a href="/education_center/">Education Center</a>
                <li><a href="/about/responsibility.html">Community Involvement</a>
                <li><a href="/about/business.html">Economic Impact</a>
                <li><a href="/about/sustainability.html">Sustainability</a></li>
                <li><a href="/about/ehs.html">Environment, Health, &amp; Safety</a></li>
              </ul>
            </li>
            <li><a href="/about/visiting-nrel.html">Visiting NREL</a>
                <ul class="nav hide" >
                    <li><a href="/about/golden.html">Golden Laboratories &amp; Offices</a>
                        <ul class="nav hide">
                        <li><a href="/about/golden-info.html">Local Information</a></li>
                        <li><a href="/about/golden-security.html">Security Procedures</a></li>
                        </ul></li>
                    <li><a href="/about/nwtc.html">National Wind Technology Center</a>
                        <ul class="nav hide" >
                        <li><a href="/about/nwtc-info.html">Local Information</a></li>
                        </ul></li>
                    <li><a href="/education_center/">Education Center</a></li>
                    <li><a href="/about/dc.html">Washington, D.C. Office</a>
                        <ul class="nav hide">
                        <li><a href="/about/dc-info.html">Local Information</a></li>
                        </ul></li>
                </ul>
            </li>
            <li><a href="/about/awards.html">Awards</a>
                <ul class="nav hide">
                <li><a href="/about/rd-awards.html">R&amp;D 100 Awards</a></li>
                <li><a href="/about/science-awards.html">Scientific &amp; Organizational Awards</a></li>
                <li><a href="/about/building-awards.html">Building Awards</a></li>
                </ul>
            </li>
            <li><a href="/news/">Newsroom</a>
                <ul class="nav hide">
                <li><a href="/news/features/">Feature Stories</a></li>
                <li><a href="/news/press/">News Releases</a></li>
                </ul>
            </li>
            <li><a href="/about/contacts.html">Contact Us</a></li>
        </ul>

    </nav>
</div>
<!--startindex-->
    <!-- END SIDE NAVIGATION -->
</div>















<!-- ============== -->
<!-- END OF CONTENT -->
<!-- ============== -->
</div>
<!-- GLOBAL FOOTER -->

<!-- == GLOBAL FOOTER == -->

<div id="page-tools">
    <!-- ADDTHIS WIDGET -->
    <!--stopindex-->
    <div class="container">
        <div class="row">
            <div class="col-sm-9 col-sm-offset-3">
            <hr>

                <div class="addthis_toolbar">
                <a class="addthis_button_expanded btn btn-default"><i class="fa fa-share"></i> Share</a>
                <a class="addthis_button_email btn btn-default"><i class="fa fa-envelope"></i> Email</a>
                </div>

            </div>
        </div>
    </div>
    <!--startindex-->
    <!-- END ADDTHIS WIDGET -->



    <!-- FEEDBACK WIDGET -->
    <!--stopindex-->
    <script src="/server/feedback/nrel.feedback.jquery.js"></script>

<div class="container">
    <div class="row">
        <div class="col-sm-9 col-sm-offset-3">

            <div id="feedback-container">
                <div id="feedback">



                    <!-- 1st Form -->
                    <div id="feedback-primary" class="feedback-panel">

                        <p>Did you find what you needed?</p>
                        <form  class="feedback-form" name="feedback-primary-form" id="feedback-primary-form" method="post">


                            <label for="yes" class="sr-only">Yes</label>
                            <input type="button"  value="Yes" name="yes_no" id="yes" class="feedback-button-yes button-submit btn btn-default" />

                            <label for="no"  class="sr-only" >No</label>
                            <input type="button"  value="No"  name="yes_no" id="no"  class="feedback-button-no  button-submit btn btn-default" />

                            <input type="hidden" name="formName"   id="formName"   value="" />
                            <input type="hidden" name="url"        id="url"        value="" />
                            <input type="hidden" name="buttonType" id="buttonType" value="" />
                        </form>
                    </div>


                    <!-- 2nd Form -->
                    <div id="feedback-secondary" class="feedback-panel hide">
                        <form  class="feedback-form" name="feedback-secondary-form" id="feedback-secondary-form" method="post">

                            <h3>Thank you for your feedback.</h3>
                            <div>
                                <label for="improvement" >Would you like to take a moment to tell us how we can improve this page?</label>
                            </div>
                            <div class="form-group">
                                <textarea rows="4" name="improvement" id="improvement" class="form-control"></textarea>
                            </div>
                            <div class="form-group">
                                <input type="submit" name="submit"   id="submit"   value="Submit" class="button-submit btn btn-default" />
                            </div>
                            <input type="hidden" name="recordID" id="recordID" value="" />
                        </form>
                    </div>


                    <!-- Thank you -->
                    <div id="feedback-success" class="feedback-panel hide">
                        <h3>We value your feedback.</h3>
                        <p>Thanks! We've received your feedback.</p>
                    </div>


                    <!-- Oops -->
                    <div id="feedback-fail" class="feedback-panel hide">
                        <h3>Something went wrong.</h3>
                        <p>Please try again later.</p>
                    </div>


                </div>
            </div>

        </div>
    </div>
</div>
    <!--startindex-->
    <!-- END FEEDBACK WIDGET -->
</div>



<!--stopindex-->
<footer id="footer">
    <div class="container">
    <div class="row">
        <div class="col-sm-10 col-sm-push-2">
            <div class="row">
                <div class="col-sm-2">
                    <p class="header"><a href="/">Home <i class="fa fa-angle-double-right"></i></a></p>
                </div>
                <div class="col-sm-8">
                    <div class="row">
                        <div class="col-sm-12">
                            <p class="header"><a href="/research/">Research <i class="fa fa-angle-double-right"></i></a></p>
                        </div>
                        <div class="col-sm-3">
                        <ul>
                        <li><a href="/bioenergy/">Bioenergy</a></li>
                        <li><a href="/buildings/">Buildings Efficiency</a></li>
                        <li><a href="https://energysciences.nrel.gov/chemical_materials/chemistry_and_nanoscience">Chemistry &amp; Nanoscience</a></li>
                        <li><a href="https://energysciences.nrel.gov/csc">Computational Science</a></li>
                        </ul>
                        </div>
                        <div class="col-sm-3">
                        <ul>
                        <li><a href="/csp/">Concentrating Solar Power</a></li>
                        <li><a href="/electricity/">Electricity Integration</a></li>
                        <li><a href="/analysis/">Energy Analysis</a></li>
                        <li><a href="/esi/">Energy Systems Integration</a></li>
                        <li><a href="/geothermal/">Geothermal Energy</a></li>
                        </ul>
                        </div>
                        <div class="col-sm-3">
                        <ul>
                        <li><a href="/hydrogen/">Hydrogen &amp; Fuel Cells</a></li>
                        <li><a href="/materials-science/">Materials Science</a></li>
                        <li><a href="/pv/">Photovoltaics</a></li>
                        <li><a href="/solar/">Solar</a></li>
                        <li><a href="/tech_deployment/">Technology Deployment</a></li>
                        </ul>
                        </div>
                        <div class="col-sm-3">
                        <ul>
                        <li><a href="/transportation/">Transportation</a></li>
                        <li><a href="/water">Water Power</a></li>
                        <li><a href="/wind/">Wind Energy</a></li>
                        </ul>
                        </div>
                    </div>
                </div>

                <!-- Follow -->
                <div class="col-sm-2">
                    <p class="header">Follow NREL</p>
                    <ul class="social-links list-inline">
                    <li><a href="https://www.facebook.com/nationalrenewableenergylab"><i class="fa fa-facebook-square"></i></a></li>
                    <li><a href="/news/"><i class="fa fa-envelope"></i></a></li>
                    <li><a href="https://twitter.com/nrel/"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com/company/national-renewable-energy-laboratory"><i class="fa fa-linkedin-square"></i></a></li>
                    <li><a href="https://www.youtube.com/user/NRELPR/"><i class="fa fa-youtube"></i></a></li>
                    <li><a href="https://www.instagram.com/nationalrenewableenergylab/"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="http://feeds.feedburner.com/NrelFeatureStories"><i class="fa fa-rss-square"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- NREL is... -->
        <div class="col-sm-2 col-sm-pull-10 border-right">
            <div class="row">
                <div class="col-sm-12 only-nrel">
                    <p class="nrel-attr">NREL is a national laboratory of the <a href="http://energy.gov/">U.S. Department of Energy</a>, <a href="http://energy.gov/eere/office-energy-efficiency-renewable-energy">Office of Energy Efficiency and Renewable Energy</a>, operated by the <a href="http://www.allianceforsustainableenergy.org/">Alliance for Sustainable Energy, LLC</a>.</p>
                </div>
                <div class="col-md-6">
                    <ul>
                    <li><a href="/security.html">Security &amp; Privacy Policy</a></li>
                    <li><a href="/accessibility.html">Accessibility</a></li>
                    <li><a href="/disclaimer.html">Disclaimer</a></li>
                    <li><a id="contact-link" href="/webmaster.html">Contact Us</a></li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <ul>
                    <li><a href="/careers/">Apply for a Job</a></li>
                    <li><a href="http://developer.nrel.gov/">Developers</a></li>
                    <li><a href="http://energy.gov">Energy.gov</a></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>

    <div class="row">
        <div class="col-sm-2 border-right">
            <img src="/client/img/logo_doe_footer.svg" alt="U.S. Department of Energy" class="logo">
        </div>
    </div>



    </div>
</footer>
<!--startindex-->
<!-- == END GLOBAL FOOTER == -->

<!-- LOCAL SCRIPTS -->
<!-- Global plugins -->
<script src="/client/js/newsy/jquery.newsy.min.js"></script>
<script src="/client/js/wuweather/jquery.wuweather.min.js"></script>
<script src="/client/vendor/addtocalendar/atc.min.js"></script>


<!-- Local plugins -->
<!-- <script src="client/js/plugins.min.js"></script> -->


<!-- Application / initialization -->
<script src="/about/client/js/app.min.js"></script>


<!-- GLOBAL SCRIPTS -->

    <!-- == GLOBAL SCRIPTS == -->
    <!-- Bootstrap -->
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>

    <!-- Lightbox plugin -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/3.3.0/ekko-lightbox.min.js"></script>

    <!-- Icons plugin -->
    <script src="/client/js/iconomatic/jquery.iconomatic.min.js"></script>

    <!-- AddThis Widget -->
    <script src="//s7.addthis.com/js/300/addthis_widget.js#pubid=nrel" async></script>

    <!-- JW Player -->
    <script src="/client/vendor/jw6/jwplayer.js"></script>
    <script>jwplayer.key="gj1PPeb7RFVLpZpmChWEWyTT9wqRfMlQnOG4XhIrjnM=";</script>

    <!-- Global plugins -->
    <!-- <script src="/client/js/plugins.min.js"></script> -->

    <!-- Global scripts -->
    <script src="/client/js/app.min.js"></script>
    <!-- == END GLOBAL SCRIPTS == -->

</body>
</html>
