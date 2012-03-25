/* DO NOT MODIFY. This file was compiled Mon, 30 Jan 2012 17:48:33 GMT from
 * /Volumes/Internal/Stuff/Work/Ur-ban/films_backbone/app/coffeescripts/films/routers.coffee
 */

(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  jQuery(function() {
    var FilmRouter, _ref;
    FilmRouter = (function(_super) {

      __extends(FilmRouter, _super);

      function FilmRouter() {
        FilmRouter.__super__.constructor.apply(this, arguments);
      }

      FilmRouter.prototype.routes = {
        '': 'home'
      };

      FilmRouter.prototype.initialize = function() {
        return this.view = new app.FilmsView({
          collection: app.Films
        });
      };

      FilmRouter.prototype.home = function() {
        return $('#wrap').empty();
      };

      return FilmRouter;

    })(Backbone.Router);
    this.app = (_ref = window.app) != null ? _ref : {};
    return this.app.FilmRouter = FilmRouter;
  });

}).call(this);
