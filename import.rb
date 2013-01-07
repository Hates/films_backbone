require 'json'

# Pass in args imdb, seen, english_name, foreign_name, format, rating
attributes = %w(imdb seen english_name foreign_name format rating)

json_file = "./public/films.json"

films_json = File.open(json_file).read
films = JSON.parse(films_json)

current_id = films.last["id"].to_i

new_film = {}
new_film["id"] = (current_id + 1).to_s
attributes.each_with_index do |attr, index|
  new_film[attr] = ARGV[index]
end

films << new_film
puts JSON.pretty_generate(films)
File.open(json_file, 'w') { |file| file.write(JSON.pretty_generate(films)) }

#ruby import.rb "imdb_id" "2013-00-00" "english_name" "" "Blue-Ray" "5"
