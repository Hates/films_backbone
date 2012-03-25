/* DO NOT MODIFY. This file was compiled Sun, 25 Mar 2012 22:29:21 GMT from
 * /Volumes/Internal/Stuff/Work/Ur-ban/films_backbone/app/coffeescripts/films/views.coffee
 */

(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  jQuery(function() {
    var FilmView, FilmsView, _ref;
    FilmView = (function(_super) {

      __extends(FilmView, _super);

      function FilmView() {
        FilmView.__super__.constructor.apply(this, arguments);
      }

      FilmView.prototype.className = 'film';

      FilmView.prototype.tagName = 'tr';

      FilmView.prototype.template = _.template($('#film-template').html());

      FilmView.prototype.render = function() {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
      };

      return FilmView;

    })(Backbone.View);
    FilmsView = (function(_super) {

      __extends(FilmsView, _super);

      function FilmsView() {
        FilmsView.__super__.constructor.apply(this, arguments);
      }

      FilmsView.prototype.el = '#films';

      FilmsView.prototype.initialize = function(options) {
        return this.collection.bind('reset', this.render, this);
      };

      FilmsView.prototype.render = function() {
        var film, _i, _len, _ref;
        _ref = this.collection.models.reverse();
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          film = _ref[_i];
          $(this.el).append((new FilmView({
            model: film
          })).render().el);
        }
        return this;
      };

      return FilmsView;

    })(Backbone.View);
    this.app = (_ref = window.app) != null ? _ref : {};
    return this.app.FilmsView = FilmsView;
  });

}).call(this);
