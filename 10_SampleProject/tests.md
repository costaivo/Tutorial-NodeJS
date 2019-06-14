# Create a Application for Society maintenance. 
1. Allow Adding Shops/Flats/Row Villa's Data into the system
2. Associate Owner to Shops/Flat/Row Villa into the system
3. Allow ability to capture information if Flat/Row Villa is given on Rent.
4. Generate Monthly Maintainance bills for Flat/Row Villa. 
	* Bill Should be generated based on area of the flat/Row Villa
	* If premises is given on RENT then additional charge of Rs. 500 will be added
	* If premises is a shop then Flat Maintance charge of Rs. 1000 will be charged.(No calculations on area for shops)
5. Allow Saving Transcation of Maintainance paid towards the society maintainance bill. Capture the mode of payment, Amount and Bill No. Do not allow saving a transaction if bill for the premises is not generated or if already paid for the month. 


Design the Database Tables and fields based on the above details.
Create API endpoints which can be later consumed by Frontend application to implement the UI.
Save all API endpoints in postman so that they can be tested by Frontend developer.
Handle Validations for all required API endpoints.


#  Create an application for a Event Management Application. 
1. Allow adding details of Event (birthday,Christning, Thread Ceremony, Wedding) into the system. 
2. Make sure that Events do not overlap in a given day. 
i.e Max two events can be managed in a given day provided they occur at same different half of the day. 
3. Provide a list of free days within a date range where no event appointments are booked.
4. Provide a list of upcoming events based on input parameter. 
example: Today, Tomorrow, Current Week , Next Week , Current Month, Next Month, Current Year, Next year.
5. Capture details of Person who will be paying for the event. 
6. Capture details of the Person for whom the event is for. 
7. Allow System to enter Event Manager information. [Name, Contact details]
8. Allow to associate Event Manager with an Event. Note: One Event manager can manage only one event in a day. 
9. Provide list of available Event Mangers avaiable for the given date. If input date is a past date, provide an appropiate message indicating that the date is past date. 

Design the Database Tables and fields based on the above details.
Create API endpoints which can be later consumed by Frontend application to implement the UI.
Save all API endpoints in postman so that they can be tested by Frontend developer.
Handle Validations for all required API endpoints.

#  Create an application for Hotel Booking 
1. Allow adding details of the hotel rooms. A hotel can have different room types. Single Bed/Double Bed, With A/c without A/C. 
Premium rooms will be charged 10% more of the total cost of rent per day.
2. Rates as per Room
Single Bed - Rs. 1000
Double Bed - Rs. 1600
A/c - Rs. 1000

3. Checkin time for rooms will be 2:00 PM. Checkout will be 11:00 AM
4. Allowing Booking Rooms for a guest. 
5. Capture Guest Details. Details of the Person who is booking should be captured (Name, Gender, address)
6. Capture the total no of people who will be staying in the room. If Children then capture the age. If child is above 8 years then it will be considered as adult. 
7. Dont allow booking a Single room for more than  2 people. 
8. Dont allow booking a double room for more than 3 adults. Max 4 people are allowed in a double room, if 2 are adults and 2 are children. 
9. Generate bill for a given room for a given guest for the period he stayed in the hotel.

Design the Database Tables and fields based on the above details.
Create API endpoints which can be later consumed by Frontend application to implement the UI.
Save all API endpoints in postman so that they can be tested by Frontend developer.
Handle Validations for all required API endpoints.

# Bus Booking System
