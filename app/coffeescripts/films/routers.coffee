# ROUTERS

jQuery ->

  class FilmRouter extends Backbone.Router
    routes:
      '':'home'
    initialize: ->
      @view = new app.FilmsView collection: app.Films
    home: ->
      $('#wrap').empty()

  @app = window.app ? {}
  @app.FilmRouter = FilmRouter
