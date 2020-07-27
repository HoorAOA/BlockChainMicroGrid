pragma solidity ^0.4.26;

contract ExchangeFactory {
    address[] public deployedExchanges;
    
    function createExchange() public view returns (address) {
        address newExchange = new Exchange(msg.sender);
        deployedExchanges.push(newExchange);

        return newExchange;
    }
    
    function getDeployedExchanges() public view returns (address[]) {
        return deployedExchanges;
    }

    function getExchangesCount() public view returns (uint) {
        return deployedExchanges.length;
    }

}

contract Exchange {
    struct ExchangeRequest {
        address recipient;
        bool complete;
        uint units;
        uint price;
        address manager;
    }
    
    address public manager;
    address[] public MoneySender;
    ExchangeRequest[] public exchangeRequests;
    
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Exchange(address creator) public {
        manager = creator;
        
    }
    
    function createRequest(uint Price, address recipient, uint Units) 
        public restricted {
        
        ExchangeRequest memory newExchangeRequest = ExchangeRequest({
            manager: msg.sender,
            units: Units,
            price: Price,
            complete: false,
            recipient: recipient
        });
        
        exchangeRequests.push(newExchangeRequest);
    }

    function contribute() public payable {
        require(msg.value > 0 ether);
        require(MoneySender.length == 0);
        MoneySender.push(msg.sender);
        //approvers.push(msg.sender);
    }

    function finalizeRequest(uint index) public   {
        ExchangeRequest storage request = exchangeRequests[index];
        
        require(msg.sender == manager);
        require(!request.complete);
        
        request.recipient.transfer(request.price);

        // arduino trigger code
        request.complete = true;
        MoneySender = new address[](0);
    }

    // function getSummary() public view returns (
    //     address, uint, uint, uint, address
    // ) {
    //     return (
    //     manager
    //     );
    // }

    function getRequestsCount() public view returns (uint) {
        return exchangeRequests.length;
    }
   
}