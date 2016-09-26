/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 */

import { assert } from "chai";

import { setApiToken } from "../../src/conjure/static/utils";
import { ICalculatorService } from "../../src/conjure/typescriptetetest/api/calculatorService";
import { CalculatorService } from "../../src/conjure/typescriptetetest/api/calculatorServiceImpl";

describe.only("End to end calculator service tests", () => {
    let service: ICalculatorService;

    before(() => {
        setApiToken("Bearer token");
        service = new CalculatorService("http://localhost:8554/typescript-ete-test/api");
    });

    it("Test identities", (done) => {
        assert.isTrue(true);
        service.getIdentities().then((response) => {
            assert.strictEqual(response.additive, 0);
            assert.strictEqual(response.multiplicative, 1);
            done();
        }).catch((err) => {
            done(err);
        });
    });
});
