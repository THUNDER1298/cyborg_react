import './Footer.css'

const Footer = () => {
  return (
    <footer className="py-4 text-white text-center position-relative">
        <div className="container">
            <p className="lead">
                Copyright &copy; 2024 <a href='/#'> Hamza Bencheikh</a> <br></br> All rights reserved
            </p>

            <a href="#" class="position-absolute bottom-0 end-0 p-3">
                <i class="bi bi-arrow-up-circle h2"></i>
            </a>
        </div>
    </footer>
  )
}

export default Footer