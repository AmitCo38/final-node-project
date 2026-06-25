PROJECT NODE.JS -MOVIES 
-----------------------

NAMES:
------
VERONIKA KAVETSKY

AMIT COHEN


WORK SPLIT:
--------
3 GET AND 1 POST - VERONIKA

4 API (חיצוני) - AMIT

OTHER FOLDERS AND FILES - כל אחד שיפר והוסיף עפי הצורך הנדרש


ABOUT PROJECT:
--------------
ABOUT MOVIES:רעיון הפרויקט מתבסס על סרטים שהוכנסו במיוחד לתוכנית , באפשרותכם לבחור את כל הסרטים/קטגוריה ספציפית/מספר כוכבים 

ABOUT POST->COMMENT:באפשרות המשתמש להוסיף תגובה תחת הסרט הרצוי על ידי הזנת מספר הסרט ולאחר מכן , שם משתמש לבחירתו ואת התגובה שלו

ABOUT API(חיצוני) QUOTES:רעיון המתבסס 3 על סדרות שמציגות ציטוטים רנדומלים , באפשרותכם לבחור סדרה ספציפית ובנוסף כמות ציטוטים שתבחרו

ABOUT API(חיצוני) TRIVIA: רעיון המתבסס על טרוויה  , באפשרותכם לבחור שאלון אמריקאי /כן או לא בנוסף רמת קושי וכמות שאלות עד 9


RUN INSTRUCTION:
-----------------

1.Create a folder in the wanted location.

2.Open the folder through VSC.

3.Open a new terminal.

4.Run the following command:
git clone https://github.com/AmitCo38/final-node-project.git

5.Enter the project folder:
cd final-node-project

6.Add the env file to the main project folder.

7.Make sure you are inside the main project folder and not the outside folder.

8.Install the project dependencies:
npm install
If there is a problem in PowerShell, you can use:
npm.cmd install

9.Run the project:
npm start
If there is a problem in PowerShell, you can use:
npm.cmd start

10.Open postman and create a new GET (Expect the comments feature that u need to use "POST" on) request

11.Enter the urls below.

HOW TO WRITE URL:
-----------------
FOR MOVIES:
-----------
All Movies:

http://localhost:3000/api/movies 

---------------------------------

Get by Catagory:

http://localhost:3000/api/movies/category/CataName

CataName- Action/Fantasy/Horror/Family/Comedy/Romance/Sci-Fi/Mystery/Crime/Sports

---------------------------------

Get by Stars:

http://localhost:3000/api/movies/stars/NumberOfStars

NumberOfStars- number of stars 1-5. 

---------------------------------

Post Add Comments:
first,change the request method to POST then choose body->raw

use this URL:

http://localhost:3000/api/movies/Id

Movie Id - between 1-20.

request body:

{

"name" : "Justin12",

"comment" : "greattt movie!!!"

}

---------------------------------

FOR QUOTES:
-----------
http://localhost:3000/api/quotes/random/showname/NumOfQuotes

showname = lucifer/strangerthings/southpark

NumOfQuotes (nullable) = Integer number for the number of quotes

FOR TRIVIA:
-------------
http://localhost:3000/api/trivia/type/difficulty/num 

type = boolean/multiple

difficulty = easy/medium/hard

num= Integer number for the number of questions<9





