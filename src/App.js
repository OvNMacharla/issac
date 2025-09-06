import React, { useState, useEffect } from 'react';
import { 
  Hammer, 
  Award, 
  Users, 
  Clock, 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Calendar,
  Wrench,
  Home,
  Building,
  MessageSquare,
  PenTool,
  FileText,
  Package,
  Settings
} from 'lucide-react';
import backgroundImage from './images/background.jpg';
import craft from './images/carft.jpg'
import finish from './images/finish.webp'
import tools from './images/tools.jpg'
import workshop from './images/workshop.jpg'

// Import business data
import businessData from './data/businessData.json';

const App = () => {
  const [activeService, setActiveService] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const iconMap = {
    Hammer: Hammer,
    Award: Award,
    Users: Users,
    Clock: Clock,
    Star: Star,
    CheckCircle: CheckCircle,
    Wrench: Wrench,
    Home: Home,
    Building: Building,
    MessageSquare: MessageSquare,
    PenTool: PenTool,
    FileText: FileText,
    Package: Package,
    Settings: Settings
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We will contact you within 24 hours.`);
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
        <div className="container-custom">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-amber-600 p-2 rounded-lg">
                <Hammer className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-l font-bold text-gray-900">{businessData.company.name}</span>
                <p className="text-xs text-amber-600 font-medium">{businessData.company.experience}</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Services</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Projects</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Contact</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary"
              >
                Get Quote
              </button>
            </div>

            <div className="mobile-menu-container md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>

              {/* Mobile Menu */}
              {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
                  <div className="px-4 py-3 space-y-1">
                    <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded">Home</button>
                    <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded">Services</button>
                    <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded">Projects</button>
                    <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded">About</button>
                    <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded">Contact</button>
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="block w-full text-left px-3 py-2 bg-amber-600 text-white rounded-lg mt-2 font-medium"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="h-4 w-4 mr-2" />
                {businessData.company.experience} of Excellence
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {businessData.hero.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-4 font-medium">
                {businessData.hero.subtitle}
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {businessData.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="btn-primary text-lg px-8 py-4 flex items-center justify-center"
                >
                  {businessData.hero.primaryCTA}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="btn-secondary text-lg px-8 py-4"
                >
                  {businessData.hero.secondaryCTA}
                </button>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="bg-gradient-to-br from-amber-200 to-orange-200 rounded-2xl p-8 transform rotate-3">
                <div className="bg-white rounded-xl p-6 transform -rotate-3 shadow-2xl">
                  <img 
                    src={backgroundImage}
                    alt="Professional Carpentry Work"
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Quality Guaranteed</p>
                    <p className="text-sm text-gray-600">Premium Materials Only</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-amber-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="text-2xl font-bold">15+</p>
                  <p className="text-sm">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {businessData.stats.map((stat, index) => {
              const IconComponent = iconMap[stat.icon];
              return (
                <div key={index} className="text-center card hover:shadow-md transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 text-amber-600 rounded-lg mb-3">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Professional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive carpentry solutions for every need. From custom furniture to complete renovations, 
              we deliver exceptional quality and craftsmanship that stands the test of time.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {businessData.services.map((service, index) => {
                const IconComponent = iconMap[service.icon];
                return (
                  <div
                    key={service.id}
                    className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                      activeService === index 
                        ? 'bg-amber-600 text-white shadow-lg transform scale-105' 
                        : 'bg-white hover:bg-amber-50 border border-gray-200 hover:border-amber-200'
                    }`}
                    onClick={() => setActiveService(index)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg transition-colors ${
                        activeService === index 
                          ? 'bg-white/20' 
                          : 'bg-amber-100'
                      }`}>
                        <IconComponent className={`h-6 w-6 ${
                          activeService === index ? 'text-white' : 'text-amber-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                        <p className={`text-sm ${activeService === index ? 'text-white/90' : 'text-gray-600'}`}>
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="card shadow-lg">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {businessData.services[activeService].name}
                  </h3>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    {businessData.services[activeService].category}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {businessData.services[activeService].description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Starting Price</p>
                    <p className="text-lg font-semibold text-amber-600">
                      {businessData.services[activeService].price}
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Typical Duration</p>
                    <p className="text-lg font-semibold text-blue-600">
                      {businessData.services[activeService].duration}
                    </p>
                  </div>
                </div>
              </div>

              <h4 className="font-semibold text-gray-900 mb-3">Service Includes:</h4>
              <div className="grid grid-cols-1 gap-2 mb-6">
                {businessData.services[activeService].features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full btn-primary"
              >
                Get Quote for This Service
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of exceptional carpentry projects that showcase our commitment to quality, 
              innovation, and customer satisfaction across residential and commercial spaces.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={businessData.projects[activeProject].image}
                  alt={businessData.projects[activeProject].title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {businessData.projects[activeProject].category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {businessData.projects[activeProject].year}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {businessData.projects[activeProject].title}
                </h3>
                <p className="text-amber-600 font-medium mb-4 flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {businessData.projects[activeProject].location}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {businessData.projects[activeProject].description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Project Value</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {businessData.projects[activeProject].value}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Completion Time</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {businessData.projects[activeProject].duration}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {businessData.projects[activeProject].features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Browse Projects:</h4>
                <div className="flex flex-wrap gap-2">
                  {businessData.projects.map((project, index) => (
                    <button
                      key={project.id}
                      onClick={() => setActiveProject(index)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeProject === index
                          ? 'bg-amber-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {project.category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Professional Work Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach ensuring every project is delivered with precision, on time, and exceeding expectations. 
              From initial consultation to final handover, we maintain transparency at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {businessData.process.map((step, index) => {
              const IconComponent = iconMap[step.icon];
              return (
                <div key={step.step} className="relative">
                  <div className="card h-full hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-3">
                        {step.step}
                      </div>
                      <IconComponent className="h-5 w-5 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">{step.description}</p>
                    <div className="text-sm text-amber-600 font-medium flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {step.duration}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose {businessData.company.name}?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just carpenters – we're craftsmen dedicated to bringing your vision to life with 
              unmatched quality, reliability, and professional service that goes beyond expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessData.whyChooseUs.map((reason, index) => {
              const IconComponent = iconMap[reason.icon];
              return (
                <div key={index} className="text-center group hover:bg-gray-50 p-6 rounded-xl transition-colors">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 mb-4">{reason.description}</p>
                  <div className="text-left">
                    {reason.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500 mb-1">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our 
              craftsmanship, professionalism, and commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {businessData.testimonials.map((testimonial) => (
              <div key={testimonial.id} className="card hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({testimonial.rating}/5)</span>
                </div>
                <p className="text-gray-600 mb-4 italic text-sm leading-relaxed">"{testimonial.comment}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center mb-2">
                    {/* <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full mr-3 object-cover"
                    /> */}
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                      <p className="text-xs text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{testimonial.project}</span>
                    <span>{testimonial.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">About {businessData.company.name}</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {businessData.company.description}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-amber-50 p-6 rounded-lg text-center">
                  <p className="text-3xl font-bold text-amber-600 mb-2">{businessData.company.experience}</p>
                  <p className="text-gray-600 font-medium">Professional Experience</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">Since {businessData.company.established}</p>
                  {/* <p className="text-gray-600 font-medium">Founded</p> */}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Award className="h-5 w-5 text-amber-600 mr-2" />
                  Meet the Master Craftsman
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>{businessData.company.owner}</strong>, the founder and lead craftsman, brings over 15 years of 
                  passionate dedication to the art of carpentry. From humble beginnings as an apprentice to becoming 
                  one of Hyderabad's most trusted carpenters, {businessData.company.owner.split(' ')[0]} has built a reputation for exceptional quality and 
                  unwavering commitment to client satisfaction.
                </p>
                <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-600">
                  <p className="text-gray-700 italic">
                    "Every piece of wood has a story to tell, and every project is an opportunity to create something 
                    beautiful and lasting. That's what drives me every single day." 
                  </p>
                  <p className="text-amber-600 font-medium mt-2">- {businessData.company.owner}</p>
                </div>
              </div>

              {/* {businessData.certifications && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Certifications & Credentials</h3>
                  <div className="space-y-3">
                    {businessData.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <Award className="h-5 w-5 text-amber-600 mr-3" />
                        <div>
                          <p className="font-medium text-gray-900">{cert.name}</p>
                          <p className="text-sm text-gray-600">{cert.issuer} - {cert.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )} */}
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src={workshop} alt="Workshop Interior" className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow" />
                  <img src={craft} alt="Craftsmanship Detail" className="w-full h-60 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow" />
                </div>
                <div className="space-y-4 mt-8">
                  <img src={tools} alt="Professional Tools" className="w-full h-60 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow" />
                  <img src={finish} alt="Finished Project" className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow" />
                </div>
              </div>
              
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">200+</p>
                  <p className="text-gray-600 text-sm font-medium">Satisfied Clients</p>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your project? Contact us today for a free consultation and detailed quote. 
              We're here to bring your carpentry dreams to life with professional expertise and exceptional service.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="card shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      {businessData.services.map(service => (
                        <option key={service.id} value={service.name}>{service.name}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Details & Requirements</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      placeholder="Please describe your project requirements, preferred timeline, budget range, and any specific needs or preferences..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn-primary text-lg py-4 flex items-center justify-center"
                  >
                    Send Message & Request Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-8">
              <div className="card shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Phone & WhatsApp</p>
                      <p className="text-gray-600">{businessData.company.phone}</p>
                      <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Email Address</p>
                      <p className="text-gray-600">{businessData.company.email}</p>
                      <p className="text-sm text-gray-500">Response within 2-4 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Service Area</p>
                      <p className="text-gray-600">{businessData.company.location}</p>
                      <p className="text-sm text-gray-500">On-site consultations available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-lg">
                      <Calendar className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Working Hours</p>
                      <p className="text-gray-600">{businessData.company.workingHours.weekdays}</p>
                      <p className="text-gray-600">{businessData.company.workingHours.weekend}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-600 text-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  Free Consultation
                </h3>
                <p className="mb-6 text-amber-100 leading-relaxed">
                  Get expert advice on your carpentry project with our complimentary consultation service. 
                  We'll visit your site, understand your requirements, and provide detailed recommendations 
                  with no obligation.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-amber-200 mr-3" />
                    <span className="text-amber-100">On-site visit and precise measurement</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-amber-200 mr-3" />
                    <span className="text-amber-100">3D design visualization & mockups</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-amber-200 mr-3" />
                    <span className="text-amber-100">Detailed cost breakdown & timeline</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-amber-200 mr-3" />
                    <span className="text-amber-100">Premium material recommendations</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-amber-200 mr-3" />
                    <span className="text-amber-100">Project planning & scheduling</span>
                  </div>
                </div>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors w-full"
                >
                  Schedule Free Consultation
                </button>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Response Promise</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">2-4h</p>
                    <p className="text-xs text-gray-600">Email Response</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">24h</p>
                    <p className="text-xs text-gray-600">Quote Delivery</p>
                  </div>
                  <div className="p-3 bg-amber-50 rounded-lg">
                    <p className="text-2xl font-bold text-amber-600">48h</p>
                    <p className="text-xs text-gray-600">Site Visit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-amber-600 p-2 rounded-lg">
                  <Hammer className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">{businessData.company.name}</span>
                  <p className="text-xs text-amber-400">{businessData.company.experience}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {businessData.company.tagline}
              </p>
              <p className="text-gray-400 text-sm">
                Building dreams with precision, passion, and {businessData.company.experience} of expertise 
                in {businessData.company.location}.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-amber-400">Our Services</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {businessData.services.map(service => (
                  <li key={service.id}>
                    <button 
                      onClick={() => scrollToSection('services')}
                      className="hover:text-amber-400 transition-colors text-left"
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-amber-400">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-amber-400 transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-amber-400 transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('projects')} className="hover:text-amber-400 transition-colors">Our Projects</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-amber-400 transition-colors">Contact Us</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-amber-400 transition-colors">Get Quote</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-amber-400">Contact Info</h3>
              <div className="space-y-3 text-gray-400 text-sm">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-amber-600" />
                  {businessData.company.phone}
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-amber-600" />
                  {businessData.company.email}
                </p>
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-amber-600" />
                  {businessData.company.location}
                </p>
                <p className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-amber-600" />
                  {businessData.company.workingHours.weekdays}
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* <p className="text-gray-400 text-sm text-center md:text-left">
                &copy; 2024 {businessData.company.name}. All rights reserved. 
              </p> */}
              <p className="text-gray-400 text-sm text-center md:text-right mt-2 md:mt-0">
                Crafted with passion in {businessData.company.location} | Since. {businessData.company.established}
              </p>
            </div>
            <div className="flex justify-center items-center mt-4 space-x-6">
              <div className="flex items-center text-amber-400 text-sm">
                <Award className="h-4 w-4 mr-1" />
                Premium Quality Guaranteed
              </div>
              {/* <div className="flex items-center text-amber-400 text-sm">
                <CheckCircle className="h-4 w-4 mr-1" />
                Fully Licensed & Insured
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;