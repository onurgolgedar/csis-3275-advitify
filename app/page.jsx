import styles from './page.module.css'
import image1 from '../public/main_image1.png'
import image2 from '../public/main_image2.png'

export default function Home() {
  console.log(image2);
  return (
    <main className={styles.main}>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

      
  <section id="hero" className='bg-body-tertiary'>

    <div className="container bg-body-tertiary">
      <div className="row">
        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="fade-up">
          <div>
          <h1 className="display-10 fw-bold">Advitify is an IT consulting platform that connects people with professionals</h1>
          <div>
            <div className='container'>
              <div className='row justify-content-md-center'>
              <div className='col-sm'>
            <h6 className="fw-normal text-muted mb-3">Find an IT specialist with the correct expertise to help you accomplish the project you're working on. Advitify gives you the ability to find the correct professional from the comfort of your office</h6>
            <a href="" className="btn-get-started scrollto">Get Started </a>
            </div>
            <div className='col-sm col-md-auto'>
            <img width={120} src='/_next/static/media/main_image2.43ec8873.png' className="img-fluid" alt=""/>
            </div>
            </div>
            </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left">
          <img src='/_next/static/media/main_image1.46df7911.png' className="img-fluid" alt=""/>
        </div>
      </div>
    </div>
    <div className="text-center">
    </div>
  </section>


      <div className="container-fluid">
    <div className="row flex-nowrap bg-light">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light ms-5">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-black text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Categories</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <a href="#" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Software</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Cybersecurity</span> </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Cloud computing</span> </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Database</span> </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Customers</span> </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Automation</span> </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Artificial intelligence</span> </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Computing</span> </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Data visualization</span> </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Embedded systems</span> </a>
                    </li>
                </ul>

            </div>
        </div>

        


        <div className="col py-3">

        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">Consultants</h1>
      <p className="lead">Find the expert that best adapts to your project</p>
    </div>

    <div class="row row-cols-1 row-cols-md-3 text-center">
    <div class="col">
  <div className="card" >
    <img className="card-img-top" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"  style={{width: "100%", height: "40vh", objectFit: "cover"}} alt="Card image cap"/>
    <div className="card-body">
    <h5 class="card-title">Expert Name</h5>
      <p class="card-text">Short Description</p>
      <p class="card-text"><small class="text-muted">Expertise Area</small></p>
    </div>

  </div>
  </div>
  <div class="col">
  <div className="card" >
    <img className="card-img-top embed-responsive-item" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" style={{width: "100%", height: "40vh", objectFit: "cover"}} alt="Card image cap"/>
    <div className="card-body">
    <h5 class="card-title">Expert Name</h5>
      <p class="card-text">Short Description</p>
      <p class="card-text"><small class="text-muted">Expertise Area</small></p>
    </div>

    </div>
  </div>

  <div class="col">
  <div className="card">
    <img className="card-img-top embed-responsive-item" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80" style={{width: "100%", height: "40vh", objectFit: "cover"}} alt="Card image cap"/>
    <div className="card-body">
    <h5 class="card-title">Expert Name</h5>
      <p class="card-text">Short Description</p>
      <p class="card-text"><small class="text-muted">Expertise Area</small></p>
    </div>

    </div>
  </div>
</div>

<div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">Categories</h1>
      <p className="lead">Search for different IT categories consultants</p>
    </div>

    <div class="row row-cols-1 row-cols-md-3 text-center">
    <div class="col">
  <div className="card" >
    <img className="card-img-top" src="https://images.unsplash.com/photo-1604403428907-673e7f4cd341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"  style={{width: "100%", height: "40vh", objectFit: "cover"}} alt="Card image cap"/>
    <div className="card-body">
    <h5 class="card-title">Category</h5>
      <p class="card-text">Short Description</p>
      <p class="card-text"><small class="text-muted"># of consultants</small></p>
    </div>

  </div>
  </div>
  <div class="col">
  <div className="card" >
    <img className="card-img-top embed-responsive-item" src="https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" style={{width: "100%", height: "40vh", objectFit: "cover"}} alt="Card image cap"/>
    <div className="card-body">
    <h5 class="card-title">Category</h5>
      <p class="card-text">Short Description</p>
      <p class="card-text"><small class="text-muted"># of consultants</small></p>
    </div>

    </div>
  </div>

  <div class="col">
  <div className="card">
    <img className="card-img-top embed-responsive-item" src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" style={{width: "100%", height: "40vh", objectFit: "cover"}} alt="Card image cap"/>
    <div className="card-body">
    <h5 class="card-title">Category</h5>
      <p class="card-text">Short Description</p>
      <p class="card-text"><small class="text-muted"># of consultants</small></p>
    </div>

    </div>
  </div>
</div>



      </div>

    </div>
</div>
    </main>

    
  )
}
