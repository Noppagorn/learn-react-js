import React from "react"
import ContactCard from "./ContactCard"

function Contact(){
    return (
        <div>
            <ContactCard 
                contact={{
                name :"Mr. Whiskerson" ,
                imgUrl : "http://placekitten.com/300/200",
                phone : "Phone: (212) 555-1234",
                email : "Email: mr.whiskaz@catnap.meow"
            }}
                />
            <ContactCard 
                contact={{
                name :"Mr. Whiskerson 2" ,
                imgUrl : "http://placekitten.com/400/200",
                phone : "Phone: (212) 555-1234",
                email : "Email: mr.whiskaz@catnap.meow"
            }}
                />
            <ContactCard 
                contact={{
                name :"Mr. Whiskerson 3" ,
                imgUrl : "http://placekitten.com/400/300",
                phone : "Phone: (212) 555-1234",
                email : "Email: mr.whiskaz@catnap.meow"
            }}
                />
            <ContactCard 
                contact={{
                name :"Mr. Whiskerson 4" ,
                imgUrl : "http://placekitten.com/200/100",
                phone : "Phone: (212) 555-1234",
                email : "Email: mr.whiskaz@catnap.meow"
            }}
                />           
        </div>
    )
}

export default Contact