import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className='base'>
            <h2>What ToDo ?</h2>
            <div className="row">
                <div className="col-md-4">
                    <h4>About ToDo :</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, non voluptas cumque voluptates harum modi exercitationem error ab, cum perspiciatis est fugiat impedit earum corporis praesentium beatae voluptatum ratione dolores!</p>
                </div>
                <div className="col-md-4">
                    <h4>Help :</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, non voluptas cumque voluptates harum modi exercitationem error ab, cum perspiciatis est fugiat impedit earum corporis praesentium beatae voluptatum ratione dolores!</p>
                </div>
                <div className="col-md-4 contact">
                    <h4>Connect with us :</h4>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-telegram"></i>
                    <i class="fa-brands fa-google"></i>
                    <i class="fa-solid fa-phone"></i>
                    
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-md-12 ">
                    <p className='text-center'>copyright <i class="fa-regular fa-copyright"></i> Ashwin Clarence 2023</p>
                    </div>
            </div>
        </div>
    )
}

export default Footer
