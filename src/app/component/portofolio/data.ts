export interface PortfolioData {
    name: string;
    image: string;
    github: string;
    demo: string;
  }
  
 export const dummyPortfolioData: PortfolioData[] = [
    {
      name: 'Angular Portofolio Jansen (Angular)',
      image: '../../../assets/img/portofolio/portofolioangular.jpg',
      github: 'https://www.google.com',
      demo: 'https://www.google.com',
    },
    {
      name: 'Currency Converter API (AXIOS & HTTPClient)',
      image: '../../../assets/img/portofolio/currencyconverter.jpg',
      github: 'https://github.com/jansensu19/currency-converter-api',
      demo: 'https://currencyconverteraxioshttp.netlify.app',
    },
    {
      name: 'Kincir Tech HomeWeb (React)',
      image: '../../../assets/img/portofolio/kincirtech.jpg',
      github: 'https://github.com/jansensu19/Kincir-Tech-With-Tailwind',
      demo: 'https://kincir-tech.netlify.app',
    },
    {
        name: 'BookSelf-DOM (HTML/CSS/JS)',
        image: '../../../assets/img/portofolio/bookselfdom.jpg',
        github: 'https://github.com/jansensu19/DiCodingFrontEnd',
        demo: 'https://bookself-dom.netlify.app',
      },
      {
        name: 'Elearning Cuda (React)',
        image: '../../../assets/img/portofolio/elearningcuda.jpg',
        github: 'https://github.com/jansensu19/E-Learning-Web-React-',
        demo: 'https://elearning-cuda.netlify.app',
      },
  ];