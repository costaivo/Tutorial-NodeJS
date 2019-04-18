Ecommerce Application 

Write APIs for following: 

All CRUD operations. 

User should be able to see the list of available products. 

Users can add product to their cart. 

Users can see the list of items in their cart. 

Users can place and see their orders. 

 

 Employee  Leave Management system 

Write Apis for following: 

All CRUD operations. 

Allow Employee to apply for leaves 

Employee can have apply for different leave types 

Show list of holidays for the current year 

 

 Car Rental System 

Write Apis for following: 

All CRUD operations. 

Get list of all the cars. 

Get the list of available cars. 

Book the car (from/to). 

Create transaction to associate user with the available car. 

 

 Society maintenance. 

Write Apis for following: 

All CRUD operations. 

Allow associating owners to premises 

Allow generating society Maintenace bills 

 

 

 Event management system 

Write Apis for following: 

All CRUD operations. 

Allow booking of an Event in a Event management company 

Allow associating an Event Manager with an Event 

 

 

 Hotel Management system 

Write Apis for following: 

All CRUD operations. 

To list hotels. 

List types of rooms and their availability. 

Customer can book the hotel room. 

List customer bookings. 

 

------------------------------------------------------------------------------------------------------------------------------------- 

Page Break
 

Details 

 

Ecommerce Application 

Allow Adding Items to a cart 

Allow Removing items to a cart 

Allow Entering Items in the system 

Item Name (Example: Nokia 110) 

Category  (Example: Electoronics) 

Sub Category (Example: Mobile) 

Price 

Allow Adding inventory details of the item in the system 

ItemID 

Quantity 

User Should not able to add items to the cart if the item is not in the inventory. 

Allow User to checkout the cart and make payment. Once the cart is checkout create an order. Payment mode should be captured in the system, I.e if payment was made via credit card, net banking , UPI.   

No third party integration is required for payment. Just the payment mode and amount paid.  

Allow to update the status of the order.  

Order Received by Seller 

Order Processing 

Order Dispatched 

Order Received by Client 

Show list of orders based on the order Status as Parameter 

Show List of Orders based on the order date 

Show list of Orders based on customer Id 

 

Instructions: 

Design the Database Tables and fields based on the above details.  

Create API endpoints which can be later consumed by Frontend application to implement the UI.  

Save all API endpoints in postman so that they can be tested by Frontend developer. 

Handle Validations for all required API endpoints. 

 

 

 

Page Break
 

 

 Employee Leave Management system 

 

Allow adding employee details in the system  

Name  

Date of Birth  

PAN Card 

Date of Joining 

Designation 

Employee will be allocated Earned leaves based on the number of years he/she is in service in the organization 

New Employee: 15days per year 

Employee who has worked for more than 1 year : 18 days 

Employee who has worked for more than 3 years : 20 days 

Employee who has worked for more than 5 years : 22days 

Allow Employee to apply for leave for a single day or multiple days. Leave can be of different types.  

Sick Leave  

Earned Leave 

NOTE: An Employee will be allocated 5 days of sick leave in addition to his Earned leaves.  

Leave can be applied either for full day or half day. If half day then employee has to specify which half of the day (morning/evening) 

While applying leave, a reason should be mentioned for applying the leave.  

If it is Sick leave then Medical certificate should be uploaded. Provide api to upload the medical certificate.   

Create API to approve Leaves applied by employee 

Show list of leaves pending for approval  

Show list of leaves already approved 

Show the list of people on leave for a selected date, or range of dates. 

Instructions: 

Design the Database Tables and fields based on the above details.  

Create API endpoints which can be later consumed by Frontend application to implement the UI.  

Save all API endpoints in postman so that they can be tested by Frontend developer. 

Handle Validations for all required API endpoints. 

Page Break
 

 

 Car Rental System 

Allow adding details of car in the system.  

VIN Number ( 17 characters number, which will be unique for each car) 

Car Brand Name 

Car Model Name 

With A/C or Without A/C 

Year of Manufacture 

Vehicle Registration Number (RTO Number displayed on car) 

Allow Saving details of the person booking the car in the system 

Name  

Date Of birth 

Address 

Driving License Number 

Get the list of all cars available for booking on a selected day. If past date is provided as input, display appropriate error message, indicating that booking cannot be done for past date.  

Get the list of all cars in the system grouped by Car Brand Name and Car Model Name.  

Allow a user to book a car either for a single day or for multiple days.  
Note: A car cannot be booked by two people on the same day. I.e if a car is returned by User A on 01-JAN-2019 and another user tries to book it on 01-JAN-2019 then it should not be allowed. As the car needs to be washed and cleaned before it is rented to the next person. The same car can be booked only on 02-JAN-2019. 

 

 

Instructions: 

Design the Database Tables and fields based on the above details.  

Create API endpoints which can be later consumed by Frontend application to implement the UI.  

Save all API endpoints in postman so that they can be tested by Frontend developer. 

Handle Validations for all required API endpoints. 

 

Page Break
 

 

 

 Create an Application for Society maintenance. 

Allow Adding Shops/Flats/Row Villa's Data into the system 

Associate Owner to Shops/Flat/Row Villa into the system 

Allow ability to capture information if shop/Flat/Row Villa is given on Rent. 

Generate Monthly Maintenance bills for Flat/Row Villa. 

Bill Should be generated based on area of the flat/Row Villa 

If premises is given on RENT then additional charge of Rs. 500 will be added 

If premises is an shop then Flat Maintenace charge of Rs. 1000 will be charged. (No calculations on area for shops) 

Allow Saving Transaction of Maintenance paid towards the society maintenance bill. Capture the mode of payment, Amount and Bill No. Do not allow saving a transaction if bill for the premises is not generated or if already paid for the month. 

 

Instructions: 

Design the Database Tables and fields based on the above details.  

Create API endpoints which can be later consumed by Frontend application to implement the UI.  

Save all API endpoints in postman so that they can be tested by Frontend developer. 

Handle Validations for all required API endpoints. 

Page Break
 

 

Create an  Event Management Application. 

Allow adding details of an Event (birthday, Christening, Thread Ceremony, Wedding, etc) into the system. 

Make sure that Events do not overlap in a given day. i.e Max two events can be managed in a given day provided they occur at different half of the day. 

Provide a list of free days within a date range where no event appointments are booked. 

Provide a list of upcoming events based on input parameter. example: Today, Tomorrow, Current Week, Next Week, Current Month, Next Month, Current Year, Next year. 

Capture details of Person who will be paying for the event. 

Capture details of the Person for whom the event is for. 

Allow System to enter Event Manager information. [Name, Contact details] 

Allow to associate Event Manager with an Event. Note: One Event manager can manage only one event in a day. 

Provide list of available Event Mangers available for the given date. If input date is a past date, provide an appropriate message indicating that the date is past date. 

Instructions: 

Design the Database Tables and fields based on the above details.  

Create API endpoints which can be later consumed by Frontend application to implement the UI.  

Save all API endpoints in postman so that they can be tested by Frontend developer. 

Handle Validations for all required API endpoints. 

Page Break
 

 

 Create an application for Hotel Booking 

Allow adding details of the hotel rooms. A hotel can have different room types. 

 Single Bed 

Double Bed 

With A/c  

without A/C.  

Premium rooms will be charged 10% more of the total cost of rent per day. 

Rates as per Room  

Single Bed - Rs. 1000  

Double Bed - Rs. 1600  

A/c - Rs. 1000 

Check-in time for rooms will be 2:00 PM. Checkout will be 11:00 AM 

Allowing Booking Rooms for a guest. 

Capture Guest Details. Details of the Person who is booking should be captured (Name, Gender, address) 

Capture the total no of people who will be staying in the room. If Children, then capture the age. If child is above 8 years, then it will be considered as adult. 

Don't allow booking a Single room for more than 2 people. 

Don't allow booking a double room for more than 3 adults. Max 4 people are allowed in a double room, if 2 are adults and 2 are children. 

Generate bill for a given room for a given guest for the period he stayed in the hotel. 

Instructions: 

Design the Database Tables and fields based on the above details.  

Create API endpoints which can be later consumed by Frontend application to implement the UI.  

Save all API endpoints in postman so that they can be tested by Frontend developer. 

Handle Validations for all required API endpoints. 

 
