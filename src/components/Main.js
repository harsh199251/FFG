import React from 'react'
import css from './Main.css'
import Button from './Button'
import { useState } from 'react'

export default function Main() {
    const [data,setData] = useState({name:"" , purpose:"" ,age:"" , email:"" , phone:""});
    const handlechange =(e) =>{
        const name=e.target.name;
        const value=e.target.value;
        setData({...data , [name] : value})
    }

    const handlesubmit= async(e)=>{
        e.preventDefault()
        // // console.log(data)
        // // alert(data)
        // alert(JSON.stringify(data, null, 2));
        try {
            const response = await fetch('https://ffg-z4nr.onrender.com/api/saveFormData ', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            alert(result.message); // Display success/failure message
        } catch (error) {
            console.error('Error:', error);
            alert('Error saving form data');
        }
    }
  return (
    <>
    <section id="home">
        <div className="container">
        <h1 className="h-primary">
            Become Our Member
        </h1>
        <form method='post' onSubmit={handlesubmit}>
            <div className="form-grp">
                <input type="text" name="name" onChange={handlechange} value={data.name} placeholder="enter your name here"/>
            </div>
            <div className="form-grp">
                <input type="text" name="purpose" onChange={handlechange} value={data.purpose} placeholder="enter Purpose" />
            </div>
            <div className="form-grp">
                <input type="text" name="age" onChange={handlechange} value={data.age} placeholder="enter your age"/>
            </div>
            <div className="form-grp">
                <input type="email" name="email" onChange={handlechange} value={data.email} placeholder="enter your email"/>
            </div>
            <div className="form-grp">
                <input type="phone" name="phone" onChange={handlechange} value={data.phone} placeholder="enter your phone"/>
            </div>
            <Button title="Book Now" onclick={handlesubmit}/>
        </form>
    </div>
    </section>
    <hr/>

    <section className="services-container">
        <h1 className="h-primary-center">
            our services
        </h1>
        <div id="services">
            <div className="box">
                <img src="https://media.istockphoto.com/id/502582696/photo/different-ways-of-cooking-eggs.jpg?s=1024x1024&w=is&k=20&c=EF6n5kEHH2pJLEJVHsZsa1kfjLKsEUGAMkAc6WaotTg=" alt=""/>
                <h2 className="h-secondary">
                    Diet Plan
                </h2>
                <p className="center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi impedit veritatis aperiam. Quam sapiente dolor, modi aspernatur suscipit omnis maxime dolore ipsa cupiditate nobis libero dolores voluptate soluta esse ullam amet, aut, error atque?</p>
                <div className='serbtn'>
                    <a href="http://www.gurumann.com/CLEAN_MUSCLE_GAIN_Nutrition_Plan_by_G"><div><Button title='Diet'/></div></a>
                </div>
            </div>
            <div className="box">
                <img src="https://moonlit-pithivier-51e278.netlify.app/static/media/ongym.639a989d2286278a9df3.jpeg" alt=""/>
                <h2 className="h-secondary">
                    Online Lesson
                </h2>
                <p className="center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi impedit veritatis aperiam. Quam sapiente dolor, modi aspernatur suscipit omnis maxime dolore ipsa cupiditate nobis libero dolores voluptate soluta esse ullam amet, aut, error atque?</p>
                <div className='serbtn'>
                <a href="/check"><div><Button title='Check Out'/></div></a>
                </div>
            </div>
            <div className="box">
                <img src="https://moonlit-pithivier-51e278.netlify.app/static/media/gymk.54047062697b3c63a95c.jpg" alt=""/>
                <h2 className="h-secondary">
                    Training
                </h2>
                <p className="center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi impedit veritatis aperiam. Quam sapiente dolor, modi aspernatur suscipit omnis maxime dolore ipsa cupiditate nobis libero dolores voluptate soluta esse ullam amet, aut, error atque?</p>
                <div className='serbtn'>
                    <a href="/train"><div><Button title='Train'/></div></a>
                </div>
            </div>
        </div>
    </section>

    <hr/>
    <section className="member">
        <h1 className="h-primary-center">
            Members Corner
        </h1>
        <div id="services">
            <div className="box1">
                <p className="center">I recently joined the gym and I have a been liking it so far. Trainers are good, they guide u well, the ambiance is motivating. It’s a top gym overall. If you are looking for top quality gym near Lajpat, east of kailash etc. I think you can definitely go for it.</p>
                <div className="membername">
                    <h3>Bhavey Bansal</h3>
                    <h5>Figure fit Gym Jaipur</h5>
                </div>
            </div>
            <div className="box1">
                <p className="center">Well I have been a monthly member now getting to get along with the people there. It's a Great place for fitness freaks. There is passion in the Gym Fitness Instructors and they work towards getting you towards Fitness.</p>
                <div className="membername">
                    <h3>Harsh Jain</h3>
                    <h5>Figure fit Gym Panipat</h5>
                </div>
            </div>
            <div className="box1">
                <p className="center">Advance level machines are available in this gym, Staff and gym trainers are too good, polite, and knowledgeable. I am satisfied with their training services</p>
                <div className="membername">
                    <h3>Lalit Singh</h3>
                    <h5>Figure fit Gym Jammu</h5>
                </div>
            </div>
        </div>
    </section>
    <hr/>
    <section id="contact">
        <h1 className="h-primary-center">contact us</h1>
        <div id="contact-box">
            <form action="">
                <div className="form-group">
                    <label for="name">name:</label>
                    <input type="text" name="name"  placeholder="enter your name"/>
                </div>
                <div className="form-group">
                    <label for="email">email:</label>
                    <input type="email" name="email"  placeholder="enter your email"/>
                </div>
                <div className="form-group">
                    <label for="phone">phone:</label>
                    <input type="phone" name="phone"  placeholder="enter your phone"/>
                </div>
                <div className="form-group">
                    <label for="name">message:</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </div>
            </form>
        </div>
        </section>
    </>
  )
}


// BrdnDpo48jWiWQWc