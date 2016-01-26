﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Script.Serialization;
using rosette_api;

namespace rosette_apiExamples
{
    class morphology_lemmas
    {
        /// <summary>
        /// Example code to call Rosette API to get lemmas for words in a piece of text.
        /// Requires Nuget Package:
        /// rosette_api
        /// </summary>
        static void Main(string[] args)
        {
            //To use the C# API, you must provide an API key
            string apikey = "Your API key";

            //You may set the API key via command line argument:
            //morphology_lemmas yourapikeyhere
            if (args.Length != 0)
            {
                apikey = args[0];
            } 
            try
            {
                CAPI MorphologyCAPI = new CAPI(apikey);
                string morphology_lemmas_data = "The fact is that the geese just went back to get a rest and I'm not banking on their return soon";
                //The results of the API call will come back in the form of a Dictionary
                Dictionary<string, Object> MorphologyResult = MorphologyCAPI.Morphology(morphology_lemmas_data, null, null, null, null, "lemmas");
                Console.WriteLine(new JavaScriptSerializer().Serialize(MorphologyResult));
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception: " + e.Message);
            }
        }
    }
}
