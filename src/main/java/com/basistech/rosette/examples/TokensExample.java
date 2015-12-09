package com.basistech.rosette.examples;

import com.basistech.rosette.api.RosetteAPI;
import com.basistech.rosette.apimodel.TokensResponse;

/**
 * Example which demonstrates the tokens api.
 */
public final class TokensExample extends ExampleBase {
    public static void main(String[] args) {
        try {
            String text = "${tokens_data}";

            RosetteAPI rosetteApi = new RosetteAPI(getApiKeyFromSystemProperty());
            TokensResponse response = rosetteApi.getTokens(text, null, null);
            System.out.println(responseToJson(response));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
