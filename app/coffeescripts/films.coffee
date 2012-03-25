@app = window.app ? {}

jQuery ->

  @app.router = new app.FilmRouter
  Backbone.history.start({pushState:true})

  @app.Films.fetch()
