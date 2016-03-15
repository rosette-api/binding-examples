#!/usr/bin/env ruby
# encoding: utf-8

require "net/http"
require "net/https"
require "json"

api_key, url = ARGV
raise "API Key required" unless api_key

if !url
    url = "https://api.rosette.com/rest/v1/name-similarity"
else
    url = url + "/name-similarity"
end

uri = URI.parse(url)
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true if uri.scheme == 'https'

request = Net::HTTP::Post.new(uri.request_uri)
request["X-RosetteAPI-Key"] = api_key
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
matched_name_data1 = "Michael Jackson"
matched_name_data2 = "迈克尔·杰克逊"
names = {
    name1: { text: matched_name_data1 },
    name2: { text: matched_name_data2 }
}
JSONbody = names.to_json

request.body = JSONbody

response = http.request(request)

puts JSON.pretty_generate(JSON.parse(response.body))
