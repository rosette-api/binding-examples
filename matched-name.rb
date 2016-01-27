#!/usr/bin/env ruby

require "net/http"
require "net/https"
require "json"

uri = URI.parse("https://api.rosette.com/rest/v1/matched-name")
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true if uri.scheme == 'https'

request = Net::HTTP::Post.new(uri.request_uri)
request["user_key"] = ARGV[0] # your api key
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
matched_name_data1 = "Sample 1"
matched_name_data2 = "Sample 2"
names = {
    name1: { text: matched_name_data1 },
    name2: { text: matched_name_data2 }
}
JSONbody = names.to_json

request.body = JSONbody

response = http.request(request)

puts JSON.pretty_generate(JSON.parse(response.body))
