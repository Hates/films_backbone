# VIEWS

jQuery ->

  class FilmView extends Backbone.View
    className: 'film'
    tagName: 'tr'
    template: _.template($('#film-template').html())
    render: ->
      $(@el).html @template(@model.toJSON())
      @

  class FilmsView extends Backbone.View
    el: '#films'
    initialize: (options) ->
      @collection.bind 'reset', @render, @
    render: ->
      for film in @collection.models.reverse()
        $(@el).append (new FilmView model: film).render().el
      @

  @app = window.app ? {}
  @app.FilmsView = FilmsView
