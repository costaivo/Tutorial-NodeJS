Create a REST API’s  to allow the following operations for usage of scratch cards for every user transaction. 

  

Users 

UserID 

Firstname 

Lastname 

IsActive 

  

Transaction 

TransactionID 

Amount 

DateofTransaction 

UserID 

ScratchCardGUID 

  

ScratchCards 

ScratchCardGUID 

Amount 

ScratchCardExpiryDate 

Scratched 

IsActive 

  

Requirements: 

 Create new database in mysql 

Design the tables with proper datatypes , Primary keys and Foreign Keys 

 Write API end points to Create/Read/Update/Delete (CRUD) users  

Write API end point to generate 30 new scratch cards and set the expiry date to be 10 days after the day of generation. Also deactivate all existing unused scratch cards during new generation. 

Write API endpoint to  add transactions and associate an user and unused ScratchCardGUID to each transaction. ImplementServer side validations to make sure the data send to the API endpoint is valid data.  
Example: Valid UserID, Unused Scratch Card ID, not expired scratch card Id.  

Write API endpoint to get all unused scratch cards  

 Write API enpoint to get transactions based on various filters  

DateOfTranscation 

User 

Amount  
