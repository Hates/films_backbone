# MODELS

class Film extends Backbone.Model
  defaults:
    english_name: ""
    foreign_name: ""
    imdb: ""
    format: ""
    rating: ""

@app = window.app ? {}
@app.Film = Film
