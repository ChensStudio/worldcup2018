/**
Template Controllers

@module Templates
*/

var gameAbi = [ { "constant": false, "inputs": [ { "name": "x", "type": "uint256" } ], "name": "set", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "get", "outputs": [ { "name": "", "type": "uint256", "value": "5" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" } ];

/**
The execute contract template

@class [template] elements_executeContract
@constructor
*/

Template['elements_executeContract'].onCreated(function(){
    var template = this;

    // Set Defaults
    TemplateVar.set('sending', false);

    // show execute part if its a custom contract
    if(CustomContracts.findOne({address: template.data.address}))
        TemplateVar.set('executionVisible', true);

    // check address for code
    chain3.mc.getCode(template.data.address, function(e, code) {
        if(!e && code.length > 2) {
            TemplateVar.set(template, 'hasCode', true);
        }
    });
});


Template['elements_executeContract'].helpers({
    /**
    Reruns when the data context changes

    @method (reactiveContext)
    */
    'reactiveContext': function() {
        var contractInstance = chain3.mc.contract(this.jsonInterface).at(this.address);

        var contractFunctions = [];
        var contractConstants = [];

        _.each(this.jsonInterface, function(func, i){
            func = _.clone(func);

            // Walk throught the jsonInterface and extract functions and constants
            if(func.type == 'function') {
                func.contractInstance = contractInstance;
                func.inputs = _.map(func.inputs, Helpers.createTemplateDataFromInput);

                if(func.constant){
                    // if it's a constant                        
                    contractConstants.push(func);                    
                } else {
                    //if its a variable
                    contractFunctions.push(func);                
                }
                
            }
        });

        TemplateVar.set('contractConstants', contractConstants);
        TemplateVar.set('contractFunctions', contractFunctions);
    }
});