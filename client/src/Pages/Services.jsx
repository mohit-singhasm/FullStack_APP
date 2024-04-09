import {
  shape12,
  shape13,
  shape3,
  shape6,
  team1,
  team2,
} from "../images/ImagesExport";
import { useAuth } from "../store/auth";

const Services = () => {
  const { services } = useAuth();
  // console.log(services)

  return (
    // <section className='services-section'>
    //   <div className="container">
    //     <h1 className="main-heading">Services</h1>
    //   </div>
    //   <div className="container grid grid-three-cols">
    //     {
    //       services.map((e) => {
    //         const { provider, price, service, description } = e
    //         return (
    //           <div className="card" key={e._id}>
    //             <div className="card-image">
    //               <img src="/images/design.png" alt="service img" width='300' />
    //             </div>
    //             <div className="card-details" >
    //               <div className="grid grid-two-cols">
    //                 <p>{provider}</p>
    //                 <p>${price}</p>
    //               </div>
    //               <h2>{service}</h2>
    //               <p>{description}</p>
    //             </div>
    //           </div>)
    //       })
    //     }
    //   </div>
    // </section>

    <section className="relative bg-primaryBg">
      <span className="block w-full h-full absolute top-0 left-0">
        <img
          src={shape6}
          alt="shapes"
          className="absolute top-[4%] left-[10%]"
        />
        <img
          src={shape3}
          alt="shapes"
          className="absolute top-[5%] right-[5%]"
        />
        <img src={shape13} alt="shapes" className="absolute top-0 right-0" />
        <img src={shape12} alt="shapes" className="absolute bottom-0 left-0" />
      </span>
      <div className="flex flex-col justify-center items-center pt-6 mb-28 relative">
        <div className="w-1/2 text-center">
          <h2 className="text-6xl text-primaryHeading font-semibold leading-[55px] mb-5">
            Services
          </h2>
          <p className="text-primaryText">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using.
          </p>
        </div>
        {/* <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:scale-[1.02] hover:shadow-lg duration-200 my-16">
          <a href="#">
            <img className="p-8 rounded-t-lg" src={team1} alt="product image" />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>
            </a>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900">$599</span>
              <span className="text-xl text-gray-900">Provider</span>
            </div>
            <div className="flex flex-col justify-between py-2">
              <span className="text-xl font-semibold text-gray-900">Service</span>
              <span className="text-sm text-gray-900">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eligendi, cum ullam! Voluptate laboriosam animi ut odio
                blanditiis sed expedita laborum libero alias doloremque, quas
                fugiat accusamus totam repellat quisquam error.
              </span>
            </div>
          </div>
        </div> */}
        <div className="flex flex-wrap justify-center items-center gap-8 my-16">
          {services.map((e) => {
            const { provider, price, service, description } = e;
            return (
              <div
                key={e._id}
                className="w-full max-w-sm bg-primaryBg rounded-lg shadow hover:scale-[1.02] hover:shadow-lg duration-200"
              >
                <a href="#">
                  <img
                    className="p-8 rounded-t-lg"
                    src={team2}
                    alt="product image"
                  />
                </a>
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold text-primaryHeading">
                      {service}
                    </h5>
                  </a>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900 my-2">
                      ${price}
                    </span>
                    <span className="text-sm text-primary">{provider}</span>
                  </div>
                  <div className="flex flex-col justify-between py-2">
                    {/* <span className="text-xl font-semibold text-primaryHeading">
                    {service}
                  </span> */}
                    <span className="text-sm text-primaryText">{description}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
