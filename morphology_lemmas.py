# -*- coding: utf-8 -*-

"""
Example code to call Rosette API to get lemmas for words in a piece of text.
"""

import argparse
import json
import os

from rosette.api import API, DocumentParameters, MorphologyOutput


def run(key, altUrl='https://api.rosette.com/rest/v1/'):
    # Create an API instance
    api = API(user_key=key, service_url=altUrl)

    morphology_lemmas_data = "The fact is that the geese just went back to get a rest and I'm not banking on their return soon"
    params = DocumentParameters()
    params["content"] = morphology_lemmas_data
    return api.morphology(params, MorphologyOutput.LEMMAS)


parser = argparse.ArgumentParser(formatter_class=argparse.ArgumentDefaultsHelpFormatter, description='Calls the ' + os.path.splitext(os.path.basename(__file__))[0] + ' endpoint')
parser.add_argument('-k', '--key', help='Rosette API Key', required=True)
parser.add_argument('-u', '--url', help="Alternative API URL", default='https://api.rosette.com/rest/v1/')

if __name__ == '__main__':
    args = parser.parse_args()
    result = run(args.key, args.url)
    print(json.dumps(result, indent=2, ensure_ascii=False, sort_keys=True).encode("utf8"))
