Date-app


****************************Front-end****************************

Typescript

Libraries {
	-Tailwind = (https://tailwindcss.com/)
	-React = (https://react.dev/)
}

Frameworks {
	-react-router-dom = (https://reactrouter.com/en/main)
	-slick = (https://react-slick.neostack.com/) (swiper)
}

layout {
	-Navbar
	-Footer
}


Pages {
	* User Pages {
		-Login Page
		-Register Page
		-Homepage (The flow of the slider and other things)
		-User Detail Page (Sees the user's credentials and personel info)
		-Settings Page (App and profile settings)
		-Message Page (Message With Users)
		-Image Detail Page (Put a comment or like for the image)
	}
	* Admin Pages {
		-Login Page
		-Homepage (Admin Panel)
		-Settings Page (App Setting)
		-Users Page (See All Users)
		-User Detail Page (Edit Users)
		-Message Page (Message With Users)
		-Image Detail Page (Edit Or Delete Images)
	}
}

************************Back-end****************************

Nodejs

For Handling The Postgresql = node-postgres (https://node-postgres.com/)
For Messaging = websocket (https://www.npmjs.com/package/websocket)
For rest api = express.js (https://expressjs.com/)
For hashing = bcrypt (nodejs)

For Everyone {

	- login
	
}


For Users = {
	- register
	- getUser
	- likeImage
	- getLikes
	- getNotifications
	- postComment
	- postReply
}

For Admins = {
	- getAllUsers
	- getUser
	- deleteUser
	- updateUser
	- addAdmin
}



****************************Database****************************

Postgresql


User {
	-ID (String)
	-Name (String)
	-Surname (String)
	-Username (String)
	-Email (String)
	-Password (String)
	-Profile Image (Image)
	-[Images] (Array[Image])
	-Description (String)
	-Gender (String)
	-Admin? (Boolean)
}

Image {
	-ID (String)
	-URL (String)
	-[Likes] (Array[Like])
	-[Comments] (Array[Comment])
}

Like {
	-Liker (User)
	-Liked (Image)
}

Comment {
	-ID (String)
	-Text (String)
	-Sender (User)
	-Date (Datetime)
	-[Replies] (Array[Reply])
}

Reply {
	-ID (String)
	-Sender (User)
	-Text (String)
	-Date (Datetime)
}

Message {
	-Text (String)
	-Sender (User)
	-Date (Datetime)
}


