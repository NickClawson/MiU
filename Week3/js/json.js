//author: Nick Clawson
//Date: 6/25/2012
//MiU 1207 Project: Coaster Rater

var json = {
	"ride1": {
		"ride": ["Ride Name: ", "Raptor"],
		"park": ["Park: ", "Cedar Point"],
		"type": ["Ride Type: ", "RollerCoaster"],
		"rating": ["Rating: ", "8"],
		"date": ["Date Ridden: ", "6/19/2012"],
		"comments": ["Comments: ", "classic ride! one of my all time favorites, but is starting to lose its shine."]
	},
	"ride2": {
		"ride": ["Ride Name: ", "Maverick"],
		"park": ["Park: ", "Cedar Point"],
		"type": ["Ride Type: ", "RollerCoaster"],
		"rating": ["Rating: ", "9"],
		"date": ["Date Ridden: ", "6/19/2012"],
		"comments": ["Comments: ", "new favorite! first hill inverts, very cool!"]
	},
	"ride3": {
		"ride": ["Ride Name: ", "Max Air"],
		"park": ["Park: ", "Cedar Point"],
		"type": ["Ride Type: ", "Thrill"],
		"rating": ["Rating: ", "1"],
		"date": ["Date Ridden: ", "6/19/2012"],
		"comments": ["Comments: ", "i don't care for it...too much spinning and back and forth motion, makes me feel ill."]
	}
	"ride4": {
		"ride": ["Ride Name: ", "Mantis"],
		"park": ["Park: ", "Cedar Point"],
		"type": ["Ride Type: ", "RollerCoaster"],
		"rating": ["Rating: ", "6"],
		"date": ["Date Ridden: ", "6/19/2012"],
		"comments": ["Comments: ", "it's ok. It hurts my knees."]
	}
	"ride5": {
		"ride": ["Ride Name: ", "Disaster Transport"],
		"park": ["Park: ", "Cedar Point"],
		"type": ["Ride Type: ", "RollerCoaster"],
		"rating": ["Rating: ", "7"],
		"date": ["Date Ridden: ", "6/19/2012"],
		"comments": ["Comments: ", "not exactly a coaster, more of a sled...classic ride, will be sad when it's gone."]
	}
	"ride6": {
		"ride": ["Ride Name: ", "Power Tower"],
		"park": ["Park: ", "Cedar Point"],
		"type": ["Ride Type: ", "Thrill"],
		"rating": ["Rating: ", "8"],
		"date": ["Date Ridden: ", "6/19/2012"],
		"comments": ["Comments: ", "I prefer the down half to the up half. Much more exhilarating sitting at the top not knowing when you the free fall will start."]
	}
	"ride7": {
		"ride": ["Ride Name: ", "Magnum"],
		"park": ["Park: ", "Cedar Point"],
		"type": ["Ride Type: ", "RollerCoaster"],
		"rating": ["Rating: ", "8"],
		"date": ["Date Ridden: ", "6/19/2012"],
		"comments": ["Comments: ", "Classic. Used to be biggest ride, still fun, usually a short wait."]
	}
	"ride8": {
		"ride": ["Ride Name: ", "Windseeker"],
		"park": ["Park: ", "Cedar Point"],
		"type": ["Ride Type: ", "Thrill"],
		"rating": ["Rating: ", "1"],
		"date": ["Date Ridden: ", "6/19/2012"],
		"comments": ["Comments: ", "Extremely boring...it's just a very tall version of the Yo-Yo."]
	}
	"ride9": {
		"ride": ["Ride Name: ", "Skyhawk"],
		"park": ["Park: ", "Cedar Point"],
		"type": ["Ride Type: ", "Thrill"],
		"rating": ["Rating: ", "1"],
		"date": ["Date Ridden: ", "6/19/2012"],
		"comments": ["Comments: ", "Another back and forth ride...makes me feel ill."]
	}
	"ride10": {
		"ride": ["Ride Name: ", "Thunder Canyon"],
		"park": ["Park: ", "Cedar Point"],
		"type": ["Ride Type: ", "Water"],
		"rating": ["Rating: ", "8"],
		"date": ["Date Ridden: ", "6/19/2012"],
		"comments": ["Comments: ", "Great ride on a hot day. It's a lot of fun floating under the waterfalls."]
	}
	"ride11": {
		"ride": ["Ride Name: ", "Shoot The Rapids"],
		"park": ["Park: ", "Cedar Point"],
		"type": ["Ride Type: ", "Water"],
		"rating": ["Rating: ", "7"],
		"date": ["Date Ridden: ", "6/19/2012"],
		"comments": ["Comments: ", "Newer water ride, wait is too long...it's ok."]
	}
	"ride12": {
		"ride": ["Ride Name: ", "Millenium Force"],
		"park": ["Park: ", "Cedar Point"],
		"type": ["Ride Type: ", "RollerCoaster"],
		"rating": ["Rating: ", "9"],
		"date": ["Date Ridden: ", "6/19/2012"],
		"comments": ["Comments: ", "Great ride, first hill is almost 90 degrees...great view of the lake on the left side of the first hill too."]
	}
	"ride13": {
		"ride": ["Ride Name: ", "Wicked Twister"],
		"park": ["Park: ", "Cedar Point"],
		"type": ["Ride Type: ", "RollerCoaster"],
		"rating": ["Rating: ", "3"],
		"date": ["Date Ridden: ", "6/19/2012"],
		"comments": ["Comments: ", "least favorite coaster at CP...just goes back and forth, makes me feel ill."]
	}
	"ride14": {
		"ride": ["Ride Name: ", "Top Thrill Dragster"],
		"park": ["Park: ", "Cedar Point"],
		"type": ["Ride Type: ", "RollerCoaster"],
		"rating": ["Rating: ", "8"],
		"date": ["Date Ridden: ", "6/19/2012"],
		"comments": ["Comments: ", "Fastest roller coaster in the park, also the shortest. it's fun, but usually not worth waiting for."]
	}
	"ride15": {
		"ride": ["Ride Name: ", "Cedar Point Railroad"],
		"park": ["Park: ", "Cedar Point"],
		"type": ["Ride Type: ", "Transport"],
		"rating": ["Rating: ", "5"],
		"date": ["Date Ridden: ", "6/19/2012"],
		"comments": ["Comments: ", "Nothing exciting, easy way to get from one side of the park to another. Has some goofy scenery in the woods."]
	}
	"ride16": {
		"ride": ["Ride Name: ", "Cadillac Cars"],
		"park": ["Park: ", "Cedar Point"],
		"type": ["Ride Type: ", "Thrill"],
		"rating": ["Rating: ", "5"],
		"date": ["Date Ridden: ", "6/19/2012"],
		"comments": ["Comments: ", "It's fun for the kids to 'drive'. Quiet ride to just sit for a few minutes, not a long wait."]
	}
	"ride17": {
		"ride": ["Ride Name: ", "Giant Wheel"],
		"park": ["Park: ", "Cedar Point"],
		"type": ["Ride Type: ", "Thrill"],
		"rating": ["Rating: ", "4"],
		"date": ["Date Ridden: ", "6/19/2012"],
		"comments": ["Comments: ", "It's a ferris wheel, great view of the lake, not much else."]
	}
	"ride18": {
		"ride": ["Ride Name: ", "Gemini"],
		"park": ["Park: ", "Cedar Point"],
		"type": ["Ride Type: ", "RollerCoaster"],
		"rating": ["Rating: ", "8"],
		"date": ["Date Ridden: ", "6/19/2012"],
		"comments": ["Comments: ", "one of only 3 wooden coasters left in park. 2 cars simulataneous on dual tracks. It's fun to split the group up and 'race'."]
	}
	"ride19": {
		"ride": ["Ride Name: ", "Mean Streak"],
		"park": ["Park: ", "Cedar Point"],
		"type": ["Ride Type: ", "RollerCoaster"],
		"rating": ["Rating: ", "8"],
		"date": ["Date Ridden: ", "6/19/2012"],
		"comments": ["Comments: ", "one of only 3 wooden coasters left in park. name is no joke, it hurts, but it is a lot of fun!"]
	}
	"ride20": {
		"ride": ["Ride Name: ", "Blue Streak"],
		"park": ["Park: ", "Cedar Point"],
		"type": ["Ride Type: ", "Thrill"],
		"rating": ["Rating: ", "5"],
		"date": ["Date Ridden: ", "6/19/2012"],
		"comments": ["Comments: ", "one of only 3 wooden coasters left in park. similar to Mean Streak, but not as mean."]
	}
}
