#DEBouncing:

typing slow = 200ms
typing fast = 150ms or less


#Performance: 
- iphone pro max = 14 letter * 1000 = 140000
- with debouncing = 3Api call * 1000 = 3000

Debouncing wth 200 ms
- if difference between 2key strokes is < 200ms - then decline the api call
- if >200ms make an API call 
 