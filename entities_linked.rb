#!/usr/bin/env ruby

require "net/http"
require "net/https"
require "json"

uri = URI.parse("https://api.rosette.com/rest/v1/entities/linked")
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true if uri.scheme == 'https'

request = Net::HTTP::Post.new(uri.request_uri)
request["user_key"] = ARGV[0]  # your api key
request["Content-Type"] = "application/json"
request["Accept"] = "application/json"
entities_linked_text_data = "Sample"
content = {
	content: entities_linked_text_data
}
JSONbody = content.to_json

request.body = JSONbody

response = http.request(request)

puts JSON.pretty_generate(JSON.parse(response.body))
