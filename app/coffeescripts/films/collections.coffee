# COLLECTIONS

class Films extends Backbone.Collection
  model: app.Film
  url: '/films.json'

@app = window.app ? {}
@app.Films = new Films
