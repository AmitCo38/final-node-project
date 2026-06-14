
MOVIES נושא הפרויקט -סרטים 
.---------------------------.
 משתתפי הפרויקט : עמית כהן , ורוניקה קבצקי

:חלוקת העבודה התבצעה באופן הבא

כולל בניית תיקיות-> עמית - API 3 חיצוני 

READMEורוניקה כולל כתיבת ה- GET 3
.---------------------------------------------------------------------------------------.
Run Instructions:

1. Create a folder in the wanted location.

2. Open the folder through VSC.

3. Open a new terminal.

4. Run the following command:
   git clone https://github.com/AmitCo38/final-node-project.git

5. Enter the project folder:
   cd final-node-project

6. Add the env file to the main project folder.

7. Make sure you are inside the main project folder and not the outside folder.

8. Install the project dependencies:
   npm install

If there is a problem in PowerShell, you can use:
npm.cmd install

9. Run the project:
   npm start

If there is a problem in PowerShell, you can use:
npm.cmd start

10. Open postman and create a new GET request

11. Enter the urls below.

 .---------------------------------------------------------------------------------------.

.  התוכנית תעבוד עפי מערך זה ,והבקשות שיוחזרו לפוסטמן גם כן יוצגו עפי מערך זה, dalהכנסנו מערך של סרטים ל  
dal ניתן לראות קטגוריות ספציפיות בתקיית *

3 GET-
FIRST GET-SHOW ALL MOVIES
SECOND GET-SHOW MOVIES BY CATEGORY 
THIRD GET-SHOE MOVIES BY STARS

שימוש בפוסטמן
http://localhost:3000/api/movies - להצגת כלל הסרטים
http://localhost:3000/api/movies/category/(write category) - להצגת סרטים עפי קטגוריה 
http://localhost:3000/api/movies/stars/(write stars 1-5) - להצגת סרטים עפי דירוג כוכבים
 .--------------------------------------------------------------------------------------.
 הכנסת נתונים חיצוניים , עפי 3 סדרות הניתנות לבחירת המשתמש ,על המשתמש לבחור אחת מהסדרות ויוצג בפניו 
. את שם הדמות שאמרה את הציטוט , והציטוט עצמו

3 API חיצוני
ציטוטים רנדומלייפ + מי אמר-> מ3 סדרות שונים 
1.Southpark
2.Lucifer
3.Strangerthings

שימוש בפוסטמן
http://localhost:3000/api/quotes/random/(write show name) - הצגת ציטוט עפי סדרה שתבחרו משלושת הסדרות הרשומות מעלה