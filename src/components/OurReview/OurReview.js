import React from 'react';
import user1 from '../../assets/images/userimg1.jpg';
import user2 from '../../assets/images/userimg2.jpg';
import user3 from '../../assets/images/userimg3.jpg';
import Reviews from '../Reviews/Reviews';
const OurReview = () => {
    const ReviewsData = [
        {img : user1 , username : 'Leanne Graham' , position : "user" , rating : '3' , reviewMessage : 'Je verificatie code is 5688760. Deel deze nooit met anderen! Probeerde je niet in te loggen? Wijzig dan je wachtwoord op Marktplaats.' , date : "16 jon 2022" },
        {img : user2 , username : 'Ervin Howell' , position : "user" , rating : '2' , reviewMessage : 'Je verificatie code is 5593500. Deel deze nooit met anderen! Probeerde je niet in te loggen? Wijzig dan je wachtwoord op Marktplaats' , date : "16 jon 2022" },
        {img : user3 , username : 'Clementine Bauch' , position : "user" , rating : '3' , reviewMessage : 'An existing Discord account is already using this number. Please remove it before it can be used with a new account.' , date : "16 jon 2022" }
    ]
    return (
        <div>
            <div>
                <h2>Our Clients Reviews</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, harum?</p> 

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                    {
                        ReviewsData.map((item => <Reviews 
                            item={item}
                            />))
                    }
                </div>               
            </div>
        </div>
    );
};

export default OurReview;