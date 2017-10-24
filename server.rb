require 'rubygems'
require 'bundler/setup'
require 'dotenv/load'

# require your gems as usual
require 'sinatra'
require 'todoable'
require 'json'

get '/api/lists' do
  lists = client.lists
  arr = lists.map(&:attributes)
  content_type :json
  arr.to_json
end

get '/api/lists/:id' do
  list = client.find_list(params['id'])
  content_type :json
  list.attributes.to_json
end

post '/api/lists/:list_id' do
  parse_body
  new_item = client.create_item(
    list_id: params['list_id'],
    name: @request_payload['name']
  )
  content_type :json
  {item: new_item.attributes}.to_json
end

put '/api/lists/:list_id/items/:id/done' do
  if client.finish(id: params['id'], list_id: params['list_id'])
    status 200
    content_type :json
    {id: params['id']}.to_json
  else
    status 500
  end
end

delete '/api/lists/:list_id/items/:id' do
  if client.delete(id: params['id'], list_id: params['list_id'])
    status 200
    content_type :json
    {id: params['id']}.to_json
  else
    status 500
  end
end

def parse_body
  request.body.rewind
  @request_payload = JSON.parse request.body.read
end


def client
  Todoable::Client.build(username: ENV['USERNAME'], password: ENV['PASSWORD'])
end

get '*' do
  send_file File.expand_path('index.html', settings.public_folder)
end
