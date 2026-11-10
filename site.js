document.addEventListener('DOMContentLoaded', function () {
  // Navbar: mobile menu (Materialize Sidenav)
  M.Sidenav.init(document.querySelectorAll('.sidenav'));

  // Any element with class "tooltipped" gets a Materialize Tooltip
  M.Tooltip.init(document.querySelectorAll('.tooltipped'));
});
