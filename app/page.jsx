import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const consultants = [
    {
      name: "Amelia Thompson",
      imgUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      description: "Amelia excels at comprehending, designing, and overseeing software projects in various languages.",
      export: "Software"
    },
    {
      name: "Benjamin Smith",
      imgUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      description: "Benjamin is skilled in identifying cybersecurity risks and implementing protective measures.",
      export: "Cybersecurity"
    },
    {
      name: "Charlotte Davis",
      imgUrl: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80",
      description: "Charlotte adeptly deploys and manages cloud-based solutions using diverse platforms.",
      export: "Cloud computing"
    },
    {
      name: "Daniel Wilson",
      imgUrl: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      description: "Daniel expertly manages and secures vast data volumes with his database system and modeling knowledge.",
      export: "Database"
    },
    {
      name: "Elizabeth Anderson",
      imgUrl: "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1682&q=80",
      description: "Elizabeth excels at improving satisfaction with her superior communication and problem-solving skills.",
      export: "Customers"
    },
  ]

  const categories = [
    {
      name: "Software",
      description: "Design and maintenance of computer programs for specific tasks.",
      numberOfConsultants: Math.floor((Math.random() / 10) * 1000),
      imgUrl: "https://images.unsplash.com/photo-1604403428907-673e7f4cd341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
    },
    {
      name: "Cybersecurity",
      description: "Protection of internet-connected systems from digital threats.",
      numberOfConsultants: Math.floor((Math.random() / 10) * 1000),
      imgUrl: "https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      name: "Cloud computing",
      description: "Delivery of internet-based services like storage, databases, and software.",
      numberOfConsultants: Math.floor((Math.random() / 10) * 1000),
      imgUrl: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      name: "Database",
      description: "Management and organization of structured sets of data.",
      numberOfConsultants: Math.floor((Math.random() / 10) * 1000),
      imgUrl: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
    },
    {
      name: "Customers",
      description: "Understanding and satisfying the needs of product or service users.",
      numberOfConsultants: Math.floor((Math.random() / 10) * 1000),
      imgUrl: "https://images.unsplash.com/photo-1581093805071-a04e696db334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      name: "Automation",
      description: "Use of systems to control industrial processes, reducing human intervention.",
      numberOfConsultants: Math.floor((Math.random() / 10) * 1000),
      imgUrl: "https://images.unsplash.com/photo-1567789884554-0b844b597180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      name: "Artificial intelligence",
      description: "Creation of machines that mimic human intelligence.",
      numberOfConsultants: Math.floor((Math.random() / 10) * 1000),
      imgUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80"
    },
    {
      name: "Computing",
      description: "Study and application of algorithms, hardware, software, and networks.",
      numberOfConsultants: Math.floor((Math.random() / 10) * 1000),
      imgUrl: "https://images.unsplash.com/photo-1617839625591-e5a789593135?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80"
    },
    {
      name: "Data visualization",
      description: "Graphical representation of data to make it easily understandable.",
      numberOfConsultants: Math.floor((Math.random() / 10) * 1000),
      imgUrl: "https://images.unsplash.com/photo-1584291527935-456e8e2dd734?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80"
    },
    {
      name: "Embedded systems",
      description: "Design of dedicated computer systems for specific functi",
      numberOfConsultants: Math.floor((Math.random() / 10) * 1000),
      imgUrl: "https://images.unsplash.com/photo-1689535090070-647b1b194631?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    }
  ]

  return (
    <main>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossOrigin="anonymous"
      ></link>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossOrigin="anonymous"
        defer
      ></script>
      <section id="hero" className="bg-body-tertiary pt-5">
        <div className="container bg-body-tertiary">
          <div className="row">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="fade-up" >
              <div>
                <h1 className="display-10 fw-bold">
                  Advitify is an IT consulting platform that connects people
                  with professionals
                </h1>
                <div>
                  <div className="container">
                    <div className="row justify-content-md-center">
                      <div className="col-sm">
                        <h6 className="fw-normal text-muted mb-3">
                          Find an IT specialist with the correct expertise to
                          help you accomplish the project you&#39;re working on.
                          Advitify gives you the ability to find the correct
                          professional from the comfort of your office
                        </h6>
                        <Link href="/signIn" className="btn-get-started">Get Started</Link>
                      </div>
                      <div className="col-sm col-md-auto">
                        <Image width={120} height={164} src="/main_image2.png" className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" >
              <Image width={410} height={312} src="/main_image1.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid">
        <div className="row flex-nowrap bg-light">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light ms-5">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <Link href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-black text-decoration-none" >
                <span className="fs-5 d-none d-sm-inline">Categories</span>
              </Link>
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu" >
                {
                  categories.map((category, index) => {
                    return (
                      <li key={index} className="nav-item">
                        <Link href={`/${category.name}`} className="nav-link align-middle px-0">
                          <span className="ms-1 d-none d-sm-inline">{category.name}</span>
                        </Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <div className="col py-3">
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
              <h1 className="display-4">Consultants</h1>
              <p className="lead">
                Find the expert that best adapts to your project
              </p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 text-center">
              {
                consultants.map((consultant, index) => {
                  return (
                    <div key={index} className="col">
                      <div className="card mb-4">
                        <Image
                          className="card-img-top"
                          src={consultant.imgUrl}
                          width={200}
                          height={300}
                          alt={consultant.name}
                          style={{ objectFit: "cover" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{consultant.name}</h5>
                          <p className="card-text">{consultant.description}</p>
                          <p className="card-text">
                            <small className="text-muted">Area: {consultant.export}</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
              <h1 className="display-4">Categories</h1>
              <p className="lead">
                Search for different IT categories consultants
              </p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 text-center">
              {categories.map((category, index) => {
                return (
                  <div key={index} className="col">
                    <div className="card mb-4">
                      <Image
                        className="card-img-top"
                        src={category.imgUrl}
                        width={200}
                        height={300}
                        alt={category.name}
                        style={{ objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{category.name}</h5>
                        <p className="card-text">{category.description}</p>
                        <p className="card-text">
                          <small className="text-muted">{category.numberOfConsultants} of consultants</small>
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
