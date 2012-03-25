/* DO NOT MODIFY. This file was compiled Mon, 30 Jan 2012 17:42:07 GMT from
 * /Volumes/Internal/Stuff/Work/Ur-ban/films_backbone/app/coffeescripts/films/collections.coffee
 */

(function() {
  var Films, _ref,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Films = (function(_super) {

    __extends(Films, _super);

    function Films() {
      Films.__super__.constructor.apply(this, arguments);
    }

    Films.prototype.model = app.Film;

    Films.prototype.url = '/films.json';

    return Films;

  })(Backbone.Collection);

  this.app = (_ref = window.app) != null ? _ref : {};

  this.app.Films = new Films;

}).call(this);
