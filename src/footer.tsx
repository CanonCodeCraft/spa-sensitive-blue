import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


export const Footer = () => {
  return (
<div >
  <footer
          className="text-center text-lg-start text-black"
          style={{backgroundColor: "#DDEAFF", fontFamily:"roboto"}}
          >
    <div className="container p-4 pb-0">
      <section className="">
        <div className="row">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              Sensitive Angels Spa
            </h5>
            <p>
              Tu belleza anhelada, hecha realidad.
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          {/*<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
            <p>
              <a className="text-white">MDBootstrap</a>
            </p>
            <p>
              <a className="text-white">MDWordPress</a>
            </p>
            <p>
              <a className="text-white">BrandFlow</a>
            </p>
            <p>
              <a className="text-white">Bootstrap Angular</a>
            </p>
            </div>-->*/}

          <hr className="w-100 clearfix d-md-none" />

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contactate con nosotros</h6>
            <p><i className="fas fa-envelope mr-3"></i> info@sbspa.com</p>
            <p><i className="fas fa-phone mr-3"></i> +57 320 525 90 60</p>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">¡Siguenos en nuestras redes!</h6>

            <a
               className="btn btn-primary btn-floating m-1"
               style={{backgroundColor: "#3b5998"}}
               href="#!"
               role="button"
               ><FaFacebook /></a>
            <a
               className="btn btn-primary btn-floating m-1"
               style={{backgroundColor: "#DD2A7B"}}
               href="https://www.instagram.com/sensitivespaangels/"
               role="button"
               ><FaInstagram /></a>
            <a
               className="btn btn-primary btn-floating m-1"
               style={{backgroundColor: "	#fe2858"}}
               href="https://www.tiktok.com/@sensitive854"
               role="button"
               ><FaTiktok /></a>
               
            
          </div>
        </div>
      </section>
    </div>
    <div
         className="text-center p-3"
         style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
         >
      © 2024 Copyright:<a className="text-white" href="https://www.canoncodecraft.com/" >CanonCodeCraft</a >
      <br/>
      Íconos: <a className="text-white" href="https://www.flaticon.es" >Flaticon</a >
      Imagenes: <a className="text-white" href="https://unsplash.com/es" >Unsplash</a > 
    </div>


    
  </footer>
</div>
  )
}