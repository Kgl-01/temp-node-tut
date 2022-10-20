   //Common JS, every file is module(by default)
    //Modules : Encapsulated code(Only share minimum)


    //ex for encapsulated code. It remains as a local variable.
    const secret = 'Super Secret'
//------------------------------------------------------------------
    // Below are the global variable which are being exported and can be used anywhere in the module.
    //Share

    const amma = 'Indra';
    const sodari = 'Kavya';
    
    module.exports = {amma,sodari};
