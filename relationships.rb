require '../rosette_api'
require '../parameters'

api_key, url = ARGV

if !url
  rosette_api = RosetteAPI.new(api_key)
else
  rosette_api = RosetteAPI.new(api_key, url)
end

params = Parameters.new
params.content = 'The Ghostbusters movie was filmed in Boston.'
response = rosette_api.get_relationships(params)
puts JSON.pretty_generate(response)