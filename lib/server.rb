require "./lib/init"

class FilmsApp < Sinatra::Base

  register Barista::Integration::Sinatra

  disable :logging
  set :root, File.dirname(__FILE__) + "/../"

  RETURN_HTTP_ERRORS_FOR_CLIENT_DEBUGGING = false

  get "/" do
    send_file "public/index.html", :type => 'text/html', :disposition => 'inline'
  end

  # Get a list of all records.
  #get "/api/tasks" do
    #content_type :json
    #@db.members.to_json
  #end

end
