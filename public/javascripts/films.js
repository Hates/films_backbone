/* DO NOT MODIFY. This file was compiled Mon, 30 Jan 2012 17:48:25 GMT from
 * /Volumes/Internal/Stuff/Work/Ur-ban/films_backbone/app/coffeescripts/films.coffee
 */

(function() {
  var _ref;

  this.app = (_ref = window.app) != null ? _ref : {};

  jQuery(function() {
    this.app.router = new app.FilmRouter;
    Backbone.history.start({
      pushState: true
    });
    return this.app.Films.fetch();
  });

}).call(this);
