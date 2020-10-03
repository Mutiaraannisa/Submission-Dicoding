import '../component/Global-case.js';
import GlobalDataSource from '../data/Global-data.js';


const main = () => {
    const GlobalCase = document.querySelector('global-case');
  
    const getData = () => {
      GlobalDataSource.getCovidDataGlobal()
        .then((result) => (GlobalCase.covidDataGlobal = result));
    };
  
    getData();
  };

  export default main;