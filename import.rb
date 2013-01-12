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

#ruby import.rb "tt1656190" "2012-08-23" "Safe" "" "Blue-Ray" "5.5" && \
#ruby import.rb "tt1440129" "2012-09-31" "Battleship" "" "Blue-Ray" "4" && \
#ruby import.rb "tt1718199" "2012-09-01" "Dragon" "Wu xia" "Blue-Ray" "6.5" && \
#ruby import.rb "tt0848228" "2012-09-02" "Avengers Assemble" "" "Blue-Ray" "5.5" && \
#ruby import.rb "tt0443676" "2012-09-15" "Undisputed II" "" "Blue-Ray" "6" && \
#ruby import.rb "tt1915581" "2012-10-25" "Magic Mike" "" "Blue-Ray" "6" && \
#ruby import.rb "tt1637725" "2012-12-11" "Ted" "" "Blue-Ray" "6.5" && \
#ruby import.rb "tt1345836" "2012-11-17" "Dark Knight Rises" "" "Blue-Ray" "9" && \
#ruby import.rb "tt1386703" "2012-12-05" "Total Recall" "" "Blue-Ray" "6.5" && \
#ruby import.rb "tt1194173" "2012-12-19" "The Bourne Legacy" "" "Blue-Ray" "6.5" && \
#ruby import.rb "tt2125666" "2012-12-21" "The Queen of Versailles" "" "Blue-Ray" "7.5" && \
#ruby import.rb "tt0368909" "2012-12-23" "Ong Bak" "" "Blue-Ray" "6" && \
#ruby import.rb "tt1078940" "2012-12-25" "Couples Retreat" "" "Blue-Ray" "6" && \
#ruby import.rb "tt1343727" "2012-12-29" "Dredd" "" "Blue-Ray" "8" && \
#ruby import.rb "tt1276104" "2012-12-30" "Looper" "" "Blue-Ray" "7"
#ruby import.rb "tt0365737" "2013-01-11" "Syriana" "" "Blue-Ray" "6"
