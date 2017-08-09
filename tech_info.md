User
	"UUID" -> uid, the key for Users
	"Name" -> users full name
	"School" -> School user is a part of
	"Zip" -> zip code, groups users into a region (only one for poc)
	"Major" -> the program the user majors in
	"Transactions" -> the array of transactions that the user is currently participating in
	"Email" -> email for the user
	"TranactionMetrics" {
		"Successes" -> successful transactions past the sunset period
		"TotalTransactions" -> all the transactions the user has participated in
		"TranactionSuccessRate" -> the s/t rate that the user provides
		"Quality" -> the delta between this sellers product rating and the users view
		"Rating" -> (TransactionSuccessRate * 0.8 + Quality * 0.2 )
	}
Transactions
{
	"Seller" -> uid key for seller user
	"Books"
	[
		{
			"ISBN"
			"BookState" -> quality from book qualities enumeration
			"Price" -> float val representing USD 
		}
	]
	"Sold" -> t/f
	"BuyerId"
	"FlaggedForReversal"
	""

}

Books
	"Title"
	"ISBN" - key for the entry
	"Edition"
	"Image" -> link to the image

Enumerations, predefined values

Book Qualities 
	5 New 
	4 Like New 
	3 Good 
	2 Fair 
	1 Poor 

Technical terms 
	- sunset period : time the user that has performed a purchase has to dispute the purchase after which the seller has immunity