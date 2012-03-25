/* DO NOT MODIFY. This file was compiled Mon, 30 Jan 2012 18:19:20 GMT from
 * /Volumes/Internal/Stuff/Work/Ur-ban/films_backbone/app/coffeescripts/films/models.coffee
 */

(function() {
  var Film, _ref,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Film = (function(_super) {

    __extends(Film, _super);

    function Film() {
      Film.__super__.constructor.apply(this, arguments);
    }

    Film.prototype.defaults = {
      english_name: "",
      foreign_name: "",
      imdb: "",
      format: "",
      rating: ""
    };

    return Film;

  })(Backbone.Model);

  this.app = (_ref = window.app) != null ? _ref : {};

  this.app.Film = Film;

}).call(this);
