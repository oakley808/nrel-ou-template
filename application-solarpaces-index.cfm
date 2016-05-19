<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Concentrating Solar Power Projects | Concentrating Solar Power | NREL</title>

    <!-- Global application head code -->
    <cfinclude template="/client/template/app-head.html">
    <script>
        $(function() {
            nrel = $.extend({}, window.nrel)
            nrel.pagevars = $.extend(nrel.pagevars, {
                isHomePage: true
            })
        })
    </script>

</head>
<body>

<!-- Site application banner -->
<cfinclude template="client/template/banner.html">

<div class="container" id="content">
    <div class="row">
    <!-- MAIN CONTENT -->
        <div class="col-sm-9 col-sm-push-3">



            <h1>Concentrating Solar Power Projects</h1>


            <!--stopindex-->
            <div class="well pull-right col-sm-4">
                <h3>SolarPACES Snapshot</h3>
                <p><a href="http://www.solarpaces.org/">SolarPACES</a>, an international program of the <a href="http://www.iea.org/">International Energy Agency</a>, furthers collaborative development, testing, and marketing of concentrating solar power plants. Activities include testing large-scale systems and developing advanced technologies, components, instrumentation, and analysis techniques. Three ongoing Tasks are <a href="http://www.solarpaces.org/Tasks/Task1/task_i.htm">Concentrating Solar Electric Power Systems</a>, <a href="http://www.solarpaces.org/Tasks/Task2/task_ii.htm">Solar Chemistry Research</a>, and <a href="http://www.solarpaces.org/Tasks/Task3/task_iii.htm">Solar Technology and Applications</a>.</p>
                <p>Founded in 1977, SolarPACES now has 13 members: Algeria, Australia, Egypt, the European Commission, France, Germany, Israel, Mexico, South Africa, South Korea, Spain, Switzerland, and the United States.</p>
            </div>
            <!--startindex-->


            <p class="lead">Working with member countries, <a href="http://www.solarpaces.org/">SolarPACES</a>&mdash;Solar Power and Chemical Energy Systems&mdash;has compiled data on concentrating solar power (CSP) projects around the world that have plants that are either operational,  under construction, or under development. CSP technologies include parabolic trough, linear Fresnel reflector, power tower, and dish/engine systems.</p>

            <p>For individual concentrating solar power projects, you will find profiles that include background information, a listing of participants in the project, and data on the power plant configuration.</p>

            <p>These pages should help utilities, financiers, manufacturers, and anyone interested in renewable-energy options to find information on the growing number of concentrating solar power projects around the world.</p>

            <cfquery datasource="#dsn#" name="CountryCount">
            SELECT COUNT(DISTINCT Country) AS CountryCount
            FROM dataProjects
            </cfquery>

            <h2>Browse the Project Profiles</h2>
            <p>You can browse project profiles under the following categories:</p>

            <ul>
            <li><a href="/csp/solarpaces/by_country.cfm">Country</a>&mdash;listing by one of <cfoutput>#CountryCount.CountryCount#</cfoutput> countries</li>
            <li><a href="/csp/solarpaces/by_project.cfm">Project name</a>&mdash;alphabetical listing by full project name</li>
            <li><a href="/csp/solarpaces/by_technology.cfm">Technology</a>&mdash;listing by parabolic trough, linear Fresnel reflector, power tower, or dish/engine systems</li>
            <li><a href="/csp/solarpaces/by_status.cfm">Status</a>&mdash;listing by whether projects have plants that are operational, under construction, under development, request for offer, or currently non-operational.</li>
            </ul>
            <p>You can also <a href="cfc/csp.cfc?method=exportProjects">download</a> comma-delimited data on all projects.</p>

            <h2>About the Project Profiles</h2>
            <p>The <a href="/csp/">National Renewable Energy Laboratory's CSP Program</a> assists SolarPACES in maintaining the projects database behind this Web site. Project operators or developers supply information for the key data fields for their projects. SolarPACES experts then review the information to ensure accuracy and completeness. The material is updated regularly, and because this site is new, we are still expanding the number of projects, especially those that are under development.</p>

        </div>
        <!-- END MAIN CONTENT -->

        <!-- SIDE NAVIGATION -->
        <cfinclude template="client/template/sidenav.html">
        <!-- END SIDE NAVIGATION -->
    </div>
</div>
<!-- Site scripts -->
<cfinclude template="client/template/scripts.html">

<!-- Global scripts -->
<cfinclude template="/client/template/app-scripts.html">

<!-- Global footer -->
<cfinclude template="/client/template/app-footer.html">
</body>
</html>
